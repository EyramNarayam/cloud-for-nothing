'use client'
import SignOutBtn from '@/components/auth/SignOutBtn'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import useAuthSession from '@/hooks/auth/AuthSession'
import { AvatarFallback } from '@radix-ui/react-avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { Plus } from 'lucide-react'
import { Loader } from 'lucide-react'
import { Cloud } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Header({add}) {
  const { authState, loading, userProfileInfo } = useAuthSession();
  return (
    <header className='lg:mx-30 md:mx-20 mx-3 my-10 py-3 px-5 border bg-background/50 rounded-full border-slate-300/50 backdrop-blur-md sticky top-10'>
        <div className='flex items-center justify-between'>
            {/* Logo */}
            <Link href={'/'} className='flex items-center gap-2'>
                <Cloud className='text-primary font-bold' size={40}/>
                {
                  loading ? <Loader />
                  :
                  authState ?
                  <Avatar>
                    <AvatarImage src={userProfileInfo.photoURL} />
                    <AvatarFallback>{userProfileInfo.displayName[0]}</AvatarFallback>
                  </Avatar>
                  :
                  <h1 className='text-2xl font-bold'>?</h1>
                }
            </Link>

            <div className='flex items-center gap-3'>
                <Button onClick={add} className={'cursor-pointer'}>Drop File <Plus /></Button>
                <SignOutBtn variant={'outline'}/>
            </div>
        </div>
    </header>
  )
}
