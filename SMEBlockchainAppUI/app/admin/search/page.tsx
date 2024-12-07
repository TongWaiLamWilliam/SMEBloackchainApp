"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const mockData = {
  "0x1234...5678": {
    type: "Wallet",
    status: "Active",
    balance: "10,000 TTK",
    transactions: "50",
  },
  "TX0001": {
    type: "Transaction",
    status: "Completed",
    from: "0x1234...5678",
    to: "0x5678...1234",
    amount: "1,000 TTK",
  },
  "SME1": {
    type: "Company",
    status: "Verified",
    walletAddress: "0x1234...5678",
    employees: "100",
    industry: "Technology",
    annualRevenue: "$5,000,000",
    lastLoanApplication: "2023-06-15",
  },
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResult, setSearchResult] = useState(null)

  const handleSearch = () => {
    // In a real application, this would be an API call
    setSearchResult(mockData[searchTerm] || null)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Search</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Search for Wallet / Transaction / Company</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-4">
            <Input
              placeholder="Enter wallet address, transaction ID, or company name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
          
          {searchResult && (
            <Table>
              <TableBody>
                {Object.entries(searchResult).map(([key, value]) => (
                  <TableRow key={key}>
                    <TableCell className="font-medium">{key}</TableCell>
                    <TableCell>{value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
          
          {searchTerm && !searchResult && (
            <p>No results found for "{searchTerm}"</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

