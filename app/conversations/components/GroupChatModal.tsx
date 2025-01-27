"use client";

import Modal from "@/app/components/Modal";
import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

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
    const router = useRouter();
    const [isloading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            members:[]
        }
    });

    const members = watch('members');

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/conversations',{
            ...data,
            isGroup:true
        })
        .then(() => {
            router.refresh();
            onClose();
        })
        .catch(() => toast.error('Something went wrong'))
        .finally(() => setIsLoading(false))
    }
    return(
        <Modal
        isOpen={isOpen}
        onClose={onClose}>
            <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
            <div className="border-b border-orange-900/10 pb-12">
            <h2 className="
            text-base
            font-semibold
            leading-7
            text-orange-900">
                Gather the wanderers
            </h2>
            <p className="
            mt-1
            text-sm
            leading-6
            text-orange-600">
                Create a chat with more than 2 wanderers
            </p>   
            </div>
        </div>
            </form>

        </Modal>
    );
}

export default GroupChatModal;