"use client";

import useConversation from "@/app/hooks/useConversation";
import { FullConversationType } from "@/app/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import ConversationBox from "./ConversationBox";
import clsx from "clsx";


interface ConversationListProps{
    initialItems:FullConversationType[];
}

const ConversationList:React.FC<ConversationListProps> =({
    initialItems
}) =>{
    const [items,setItems] = useState(initialItems);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const router = useRouter();

    const {conversationId,isOpen } = useConversation();
    return(
    <>
    <GroupChatModal 
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}/>
      <aside
      className={clsx(`
      fixed
      inset-y-0
      pb-20
      lg:pb-0
      lg:left-20
      lg:w-80
      lg:block
      overflow-y-auto
      border-r
      border-gray-200`,
      isOpen ? 'hidden' : 'block w-full left-0')}>
        <div className="px-5">
            <div className="flex justify-between mb-4 pt-4">
                <div
                className="
                text-2xl
                font-bold
                text-orange-900">
                    Scrolls
                </div>
                <div
                onClick={() => setIsModalOpen(true)}
                className="
                rounded-full
                p-2
                bg-orange-100
                text-orange-600
                cursor-pointer
                hover:opacity-75
                transition">
                    <MdOutlineGroupAdd size={20}/>
                </div>
            </div>
            {items.map((item)=>(
                <ConversationBox 
                key={item.id}
                data={item}
                selected={conversationId == item.id}/>
            ))}
        </div>
      </aside>
      </>
    );
}

export default ConversationList;