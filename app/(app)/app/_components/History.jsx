'use client'
import React, { useState } from 'react'
import Header from './Header'
import HistoryCard from './HistoryCard'
import CreateWindow from './create/CreateWindow'
import Message from './Message'
import ReadData from '@/hooks/firebase_actions/ReadData'
import useAuthSession from '@/hooks/auth/AuthSession'
import { Loader } from 'lucide-react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

export default function History() {
  const navigate = useRouter()
  const { loading, authState } = useAuthSession()
  const {data, loadingData, error } = ReadData()
  const [openAdd, setOpenAdd] = useState(false)
  const [message, setMessage] = useState(false)

  const open = () =>{
    setOpenAdd(!openAdd)
  }
  const messageWindow = () =>{
    setMessage(!message)
  }

  if(loading){
    return (
      <div className='flex items-center justify-center h-screen'>
        <h1 className='text-4xl text-primary'>
          <Loader className='animate-spin'/>
        </h1>
      </div>
    )
  }

  if(!authState){
    return navigate.push('/sign-in')
  }

  return (
    <div>
        <Header add={open}/>
        {
          openAdd && <CreateWindow close={open} messageBox={messageWindow}/>
        }
        {
          message && <Message message={'Uploaded Successfully 🚀'} windowB={messageWindow}/>
        }



        <div className='lg:mx-30 md:mx-20 mx-3 my-10'>
          <h1 className='text-xl text-muted-foreground mb-2'>{data.length} Files</h1>
          {
            loadingData ? 
            <p>Loading...</p> : error ? <p>Error: {error}</p> : data.length === 0 ? <p>No history found.</p> : 
              (
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                  {
                    data.map((item) => (
                      <HistoryCard key={item.id} data={item}/>
                    ))
                  }
                </div>
              )
            }
        </div>
    </div>
  )
}
