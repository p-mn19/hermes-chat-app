import { Conversation,Message,User } from "@prisma/client";

export type FullMessageType = Message &{
    image?: string | null,
    sender: User,
    seen: User[]
};

export type FullConversationType = Conversation & {
    users: User[],
    messages:FullMessageType[],
};