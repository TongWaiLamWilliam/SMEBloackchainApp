"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Wallet, ArrowUpDown, Copy } from 'lucide-react'

const data = [
  { name: 'Jan', TTK: 4000, NTTK: 2400 },
  { name: 'Feb', TTK: 3000, NTTK: 1398 },
  { name: 'Mar', TTK: 2000, NTTK: 9800 },
  { name: 'Apr', TTK: 2780, NTTK: 3908 },
  { name: 'May', TTK: 1890, NTTK: 4800 },
  { name: 'Jun', TTK: 2390, NTTK: 3800 },
]

export default function MyWallet() {
  const [ttkBalance, setTtkBalance] = useState(1000)
  const [nttkBalance, setNttkBalance] = useState(500)
  const [convertAmount, setConvertAmount] = useState("")
  const [convertType, setConvertType] = useState<"HKDtoTTK" | "TTKtoHKD" | null>(null)
  const walletAddress = "0x1234567890123456789012345678901234567890"

  const handleConvert = () => {
    if (convertType === "HKDtoTTK") {
      setTtkBalance(prev => prev + Number(convertAmount))
    } else if (convertType === "TTKtoHKD") {
      setTtkBalance(prev => Math.max(0, prev - Number(convertAmount)))
    }
    setConvertAmount("")
    setConvertType(null)
  }

  const copyWalletAddress = () => {
    navigator.clipboard.writeText(walletAddress)
    // You might want to show a toast or some other feedback here
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-sm font-medium">My Wallet Address:</span>
        <code className="bg-gray-100 px-2 py-1 rounded">{`${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`}</code>
        <Button variant="outline" size="sm" onClick={copyWalletAddress}>
          <Copy className="h-4 w-4 mr-2" />
          Copy
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">TTK Balance</CardTitle>
            <Wallet className="h-4 w-4 opacity-70" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ttkBalance} TTK</div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">NTTK Balance</CardTitle>
            <Wallet className="h-4 w-4 opacity-70" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{nttkBalance} NTTK</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full" onClick={() => setConvertType("HKDtoTTK")}>
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Convert HKD to TTK
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Convert HKD to TTK</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="hkd-amount" className="text-right">
                  HKD Amount
                </Label>
                <Input
                  id="hkd-amount"
                  type="number"
                  className="col-span-3"
                  value={convertAmount}
                  onChange={(e) => setConvertAmount(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleConvert}>Convert</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full" onClick={() => setConvertType("TTKtoHKD")}>
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Convert TTK to HKD
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Convert TTK to HKD</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="ttk-amount" className="text-right">
                  TTK Amount
                </Label>
                <Input
                  id="ttk-amount"
                  type="number"
                  className="col-span-3"
                  value={convertAmount}
                  onChange={(e) => setConvertAmount(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleConvert}>Convert</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-blue-600">Balance History</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="TTK" stroke="#3b82f6" />
              <Line type="monotone" dataKey="NTTK" stroke="#22c55e" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

