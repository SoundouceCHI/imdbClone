import Header from '@/components/header'
import './globals.css'
import Providers from "./Providers"
import Navbar from '@/components/Navbar'

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
            
            {children}
        </Providers>
        
        
      </body>
    </html>
  )
}
