"use client";

import React, {Fragment} from "react";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import {ClipLoader} from "react-spinners";

const LoadingModal = () => {
    return(
        <Transition.Root show as={Fragment}>

            <Dialog as="div" 
            className="relative z-50" 
            onClose={() => {}}>
                <TransitionChild
                as="div"
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                    <div 
                    className="
                    fixed
                    inset-0
                    bg-orange-100
                    bg-opacity-50
                    transition-opacity"/>

                </TransitionChild>
                <div className="
                fixed
                inset-0
                z-10
                overflow-y-auto">
                    <div className="
                    flex
                    min-h-full
                    items-center
                    justify-center
                    p-4
                    text-center">
                        <div>
                            <ClipLoader size={40} color="#0284c7" />
                        </div>

                    </div>
                </div>

            </Dialog>

        </Transition.Root>
    );
}

export default LoadingModal;