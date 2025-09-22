'use client'
import { Playwrite_AU_NSW } from "next/font/google";
import { Cloud, Menu, X, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import useAuthSession from "@/hooks/auth/AuthSession";
import SignOutBtn from "./auth/SignOutBtn";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const playwrite_au_nsw = Playwrite_AU_NSW({
  subsets: ["latin"],
});

export default function Header() {

  const { authState, userProfileInfo, loading } = useAuthSession();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 w-full px-4 py-3 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md border-b shadow-sm' : 'bg-background/40 backdrop-blur-sm'}`}>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link href="/" className='flex items-center gap-2 group'>
          <div className='relative'>
            <Cloud size={34} className='text-primary transition-transform group-hover:scale-110' />
            <Sparkles size={12} className='absolute -top-1 -right-1 text-yellow-500 fill-yellow-500 animate-pulse' />
          </div>
          <h1 className={`text-xl font-bold ${playwrite_au_nsw.className}`}>Cloud for Nothing</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center space-x-1'>
          <Link href="#about" className='px-3 py-2 rounded-md hover:text-primary transition-colors font-medium text-sm'>About</Link>
          <Link href="#features" className='px-3 py-2 rounded-md hover:text-primary transition-colors font-medium text-sm'>Features</Link>
          {/* <Link href="https://buymeacoffee.com/eyram_narayan/e/460224" target="_blank" className='px-3 py-2 rounded-md hover:text-primary transition-colors font-medium text-sm'>Support 🙏</Link> */}
          {
            loading ? ( 
              <div className='px-3 py-2 rounded-md font-medium text-sm'>...</div>
            ) : authState ? (
              <div className="flex items-center gap-3">
                <SignOutBtn variant={'outline'} />
                <Avatar>
                  <AvatarImage src={userProfileInfo.photoURL} />
                  <AvatarFallback>{userProfileInfo.displayName[0]}</AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <>
            <Link href="/sign-in?ref=login" className='px-3 py-2 rounded-md hover:text-primary transition-colors font-medium text-sm'>Login</Link>
            <Button className='ml-2 '>
              <Link href="/sign-in?ref=sign-in">Get Started</Link>
            </Button>
              </>
            )
          }
        </nav>

        {/* Mobile nav button */}
        <div className='block md:hidden'>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors'
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute left-0 w-full bg-background/95 backdrop-blur-md border-b transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'top-16 opacity-100' : 'top-[-100%] opacity-0 hidden'}`}>
        <nav className='px-4 py-4 space-y-3 flex flex-col'>
          <Link 
            href="#about" 
            className='px-3 py-3 rounded-md hover:text-primary transition-colors font-medium border-b border-border/10'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="#features" 
            className='px-3 py-3 rounded-md hover:text-primary transition-colors font-medium border-b border-border/10'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </Link>
          {/* <Link 
            href="https://buymeacoffee.com/eyram_narayan/e/460224" 
            target="_blank"
            className='px-3 py-3 rounded-md hover:text-primary transition-colors font-medium border-b border-border/10'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Support 🙏
          </Link> */}
          {
            loading ? ( 
              <div className='px-3 py-2 rounded-md font-medium text-sm'>...</div>
            ) : authState ? (
              <div className="flex items-center gap-3">
                <SignOutBtn variant={'outline'} />
                <Avatar>
                  <AvatarImage src={userProfileInfo.photoURL} />
                  <AvatarFallback>{userProfileInfo.displayName[0]}</AvatarFallback>
                </Avatar>
              </div>
            ) : (
              <>
                <Link 
                  href="/sign-in?ref=login" 
                  className='px-3 py-3 rounded-md hover:text-primary transition-colors font-medium border-b border-border/10'
                  onClick={() => setIsMobileMenuOpen(false)}
                  >
                  Login
                </Link>
                <Button className='mt-2 w-full'>
                  <Link href="/sign-in?ref=sign-in" onClick={() => setIsMobileMenuOpen(false)}>Get Started</Link>
                </Button>
              </>
            )
          }
        </nav>
      </div>
    </header>
  )
}