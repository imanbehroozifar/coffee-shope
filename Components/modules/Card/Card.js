import ChevronLeft from '@/Components/icons/ChevronLeft'
import Link from 'next/link'
import React from 'react'

const Card = () => {
    return (
        <div className="absolute  top-full left-0 opacity-0 invisible  group-hover:opacity-100 group-hover:visible w-[400px] p-5 bg-white dark:bg-zinc-700 rounded-2xl tracking-normal shadow-normal border-t-[3px] border-t-orange-300 transition-all delay-75">
            {/* card header */}
            <div className='flex items-center justify-between font-DanaMedium text-xs'>
                <span className='text-gray-400  -tracking-tighter'>1 مورد</span>
                <Link href='/basket' className='flex justify-center text-orange-300'>
                    مشاهده سبد خرید
                    <ChevronLeft />
                </Link>
            </div>
            {/* card body */}
            <div className=' pb-1 border-b border-b-gray-300 dark:border-b-white/10 divide-y divide-gray-300 dark:divide-white/30 child:py-5'>
                <div className='flex gap-x-2.5'>
                    <img src='/images/products/p1.png' className='w-[120px] h-[120]' alt='product 1' />
                    <div className='flex flex-col justify-between'>
                        <h4 className='font-DanaMedium text-base text-zinc-700 dark:text-white line-clamp-2'>
                             قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                        </h4>
                        <div>
                            <span className='text-teal-600 dark:text-emerald-500 text-xs tracking-tighter'>
                                14.500 تومان تخفیف
                            </span>
                            <div className='text-zinc-700 dark:text-white font-DanaDemiBold '>
                                175,000
                                <span className='font-Dana text-sm'>تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-x-2.5'>
                    <img src='/images/products/p1.png' className='w-[120px] h-[120]' alt='product 1' />
                    <div className='flex flex-col justify-between'>
                        <h4 className='font-DanaMedium text-base text-zinc-700 dark:text-white line-clamp-2'>
                             قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                        </h4>
                        <div>
                            <span className='text-teal-600 dark:text-emerald-500 text-xs tracking-tighter'>
                                14.500 تومان تخفیف
                            </span>
                            <div className='text-zinc-700 dark:text-white font-DanaDemiBold '>
                                175,000
                                <span className='font-Dana text-sm'>تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* card footer */}
            <div className='flex justify-between items-center mt-4'>
                <div>
                    <span className='text-xs tracking-tighter text-gray-400 dark:text-gray-300'>
                        مبلغ قابل پرداخت
                    </span>
                    <div className='text-xl text-zinc-700 font-semibold dark:text-white'>
                        175,000
                        <span className='text-xs'>تومان</span>
                    </div>
                </div>
                <Link href='#' className=' text-white text-lg px-7 py-3 bg-teal-600 dark:bg-emerald-500 hover:bg-teal-700 dark:hover:bg-emerald-600 rounded-xl'>ثبت سفارش</Link>
            </div>
        </div>
    )
}

export default Card