"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LoginPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  if (username === "SME1" && password === "123") {
    router.push("/dashboard")
  } else if (username === "admin" && password === "admin") {
    router.push("/admin")
  } else if (username === "hsbc" && password === "hsbc") {
    router.push("/hsbc")
  } else {
    setError("Invalid username or password")
  }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center relative" 
      style={{
        backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nMTi0qlG9PfzEyfrbg0025dA4dHZwe.png')`
      }}>
      <div className="absolute top-4 left-4 flex items-center space-x-6">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XRqsma27xhfEBKXiQjLz6SL5XaYlRX.png"
          alt="HSBC Logo"
          width={80}
          height={80}
          className="object-contain"
        />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bxKaRhsqxAFy3LdT5QFw8l6qaRA4B5.png"
          alt="DBS Logo"
          width={80}
          height={80}
          className="object-contain"
        />
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-k1ErdBBD3lhqi5psfYZMH3AqGj0WtU.png"
          alt="Standard Chartered Logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <div className="absolute top-4 right-4">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OVjimmlLrfr2x07DvxCE8ONzSzBd5D.png"
          alt="Partnership Logo"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>
      <Card className="w-[350px] bg-white/95 backdrop-blur-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
            StableCoin Financing Scheme
          </CardTitle>
          <CardDescription className="text-gray-600">Login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input 
                  id="username" 
                  placeholder="Username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border-2 border-purple-300 focus:border-purple-500"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-2 border-purple-300 focus:border-purple-500"
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="bg-yellow-300 text-yellow-800 px-4 py-2 rounded-md shadow-md">
          <p className="font-bold text-center">Demo Only</p>
          <p className="text-sm">Just for illustration</p>
        </div>
      </div>
    </div>
  )
}

