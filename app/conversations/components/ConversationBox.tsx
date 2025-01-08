"use client";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Conversation, Message, User} from "@prisma/client";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import clsx from "clsx";
import { FullConversationType } from "@/app/types";
import useOtherUser from "@/app/hooks/useOtherUser";
import Avatar from "@/app/components/Avatar";

interface ConversationBoxProps{
    data:FullConversationType,
    selected?:boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
    data,
    selected
}) => {
    const otherUser = useOtherUser(data);
    const session = useSession();
    const router = useRouter();

    const handleClick = useCallback(() => {
      router.push(`/conversations/${data.id}`)
    },[data.id, router]);
    const lastMessage = useMemo(()=>{
        const messages=data.messages || [];

        return messages[messages.length - 1];  //last message
    },[data.messages]);

    const userEmail = useMemo(()=>{
        return session.data?.user?.email;
    },[session.data?.user?.email]);

    const hasSeen = useMemo(()=>{
       if(!lastMessage) {
        return false;
       }

       const seenArray = lastMessage.seen || [];

       if(!userEmail){
        return false;
       }

       return seenArray
       .filter((user)=>user.email == userEmail).length != 0;
    },[userEmail, lastMessage]);

    const LastMessageText = useMemo(() => {
        if(lastMessage?.image){
           return 'Sent an image'; 
        }

        if(lastMessage?.body){
            return lastMessage.body;
        }

        return 'Started a Conversation';

    },[lastMessage]);


    return(
        <div
        onClick={handleClick}
        className={clsx(`
        w-full
        relative
        flex
        items-center
        space-x-3
        hover:bg-orange-100
        rounded-lg
        transition
        cursor-pointer
        p-3`,
        selected ? 'bg-orange-100': 'bg-orange-50')}>
            <Avatar user={otherUser} />
            <div className="min-w-0 flex-1">
            <div className="focus:outline-none">
            <div 
            className="
            flex
            justify-between
            items-center
            mb-1">
                <p
                className="
                text-md
                font-medium
                text-orange-900">
                    {data.name || otherUser.name}
                </p>
                {lastMessage?.createdAt &&(
                    <p
                    className="
                    text-xs
                    text-orange-400
                    font-light">
                        {format(new Date(lastMessage.createdAt),'p')}
                    </p>
                )}
            </div>
            <div>
                <p
                className={clsx(`
                truncate
                text-sm
                `,
                hasSeen ? 'text-orange-400' : 'text-orange-900 font-medium')}>
                    {LastMessageText}
                </p>
            </div>
            </div>
            </div>
        </div>
    );
}

export default ConversationBox;