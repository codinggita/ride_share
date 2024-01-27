import logo from "../assets/logo.svg"
import { NavLink } from "react-router-dom"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage  } from "./ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Search, PlusCircle, LogOut, User } from "lucide-react";

const Header = () => {
  const isGuest = true;
  return (
    <header className="border-b-2 mx-auto flex p-3 lg:px-16 flex-row items-center justify-end">
      <NavLink to="/" className="inline-flex -order-1 items-center gap-2">
        <img src={logo} width={32} alt="RideShare" />
        <h1 className="font-bold text-xl text-blue-600 hidden md:block">RideShare</h1>
      </NavLink>
      <nav className="ml-auto flex items-center text-sm md:text-base justify-center">
        <NavLink to="/search" className="flex items-center gap-2 mr-5 hover:text-blue-700"><Search className="h-4 w-4" />Search</NavLink>
        <NavLink to="/offer-seat" className="flex items-center gap-2 mr-5 hover:text-blue-700"> <PlusCircle className="h-4 w-4"/> Publish a ride</NavLink>
      </nav>
      {isGuest ?
        <Button size='sm'>Login</Button>
        :
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Profile</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><User className="mr-2 h-4 w-4"/><span>Profile</span></DropdownMenuItem>
            <DropdownMenuItem><LogOut className="mr-2 h-4 w-4"/><span>Log Out</span></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      }
    </header>
  )
}

export default Header