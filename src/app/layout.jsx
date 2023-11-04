import Header from '@/components/header'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      
      <body>
        {/*Header*/}
        <Header/>
        {/*Navbar*/}

        {/*Search bar*/}
        
        {children}
        
      </body>
    </html>
  )
}
