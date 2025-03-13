import { ModeToggle } from "./mode-toggle"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 m-auto supports-[backdrop-filter] :bg-background/60 ">
        <div className="flex justify-between px-10">
            ToDo Tasks
            <ModeToggle/>
        </div>
    </header>
  )
}

export default Navbar
