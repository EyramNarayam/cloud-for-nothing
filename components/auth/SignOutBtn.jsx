'use client'
import React from 'react'
import { Button } from '../ui/button'
import { auth } from '@/firebase/config'
import { toast } from 'sonner'

export default function SignOutBtn({variant}) {
    const signOut = async () => {
        try {
            await auth.signOut()
            toast.success('Signed out successfully!')
        } catch (error) {
            console.error('❌ Sign-Out error:', error.message);
        }
    }
  return (
    <Button variant={variant} onClick={signOut}>Log out</Button>
  )
}
