'use client'
import { SignIn } from '@/components/auth/SignIn'
import { Cloud } from 'lucide-react'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none ">
              {[1, 2, 3, 4, 5].map(i => (
              <div 
                  key={i}
                  className="absolute opacity-10 animate-float"
                  style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${15 + i * 5}s`
                  }}
              >
                  <Cloud size={40 + i * 10} />
              </div>
              ))}
          </div>
        <div className="w-full max-w-sm md:max-w-3xl">
          <SignIn />
        </div>
      </div>
    </Suspense>
  )
}
