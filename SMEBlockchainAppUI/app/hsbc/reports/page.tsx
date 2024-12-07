"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const mockSMEData = {
  "SME1": {
    name: "SME1 Corp",
    walletId: "0x1234...5678",
    transactionHistory: [
      { date: "2023-05-01", inflow: 10000, outflow: 8000 },
      { date: "2023-05-02", inflow: 15000, outflow: 12000 },
      { date: "2023-05-03", inflow: 12000, outflow: 11000 },
      { date: "2023-05-04", inflow: 18000, outflow: 15000 },
      { date: "2023-05-05", inflow: 20000, outflow: 18000 },
    ],
    loanApplications: [
      { date: "2023-04-15", amount: 50000, status: "Approved" },
      { date: "2023-05-20", amount: 75000, status: "Pending" },
    ],
    financialHealth: 0.75, // 0 to 1 scale
    creditScore: 720,
    industry: "Technology",
    employees: 100,
    annualRevenue: "$5,000,000",
  }
}

export default function HSBCReports() {
  const [searchTerm, setSearchTerm] = useState("")
  const [smeData, setSMEData] = useState(null)

  const handleSearch = () => {
    // In a real application, this would be an API call
    setSMEData(mockSMEData[searchTerm] || null)
  }

  const exportPDF = () => {
    // In a real application, this would generate and download a PDF
    console.log("Exporting PDF...")
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">HSBC - SME Reports</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Generate SME Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-4">
            <Input
              placeholder="Enter SME name or wallet ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
          
          {smeData && (
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold">{smeData.name}</h2>
              <p>Wallet ID: {smeData.walletId}</p>
              
              <Card>
                <CardHeader>
                  <CardTitle>Company Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Industry</TableCell>
                        <TableCell>{smeData.industry}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Employees</TableCell>
                        <TableCell>{smeData.employees}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Annual Revenue</TableCell>
                        <TableCell>{smeData.annualRevenue}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Transaction History</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={smeData.transactionHistory}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="inflow" stroke="#8884d8" />
                      <Line type="monotone" dataKey="outflow" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Loan Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {smeData.loanApplications.map((loan, index) => (
                        <TableRow key={index}>
                          <TableCell>{loan.date}</TableCell>
                          <TableCell>{loan.amount}</TableCell>
                          <TableCell>{loan.status}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Financial Indicators</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Financial Health</TableCell>
                        <TableCell>{(smeData.financialHealth * 100).toFixed(2)}%</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Credit Score</TableCell>
                        <TableCell>{smeData.creditScore}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Average Monthly Cashflow</TableCell>
                        <TableCell>
                          ${(smeData.transactionHistory.reduce((acc, curr) => acc + curr.inflow - curr.outflow, 0) / smeData.transactionHistory.length).toFixed(2)}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
              
              <Button onClick={exportPDF}>Export as PDF</Button>
            </div>
          )}
          
          {searchTerm && !smeData && (
            <p>No results found for "{searchTerm}"</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

