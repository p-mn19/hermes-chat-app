"use client";

import useConversation from "@/app/hooks/useConversation";
import { FullMessageType } from "@/app/types";
import { useEffect, useRef, useState } from "react";
import MessageBox from "./MessageBox";
import axios from "axios";
import { pusherClient } from "@/app/libs/pusher";
import { find } from "lodash";

interface BodyProps{
    initialMessages: FullMessageType[]
}
const Body: React.FC<BodyProps> = ({
    initialMessages
}) =>{
    const [messages,setMessages]=useState(initialMessages);
    const bottomRef = useRef<HTMLDivElement>(null);
    const {conversationId} = useConversation();
    useEffect(() =>{
        axios.post(`/api/conversations/${conversationId}/seen`)
    },[conversationId])

    useEffect(() =>{
        pusherClient.subscribe(conversationId);
        bottomRef?.current?.scrollIntoView();

        const messageHandler = (message:FullMessageType) => {
            setMessages((current) => {
                axios.post(`/api/conversations/${conversationId}/seen`)

                if(find(current, {id:message.id})){
                    return current;
                }
                return [...current,message];
            });

            bottomRef?.current?.scrollIntoView(); 
        };

        const updateMessageHandler = (newMessage: FullMessageType) =>{
            setMessages((current) => current.map((currentMessage) =>{
                if(currentMessage.id == newMessage.id){
                    return newMessage;
                }
                return currentMessage;
            }))
        };
        pusherClient.bind('messages:new',messageHandler);
        pusherClient.bind('message:update',updateMessageHandler)
        pusherClient.unbind('message:update',updateMessageHandler);
        //to avoid overflow
        return () => {
            pusherClient.unsubscribe(conversationId);
            pusherClient.unbind('messages:new',messageHandler);
        }
    },[conversationId]);


    return (
        <div className="flex-1 overflow-y-auto bg-orange-50">
            {messages.map((message,i)=>(
                <MessageBox
                isLast = {i == messages.length-1}
                key={message.id}
                data={message}/>
            ))}
            <div ref={bottomRef} className="pt-24"/>
        </div>
    );
}

export default Body;