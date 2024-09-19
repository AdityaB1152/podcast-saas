'use client';

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const LeftSidebar = () => {
    const pathName = usePathname();
    const router = useRouter();

  return (
    <section className='left_sidebar'>
        <nav className='flex flex-col gap-6'>
            <Link href="/" className=' flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'>
                <Image src="/icons/podcast.png" alt='logo' width={50} height={50}/>
                <h1 className='ml-5  text-24 font-extrabold text-white-1 max-lg:hidden'>Podcastr</h1>
            </Link>

            {sidebarLinks.map(({route , label, imgURL})=>{
                const isActive = pathName === route || pathName.startsWith(`${route}/`);
                

                return <Link href={route} key={label} className={cn("flex gap-3 items-center py-4 max-lg:px-4 justify-start",{
                    'bg-nav-focus border-r-4 border-orange-1':isActive
                })}>
                <Image src={imgURL} alt={label} width={24} height={24}/>
                <p>{label}</p>
                </Link>
            })}

        </nav>
    </section>
  )
}

export default LeftSidebar