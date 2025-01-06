import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";

const getConversations = async () =>{
    const currentUser = await getCurrentUser();

    if(!currentUser?.id){
        return[];
    }
    try{
        const conversations = await prisma.conversation.findMany({
            orderBy: {
                lastMessageAt:'desc'  //ordering the conversations by the latest message that has been sent
            },
            where: {
                userIds: {
                    has: currentUser.id
                }
            },
            include:{
                users:true,
                messages: {
                    include: {
                        sender: true,
                        seen:true
                    }
                }
            }
        });

        return conversations;

    }catch(error:any){
        return[];
    }
};
export default getConversations;