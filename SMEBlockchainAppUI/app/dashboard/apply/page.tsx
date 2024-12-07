"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"

export default function ApplyNTTK() {
  const [walletAddresses, setWalletAddresses] = useState([{ address: "", purpose: "", company: "" }])

  const addWalletAddress = () => {
    setWalletAddresses([...walletAddresses, { address: "", purpose: "", company: "" }])
  }

  return (
    <div className="space-y-4">
      <Tabs defaultValue="apply">
        <TabsList>
          <TabsTrigger value="apply">Apply for Loan</TabsTrigger>
          <TabsTrigger value="status">Loan Status</TabsTrigger>
        </TabsList>
        <TabsContent value="apply">
          <Card>
            <CardHeader>
              <CardTitle>Loan Application</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount of tokens needed</Label>
                    <Input id="amount" type="number" placeholder="Enter amount" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="period">Payment period (in months)</Label>
                    <Input id="period" type="number" placeholder="Enter period" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="interest-rate">Interest rate for last loan (if any)</Label>
                    <Input id="interest-rate" type="number" placeholder="Enter interest rate" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-provider">Last loan provider name</Label>
                    <Input id="last-provider" placeholder="Enter provider name" />
                  </div>
                </div>
                {walletAddresses.map((wallet, index) => (
                  <div key={index} className="space-y-4 p-4 border border-gray-200 rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`wallet-${index}`}>Wallet Address {index + 1}</Label>
                        <Input id={`wallet-${index}`} placeholder="Enter wallet address" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`purpose-${index}`}>Purpose for Wallet {index + 1}</Label>
                        <Input id={`purpose-${index}`} placeholder="Enter purpose" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor={`company-${index}`}>Company/Legal Entity Name for Wallet {index + 1}</Label>
                      <Input id={`company-${index}`} placeholder="Enter company or legal entity name" />
                    </div>
                  </div>
                ))}
                <Button type="button" onClick={addWalletAddress} variant="outline">Add Another Wallet</Button>
                <Button type="submit" className="w-full">Apply for Loan</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="status">
          <Card>
            <CardHeader>
              <CardTitle>Loan Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p><strong>Status:</strong> Approved</p>
                <p><strong>Loan Amount:</strong> 10,000 NTTK</p>
                <p><strong>Interest Rate:</strong> 5%</p>
                <p><strong>Repayment Period:</strong> 12 months</p>
                <p><strong>Whitelist Addresses:</strong></p>
                <ul className="list-disc list-inside">
                  <li>0x1234...5678 (Supplier payments)</li>
                  <li>0x9876...5432 (Inventory purchases)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

