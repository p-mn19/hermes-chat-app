"use client";

import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User} from "@prisma/client";

interface HeaderProps {
    conversation : Conversation & {
        users : User[]
    }
};

const Header: React.FC<HeaderProps> = ({
    conversation
}) => {
    const otherUser = useOtherUser(conversation);
    return(
        <div></div>
    );
}

export default Header;