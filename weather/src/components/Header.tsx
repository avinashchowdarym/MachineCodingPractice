import { Link } from "react-router";
import { CitySearch } from "./city-search";
import { ThemeToggle } from "./theme-toggle";
// import { useTheme } from "@/context/theme-provider";
import logo1 from '../weather_logo_1.png'

export function Header() {
  // const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={logo1}
            alt="Klimate logo"
            className="h-14"
          />
        </Link>

        <div className="flex gap-4">
          <CitySearch />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
