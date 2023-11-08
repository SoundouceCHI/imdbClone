import Header from '@/components/Header'
import './globals.css'
import Providers from "./Providers"
import Navbar from '@/components/Navbar'
import { SearchBox } from '@/components/SearchBox'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      
      <body>
        <Providers>
            {/*Header*/}
            <Header/>
            {/*Navbar*/}
            <Navbar/>

            {/*Search bar*/}
            <SearchBox/>
            {children}
        </Providers>
        
        
      </body>
    </html>
  )
}
