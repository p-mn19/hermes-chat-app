"use client";

import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import { useMemo } from "react";
import { format } from "date-fns";
interface ProfileDrawerProps{
    isOpen: boolean;
    onClose: () => void;
    data: Conversation & {
        users: User[]
    }
}

const ProfileDrawer:React.FC<ProfileDrawerProps> = ({
    isOpen,
    onClose,
    data
}) => {
    const otherUser = useOtherUser(data);

    const joinedDate = useMemo(() => {
        return format(new Date(otherUser.createdAt),'PP')
    },[otherUser.createdAt]);

    const title = useMemo(()=>{
        return data.name ||otherUser.name;
    },[data.name,otherUser.name]);

    const statusText = useMemo(() =>{

    },[]);
    return(
        <div></div>
    );
}

export default ProfileDrawer;