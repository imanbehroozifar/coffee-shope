"use client"
import ArrowLeftOnRectangle from "@/Components/icons/ArrowLeftOnRectangle"
import Moon from "@/Components/icons/Moon"
import Shope from "@/Components/icons/Shope"
import Sun from "@/Components/icons/Sun"
import Link from "next/link"
import { useEffect, useState } from "react"
import Card from "../Card/Card"

const Header = () => {
    const [isDark, setIsDark] = useState(false)
    useEffect(() => {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setIsDark(true)
        } else {
            document.documentElement.classList.remove('dark')
        }
    })
    const darkModeHandler = () => {
        console.log(isDark)
        if (localStorage.theme === 'dark') {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'ligth'
            setIsDark(false)
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
            setIsDark(true)
        }
        console.log(isDark)
    }
    return (
        <header className=" fixed  top-9 left-0 right-0 hidden  md:flex items-center h-24 w-[95%] lg:w-[90%] bg-black/50  mx-auto px-5 lg:px-10 py-5 rounded-3xl   backdrop-blur-[6px]">
            <div className=" w-full flex justify-between items-center  ">
                {/* logo and menu */}
                <nav className="flex items-center gap-x-5 lg:gap-x-9 h-14">
                    {/* logo */}
                    <div className="shrink-0">
                        <img src="images/app-logo.png" alt="golden coffee" />
                    </div>
                    {/* menu */}
                    <ul className="flex gap-x-5 lg:gap-x-9 text-xl text-gray-300  h-full items-center child: leading-[56px]  ">
                        <li className="text-orange-200">
                            <Link href='#'>صفحه اصلی</Link>
                        </li>
                        {/* has sub menu */}
                        <li className="relative group">
                            <Link href='#' className="group-hover:text-orange-300 transition-colors">فروشگاه</Link>
                            {/* sum menu */}
                            <div className="absolute top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible w-52 p-6 space-y-4 text-zinc-700 dark:text-white text-base bg-white dark:bg-zinc-700 rounded-2xl tracking-normal shadow-normal border-t-[3px] border-t-orange-300 transition-all child:inline-block child:transition-colors child-hover:text-orange-300 delay-75 ">
                                <Link href='#'>قهوه ویژه</Link>
                                <Link href='#'>ویژه در سطح جهانی</Link>
                                <Link href='#'>قهوه درجه یک</Link>
                                <Link href='#'>ترکیبات تجاری</Link>
                                <Link href='#'>کپسول قهوه</Link>
                                <Link href='#'>قهوه زینو برزیلی</Link>
                            </div>
                        </li>

                        <li>
                            <Link href='#'>بلاگ ما</Link>
                        </li>
                        <li>
                            <Link href='#'>تماس با ما</Link>
                        </li>
                    </ul>
                </nav>
                {/* card & theme & login Link  */}
                <div className="flex gap-x-4 lg:gap-x-5 xl:gap-x-10 text-orange-200 text-xl">
                    {/* cad icon & theme switch btn  */}
                    <div className="flex items-center gap-x-4 lg:gap-x-5">
                        {/* card */}
                        <div className="relative group">
                            {/* card icon hover */}
                            <div className="py-3 cursor-pointer">
                                <svg className=" w-8 h-8">
                                    <Shope />
                                </svg>
                            </div>
                            {/* card box */}
                            <Card />
                        </div>
                        {/* theme */}
                        <div onClick={darkModeHandler}>
                            <svg className="w-8 h-8">
                                {
                                    isDark ? <Moon /> : <Sun />
                                }
                            </svg>
                        </div>
                    </div>
                    {/* divide Border */}
                    <span className=" block w-px h-14 bg-white/20 "></span>
                    {/* login link */}
                    <Link href='#' className="flex items-center gap-2.5">
                        <svg className=" w-8 h-8 rotate-180">
                            <ArrowLeftOnRectangle />
                        </svg>
                        <span className="hidden xl:inline-block">
                            ورود | ثبت‌نام
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header