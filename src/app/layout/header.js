'use client'
import Link from "next/link"
export default function Header() {
    return (

<div className="flex " >
        <div className="bg-[#080808] h-[100vh] w-16 fixed hrefp-0 left-0" id="sidebar">
                <div className="container ml-4 mt-6">
                    <h1 className=' text-white font-primary  text-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]'>A<span className=" text-green-300">.</span></h1>
                    <ul className="cl text-white items-center flex leading-6 mt-16 text-md    space-y-16" id="textv">
                        <li className="opacity-60 hover:text-[#0aff9d] hover:  text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[8px] ">
                           <Link href={"#propos"}>propos</Link> 
                        </li>
                        <li className="opacity-60 hover:text-[#0aff9d]    text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] ">
                          <Link href={"#project"}>Projects</Link>  
                        </li>
                        <li className="opacity-60  hover:text-[#0aff9d]   text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] ">
                           <Link href={"#ex"}>Expérience </Link> 
                        </li>
                        <li className="opacity-60  hover:text-[#0aff9d]   text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] ">
                          <Link href={"#contact"} >Contact</Link>  
                            </li>
                    </ul>
                </div>
        </div>
</div>

    )
}