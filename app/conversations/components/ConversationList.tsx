"use client";

import { FullConversationType } from "@/app/types";
import { useState } from "react";


interface ConversationListProps{
    initialItems:FullConversationType[];
}

const ConversationList:React.FC<ConversationListProps> =({
    initialItems
}) =>{
    const [items,setItems] = useState(initialItems);
    return(
      <div></div>
    );
}

export default ConversationList;