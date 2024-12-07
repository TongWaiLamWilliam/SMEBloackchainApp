"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const mockData = {
  "0x1234...5678": {
    type: "Wallet",
    status: "Active",
    balance: "10,000 TTK",
    transactions: "50",
    lastTransaction: "2023-06-10",
  },
  "TX0001": {
    type: "Transaction",
    status: "Completed",
    from: "0x1234...5678",
    to: "0x5678...1234",
    amount: "1,000 TTK",
    date: "2023-06-09",
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

export default function HSBCSearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchType, setSearchType] = useState("all")
  const [searchResult, setSearchResult] = useState(null)

  const handleSearch = () => {
    // In a real application, this would be an API call
    const result = mockData[searchTerm]
    if (result && (searchType === "all" || result.type.toLowerCase() === searchType)) {
      setSearchResult(result)
    } else {
      setSearchResult(null)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">HSBC - Search</h1>
      
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
              className="flex-grow"
            />
            <Select value={searchType} onValueChange={setSearchType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Search type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="wallet">Wallet</SelectItem>
                <SelectItem value="transaction">Transaction</SelectItem>
                <SelectItem value="company">Company</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={handleSearch}>Search</Button>
          </div>
          
          {searchResult && (
            <Card>
              <CardHeader>
                <CardTitle>{searchResult.type} Information</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {Object.entries(searchResult).map(([key, value]) => (
                      <TableRow key={key}>
                        <TableCell className="font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
                        <TableCell>{value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
          
          {searchTerm && !searchResult && (
            <p className="text-red-500 mt-4">No results found for "{searchTerm}"</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Searches</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Search Term</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>0x1234...5678</TableCell>
                <TableCell>Wallet</TableCell>
                <TableCell>2023-06-10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TX0001</TableCell>
                <TableCell>Transaction</TableCell>
                <TableCell>2023-06-09</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>SME1</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>2023-06-08</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

