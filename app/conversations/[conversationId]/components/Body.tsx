"use client";

import { FullMessageType } from "@/app/types";
import { useRef, useState } from "react";

interface BodyProps{
    initialMessages: FullMessageType[]
}
const Body: React.FC<BodyProps> = ({
    initialMessages
}) =>{
    const [messages,setMessages]=useState(initialMessages);
    const bottomRef = useRef<HTMLDivElement>(null);
    
    return (
        <div className="flex-1 overflow-y-auto">

        </div>
    );
}

export default Body;