"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const accountTypes = [
  { type: "SME", count: 500 },
  { type: "Employee", count: 2000 },
  { type: "SME Partner", count: 300 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

const smeData = [
  { category: "Employee Payments", amount: 50000 },
  { category: "Vendor Payments", amount: 3000000 },
  { category: "Tax Payments", amount: 7000 },
  { category: "Operational Expenses", amount: 100000 },
  { category: "Investments", amount: 500000 },
]

const tokenDistribution = [
  { name: 'TTK', value: 60 },
  { name: 'NTTK', value: 40 },
]

export default function HSBCCoinsAnalysis() {
  const [searchWallet, setSearchWallet] = useState("")
  const [currentSME, setCurrentSME] = useState(null)

  const handleSearch = () => {
    // In a real application, this would fetch data from an API
    setCurrentSME({
      name: "Example SME",
      walletAddress: searchWallet,
      data: smeData
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">HSBC - Coins Analysis</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Token Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <ResponsiveContainer width="50%" height={300}>
              <PieChart>
                <Pie
                  data={tokenDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {tokenDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div>
              <h3 className="text-lg font-semibold mb-2">Total Tokens</h3>
              <p>TTK: 6,000,000</p>
              <p>NTTK: 4,000,000</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Account Type Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Account Type</TableHead>
                  <TableHead>Count</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accountTypes.map((type) => (
                  <TableRow key={type.type}>
                    <TableCell>{type.type}</TableCell>
                    <TableCell>{type.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <ResponsiveContainer width="50%" height={300}>
              <PieChart>
                <Pie
                  data={accountTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {accountTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SME Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-4">
            <Input
              placeholder="Enter SME wallet address"
              value={searchWallet}
              onChange={(e) => setSearchWallet(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
          {currentSME && (
            <div>
              <h3 className="text-lg font-semibold mb-2">{currentSME.name}</h3>
              <p className="mb-4">Wallet: {currentSME.walletAddress}</p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={currentSME.data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="amount" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

