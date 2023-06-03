import ArrowLeftOnRectangle from "@/Components/icons/ArrowLeftOnRectangle"
import Moon from "@/Components/icons/Moon"
import Shope from "@/Components/icons/Shope"
import Link from "next/link"

const Header = () => {
    return (
        <header className="  h-24 w-[90%] bg-black/50  mx-auto px-10 py-5 rounded-3xl flex items-center fixed top-9 left-0 right-0">
            <div className=" w-full flex justify-between items-center  ">
                {/* logo and menu */}
                <nav className="flex items-center gap-9">
                    {/* logo */}
                    <div>
                        <img src="images/app-logo.png" alt="golden coffee" />
                    </div>
                    {/* menu */}
                    <ul className="flex gap-x-9 text-xl text-gray-300">
                        <li className="text-orange-200">
                            <Link href='#'>صفحه اصلی</Link>
                        </li>
                        {/* has sub menu */}
                        <li>
                            <Link href='#'>فروشگاه</Link>
                            {/* sum menu */}
                            <ul className="hidden">
                                <li>
                                    <Link href='#'>قهوه ویژه</Link>
                                </li>
                                <li>
                                    <Link href='#'>ویژه در سطح جهانی</Link>
                                </li>
                                <li>
                                    <Link href='#'>قهوه درجه یک</Link>
                                </li>
                                <li>
                                    <Link href='#'>ترکیبات تجاری</Link>
                                </li>
                                <li>
                                    <Link href='#'>کپسول قهوه</Link>
                                </li>
                                <li>
                                    <Link href='#'>قهوه زینو برزیلی</Link>
                                </li>
                            </ul>
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
                <div className="flex gap-x-10 text-orange-200 text-xl">
                    {/* cad icon & theme switch btn  */}
                    <div className="flex items-center gap-5">
                        {/* card */}
                        <div>
                            <svg className=" w-8 h-8">
                                <Shope />
                            </svg>
                        </div>
                        {/* theme */}
                        <div>
                            <svg className="w-8 h-8">
                                <Moon />
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
                        <span>
                            ورود | ثبت‌نام
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header