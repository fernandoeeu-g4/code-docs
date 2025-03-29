import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "@tanstack/react-router";
import { BellIcon, Heart, Menu as MenuIcon, Search, Users } from "lucide-react";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Início", href: "/", current: true },
  { name: "Pautas", href: "/pautas", current: false },
  { name: "Centrais", href: "/centrais", current: false },
  { name: "Campanhas", href: "/campanhas", current: false },
  { name: "Calendário de Relevância", href: "/calendario", current: false },
  { name: "Sobre", href: "/sobre", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "/sign-out" },
];

export function Navbar() {
  return (
    <nav className="">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="shrink-0">
            <img
              className="h-8 w-8"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>

          <div className="hidden md:block flex-grow">
            <div className="flex items-center justify-end gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-800 hover:bg-gray-500 hover:text-white"
                  } rounded-md px-3 py-2 text-sm font-medium transition-colors`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}

              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5 text-[#0D19DF]" />
              </Button>

              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5 text-[#0D19DF]" />
              </Button>

              <Button variant="ghost" size="icon">
                <Users className="h-5 w-5 text-[#0D19DF]" />
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:max-w-none bg-gray-800"
              >
                <div className="space-y-4">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`${
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white"
                        } block rounded-md px-3 py-2 text-base font-medium`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <Separator className="border-gray-700" />
                  <div className="px-2">
                    <div className="flex items-center px-3">
                      <div className="shrink-0">
                        <Avatar>
                          <AvatarImage src={user.imageUrl} alt={user.name} />
                          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium text-gray-400">
                          {user.email}
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="ml-auto text-gray-400 hover:text-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" />
                      </Button>
                    </div>
                    <div className="mt-3 space-y-1">
                      {userNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
