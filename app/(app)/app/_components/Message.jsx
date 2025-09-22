import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { X } from 'lucide-react'
import React from 'react'

export default function Message({message, window}) {
  return (
    <div className='flex justify-center bg-background/50 backdrop-blur-sm absolute top-0 left-0 w-full h-screen items-center z-50 px-3'>
        <Card className={'px-10 py-5 max-w-xl text-center relative'}>
            <Button onClick={window} size={'icon'} className={'absolute -top-20 right-0 m-5 animate-bounce'}><X /></Button>
            <CardHeader>
                <h1 className='text-2xl font-mono'>{message}</h1>
            </CardHeader>
            <CardContent>
                <p className='text-muted-foreground'>You have successfully uploaded your files and have successfully deleted them for you. You can now close this window and view your uploaded files in the history section 👍.</p>

                <h2 className='scroll-m-20 mt-10 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>Notthing Matters 🫂</h2>
            </CardContent>
        </Card>
    </div>
  )
}
