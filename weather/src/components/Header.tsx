import { Link } from "react-router-dom"
import logo1 from '/weather_logo_1.png'
import logo2 from '/weather_logo_2.png'
import { useTheme } from "./theme-provider"
import { ModeToggle } from "./mode-toggle"


const Header = () => {
    const {theme} = useTheme();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 m-auto supports-[backdrop-filter] :bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link to={'/'}>
                <img className="h-14" src={ theme === 'dark' ? logo1 : logo2} alt="klimate-logo"/>
            </Link>
            <ModeToggle/>
        </div>
    </header>
  )
}

export default Header