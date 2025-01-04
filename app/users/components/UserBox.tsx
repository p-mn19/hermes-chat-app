"use client";

import { User } from "@prisma/client";

interface UserBoxProps{
    data: User
}

const UserBox:React.FC<UserBoxProps> = ({
    data
}) =>{
    return(
        <div></div>
    )
}

export default UserBox;