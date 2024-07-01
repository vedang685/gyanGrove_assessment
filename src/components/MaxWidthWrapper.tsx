import { cn } from "@/lib/utils"
import { ReactNode } from "react"
const MaxWidthWrapper = ({
    className,
    children,
    isNavbar,
}:{
    className?: string
    children: ReactNode
    isNavbar?: boolean
}) =>{
    return(
        isNavbar?(
            <div className={cn("mx-auto w-full max-w-screen-xl",className)}>
                {children}
            </div> 
        ):(
            <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20",className)}>
                {children}
            </div> 
        )
    )
}
export default MaxWidthWrapper;