import Header from '@/components/Header'
import Hero from '@/components/Home/Hero'
import React from 'react'
import { features } from './_data/features'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function page() {
  return (
    <div>
      <Header />
      <Hero />

      <section id='about'>
        <div className='lg:mx-30 md:mx-20 mx-3 my-10 text-center'>
          <h1 className='text-3xl font-mono mb-5'>About Cloud Storage for Nothing™</h1>
          <p className='text-lg text-muted-foreground'>At Cloud Storage for Nothing™, we believe in simplicity. While others waste millions on servers, encryption, and scalability, we specialize in absolutely nothing. Your files are handled with the utmost care — accepted, appreciated, and then instantly destroyed. Because in the end… nothing lasts forever.</p>
        </div>
      </section>

      <section className='lg:mx-30 md:mx-20 mx-3 my-10' id='features'>
        <div>
          <h1 className='text-3xl font-mono mb-5 text-center'>Features</h1>
          <div className='grid grid-cols-2 md:grid-cols-3'>
            {
              features.map((feature, index) => (
                <Card key={index} className='border p-5 m-2 rounded-lg hover:shadow-md transition-shadow duration-300'>
                  <CardHeader>
                    <h2 className='text-xl font-semibold'>{feature.title}</h2>
                  </CardHeader>
                  <CardContent>
                    <p className='text-muted-foreground'>{feature.description}</p>
                  </CardContent>
                </Card>
              ))
            }
          </div>
        </div>
      </section>

      <section id='why-nothing-matters'>
        <div className='lg:mx-30 md:mx-20 mx-3 my-10 text-center'>
          <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-5'>Why Nothing Matters</h1>
            <p className='text-muted-foreground text-xl'>In a world full of endless data, chaos, and information overload, we offer the ultimate relief: nothing. Nothing can't be hacked, nothing can't be stolen, and nothing can't be subpoenaed in court. Nothing is eternal, nothing is safe, and nothing truly sets you free. <br />
              <span className='mt-6 border-l-2 pl-6 italic'>At Cloud Storage for Nothing™, we proudly deliver absolutely nothing — and honestly, isn't that everything?
              </span>
            </p>
        </div>
      </section>
    </div>
  )
}
