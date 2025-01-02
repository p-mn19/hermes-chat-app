"use client";

import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps{
    href:string;
    icon:any;
    active?:boolean;
    onClick?: () => void;
}

const MobileItem:React.FC<MobileItemProps> = ({
    href,
    icon: Icon,
    active,
    onClick
}) =>{
    const handleClick = () => {
       if(onClick) {
        return onClick();
       }
    }
    return(
   <Link 
   onClick={onClick}
   href={href}
   className={clsx(`
   group
   flex
   gap-x-3
   text-sm
   leading-6
   font-semibold
   w-full
   justify-center
   p-4
   text-orange-600
   hover:text-orange-800
   hover:bg-orange-100`,
   active && 'bg-orange-100 text-orange-800')}>
    <Icon className="h-6 w-6"/>
   </Link>
    );
}

export default MobileItem;