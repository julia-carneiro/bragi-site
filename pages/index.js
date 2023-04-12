import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Main from '@/components/Main'
import NavBar from '@/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head> 
        <title>Create</title>
        <meta name='description' content='Generate'/>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Main heading='Bragi Estúdios' message='Nós criamos experiências'/>
    </div>
  )
}
