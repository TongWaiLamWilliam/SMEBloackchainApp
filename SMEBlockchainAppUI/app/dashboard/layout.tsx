"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Send, FileText, User, LogOut, Menu, CreditCard, Info, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { connectMetamask } from "@/utils/metamask"
import { toast } from "@/components/ui/use-toast"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const router = useRouter()
  const pathname = usePathname()

  const handleConnectWallet = async () => {
    const result = await connectMetamask()
    if (result.success) {
      setWalletConnected(true)
      setWalletAddress(result.account)
      toast({
        title: "Wallet Connected",
        description: `Connected to ${result.account.slice(0, 6)}...${result.account.slice(-4)}`,
      })
    } else {
      toast({
        title: "Connection Failed",
        description: result.error,
        variant: "destructive",
      })
    }
  }

  const handleLogout = () => {
    router.push("/")
  }

  const isMyWalletPage = pathname === "/dashboard"

  const navItems = [
    { href: "/dashboard", label: "My Wallet", icon: CreditCard },
    { href: "/dashboard/transfer", label: "Transfer", icon: Send },
    { href: "/dashboard/apply", label: "Apply NTTK", icon: FileText },
    { href: "/dashboard/credit-score", label: "My Credit Score", icon: CreditCard },
    { href: "/dashboard/info", label: "My Info", icon: Info },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span role="img" aria-label="Coin" className="text-2xl">🪙</span>
              <h1 className="ml-2 text-2xl font-bold text-blue-600">StableCoin Financing Scheme</h1>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center">
                  Menu <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {navItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link href={item.href} className="flex items-center">
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {isMyWalletPage && (
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-blue-600">SME1</h2>
            <div className="flex items-center space-x-4">
              <Button 
                onClick={handleConnectWallet} 
                variant="outline" 
                className="flex items-center"
                disabled={walletConnected}
              >
                <span role="img" aria-label="Wallet" className="mr-2">💼</span>
                {walletConnected ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
              </Button>
              <Button onClick={handleLogout} variant="ghost" className="flex items-center">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        )}
        <main>{children}</main>
      </div>
    </div>
  )
}

