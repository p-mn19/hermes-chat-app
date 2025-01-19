"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ModalProps{
    isOpen?: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const Modal:React.FC<ModalProps> = ({
    isOpen,
    onClose,
    children
}) => {
    return(
        <Transition.Root
        show={isOpen}
        as={Fragment}
        >
            <Dialog
            as="div"
            className="relative z-50"
            onClose={onClose}>
                <Transition.Child
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                    <div
                    className="fixed
                    inset-0
                    bg-orange-500
                    bg-opacity-75
                    transition-opacity" />

                </Transition.Child>
                <div 
                className="flex
                min-h-full
                items-center
                justify-center
                p-4
                text-center
                sm:p-0">
                    <Transition.Child
                    as="div"
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <div
                        className="
                        relative
                        transform
                        overflow-hidden
                        rounded-lg
                        bg-orange-100
                        px-4
                        pb-4
                        text-left
                        shadow-xl
                        transition-all
                        w-full
                        sm:my-8
                        sm:w-full
                        sm:max-w-lg
                        sm:p-6">
                            <div
                            className="
                            absolute
                            right-0
                            top-0
                            hidden
                            pr-4
                            pt-4
                            sm:block
                            z-10">
                                <button
                                type="button"
                                className="
                                rounded-md
                                bg-orange-100
                                text-orange-400
                                hover:text-orange-500
                                focus:outline-none
                                focus:ring-2
                                focus:ring-orange-500
                                focus:ring-offset-2">

                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

export default Modal;