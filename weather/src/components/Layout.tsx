import { PropsWithChildren } from "react"
import Header from "./Header"

const Layout = ({children} : PropsWithChildren) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted h-full">
        <Header />  
        
        <main className="min-h-screen container mx-auto px-4 py-8">
                  {children}
        </main>  
        <footer className="border-t border-blur py-12 supports-[backdrop-filter] :bg-background/60 ">
             <div className="container mx-auto px-4 text-center text-white">
              <p> Made by M.Avinash Chowdary </p> 
             </div>
        </footer>
    </div>
  )
}

export default Layout