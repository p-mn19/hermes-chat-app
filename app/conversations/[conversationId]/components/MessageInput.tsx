"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { HiPaperAirplane } from "react-icons/hi2";


interface MessageInputProps{
    placeholder?:string;
    id:string;
    type?:string;
    required?:boolean;
    register:UseFormRegister<FieldValues>;
    errors:FieldErrors
}
const MessageInput:React.FC<MessageInputProps> = ({
    placeholder,
    id,
    type,
    required,
    register,
    errors
}) =>{
    return(
        <div className="relative w-full">
            <input 
            id={id}
            type={type}
            autoComplete={id}
            {...register(id,{required})}
            placeholder={placeholder}
            className="
            text-orange-950
            font-light
            py-2
            px-4
            bg-orange-100
            w-full
            rounded-full
            focus:outline-none"/>
            <button
            type="submit"
            className="
            rounded-full
            p-2
            bg-orange-500
            cursor-pointer
            hover:bg-orange-600
            transition">
                <HiPaperAirplane size={18}  className="text-orange-50"/>
            </button>
        </div>
    );
}

export default MessageInput;