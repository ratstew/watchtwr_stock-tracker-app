'use client';

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const UserDropdown = () => {
    const router = useRouter();

    const handleSignOut = async () => {
        router.push("/sign-in")
    }

    const user = { name: 'John', email: 'contact@rat.com' }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                render={
                    <Button
                        variant="ghost"
                        className="flex items-center gap-3 rounded-full bg-transparent text-gray-400 transition-colors hover:bg-white/10 hover:text-yellow-500 data-[popup-open]:bg-transparent data-[popup-open]:hover:bg-transparent"
                    />
                }
            >
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                        {user.name[0]}
                    </AvatarFallback>
                </Avatar>
                <span className="text-base font-medium">{user.name}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align="end"
                sideOffset={0}
                className="min-w-56 text-gray-400"
            >
                <DropdownMenuGroup>
                    <DropdownMenuLabel>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-gray-200">{user.name}</span>
                            <span className="text-xs text-gray-500">{user.email}</span>
                        </div>
                    </DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={handleSignOut}
                    className="cursor-pointer gap-2 text-red-400 hover:text-red-300 focus:text-red-300"
                >
                    <LogOut className="h-4 w-4" />
                    Sign out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown