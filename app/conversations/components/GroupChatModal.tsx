"use client";

import { User } from "@prisma/client";

interface GroupChatModalProps {
    isOpen?:boolean;
    onClose: () => void;
    users: User[]
}

const GroupChatModal:React.FC<GroupChatModalProps>=({
    isOpen,
    onClose,
    users
}) => {
    return(
        <div></div>
    );
}

export default GroupChatModal;