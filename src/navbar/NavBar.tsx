import { Icons } from "@/components/Icons"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import NavItems from "@/components/NavItems"
import { buttonVariants } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import Link from "next/link"
import { FaHeart } from "react-icons/fa";

function NavBar() {
  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-20">
            <header className="relative bg-white">
                <MaxWidthWrapper isNavbar ={true}>
                    <div className="border-b border-gray-200">
                        <div className="flex gap-x-4 flex-row  h-24 items-center">
                            <div className="w-[15%] justify-center items-center flex flex-col ml-4 lg:ml-0">
                                <Link href='/'>
                                  <span className=" text-logoColor font-bold">BookUsNow</span>
                                </Link>
                                <div className="mt-4 flex flex-row items-center">
                                <Link href='/'>
                                  <Icons.logo color= "#989090" className="h-4 w-4"/>
                                </Link>
                                <span className="text-[11px] ml-1 text-strokeColor font-bold">Mumbai, India</span>
                                </div>
                            </div>
                            <div className="w-[70%] hidden lg:flex">
                                <NavItems/>
                            </div>
                            <div className="w-[15%] ml-auto flex items-center">
                                <div className="hidden w-full lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    <Link 
                                        href='/' 
                                        className="text-strokeColor text-sm font-bold">
                                            <span className="flex flex-row gap-x-2 items-center"><FaHeart/> Favourites</span>
                                    </Link>                                  
                                  
                                    <span className= "h-6 w-px bg-gray-200" aria-hidden/>
                              
                                    <Link 
                                        href='/' 
                                        className="text-strokeColor text-sm font-bold">
                                            <span className="flex flex-row gap-x-2 items-center">SignIn</span>
                                    </Link> 
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
  )
}

export default NavBar