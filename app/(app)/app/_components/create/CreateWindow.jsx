'use client'
import React, { useState } from 'react'
import { FileDropBox } from './FileDropBox'
import { serverTimestamp } from 'firebase/firestore'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import { Cloud } from 'lucide-react'
import { toast } from 'sonner'
import { addFile } from '@/hooks/firebase_actions/addData'
import { X } from 'lucide-react'

export default function Create({close, messageBox}) {
    const [files, setFiles] = useState([])
    const [loading, setLoading] = useState(false)

    const uploadFile = async () => {
        if (files.length === 0) return toast.error("No files selected!")
            setLoading(true)
        try {
            const results = await addFile(files, 'deletes')
            console.log("Uploaded:", results)
            toast.success("Upload complete 🚀")
            setFiles([])
            messageBox()
            close()
        } catch (err) {
            console.error("Upload failed:", err)
            toast.error("Upload failed 😢")
        } finally {
            setLoading(false)
        }
    }
  return (
    <div className=' fixed top-0 left-0 w-full bg-background/30 backdrop-blur-sm z-50 h-screen overflow-auto'>
        <Button onClick={close} size={'icon'} variant={'outline'} className={'absolute top-0 right-0 m-5'}><X /></Button>
        <div className='lg:mx-30 md:mx-20 mx-3 my-10'>
            <div className='space-y-4'>
                <FileDropBox files={files} setFiles={setFiles} />
                <Button onClick={uploadFile} disabled={loading || files.length === 0}>
                    {loading ? 
                        (
                            <>
                                Uploading... <Cloud className='animate-bounce'/>
                            </>
                        ):
                        (
                            <>
                                Upload <Upload />
                            </>
                        )
                    }
                    
                </Button>
            </div>
        </div>
    </div>
  )
}
