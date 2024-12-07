"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function IssuanceRedemption() {
  const [walletAddress, setWalletAddress] = useState("")
  const [amount, setAmount] = useState("")
  const [tokenType, setTokenType] = useState("TTK")
  const [action, setAction] = useState("issue")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Submitting:", { walletAddress, amount, tokenType, action })
    // Here you would typically send this data to your backend
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Issuance & Redemption</h1>
      <Card>
        <CardHeader>
          <CardTitle>Issue or Burn Tokens</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="wallet-address">Wallet Address</Label>
              <Input
                id="wallet-address"
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                placeholder="Enter wallet address"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>
            <div className="space-y-2">
              <Label>Token Type</Label>
              <Select value={tokenType} onValueChange={setTokenType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select token type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="TTK">TTK</SelectItem>
                  <SelectItem value="NTTK">NTTK</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Action</Label>
              <RadioGroup value={action} onValueChange={setAction}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="issue" id="issue" />
                  <Label htmlFor="issue">Issue</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="burn" id="burn" />
                  <Label htmlFor="burn">Burn</Label>
                </div>
              </RadioGroup>
            </div>
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

