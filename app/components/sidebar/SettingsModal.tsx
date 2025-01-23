"use client";

import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface SettingsModalProps {
    isOpen?:boolean;
    onClose: () => void;
    currentUser: User;
}

const SettingsModal:React.FC<SettingsModalProps> = ({
    isOpen,
    onClose,
    currentUser
}) =>{
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState :{
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name: currentUser?.name,
            image:currentUser?.image
        }
    });
    return(
        <div></div>
    );
}

export default SettingsModal;