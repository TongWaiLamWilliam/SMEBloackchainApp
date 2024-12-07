"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const pendingApplications = [
  { 
    id: 1, 
    applicant: "SME1", 
    amount: 10000, 
    period: 12, 
    status: "Pending",
    companyInfo: {
      name: "SME1 Corp",
      industry: "Technology",
      employees: 50,
      annualRevenue: "$5,000,000"
    },
    walletAddress: "0x1234...5678",
    transactions: 25,
    loanPurpose: "Business Expansion",
    walletIds: ["0x123", "0x456"],
    creditScore: 750,
    proposedRepaymentPeriod: 24
  },
  { 
    id: 2, 
    applicant: "SME2", 
    amount: 15000, 
    period: 18, 
    status: "Pending",
    companyInfo: {
      name: "SME2 Ltd",
      industry: "Retail",
      employees: 30,
      annualRevenue: "$3,000,000"
    },
    walletAddress: "0x5678...1234",
    transactions: 18,
    loanPurpose: "Inventory Purchase",
    walletIds: ["0x789", "0xabc"],
    creditScore: 680,
    proposedRepaymentPeriod: 18
  }
]

const approvedApplications = [
  { id: 4, applicant: "SME4", amount: 5000, period: 6, status: "Approved" },
  { id: 5, applicant: "SME5", amount: 25000, period: 36, status: "Approved" }
]

const profitLossData = {
  monthly: [
    { name: 'Jan', profit: 4000, loss: 2400 },
    { name: 'Feb', profit: 3000, loss: 1398 },
    { name: 'Mar', profit: 2000, loss: 9800 },
    { name: 'Apr', profit: 2780, loss: 3908 },
    { name: 'May', profit: 1890, loss: 4800 },
    { name: 'Jun', profit: 2390, loss: 3800 }
  ],
  quarterly: [
    { name: 'Q1', profit: 9000, loss: 13598 },
    { name: 'Q2', profit: 7060, loss: 12508 }
  ],
  yearly: [
    { name: '2021', profit: 35000, loss: 28000 },
    { name: '2022', profit: 40000, loss: 32000 },
    { name: '2023', profit: 45000, loss: 36000 }
  ]
}

const projectedProfitLoss = [
  { name: '2023', actual: 9000, projected: 9000 },
  { name: '2024', actual: 0, projected: 12000 },
  { name: '2025', actual: 0, projected: 15000 },
  { name: '2026', actual: 0, projected: 18000 }
]

export default function LoanApplications() {
  const [applications, setApplications] = useState(pendingApplications)
  const [selectedApplication, setSelectedApplication] = useState(null)

  const handleApprove = (id: number) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: "Approved" } : app
    ))
  }

  const handleReject = (id: number) => {
    setApplications(applications.filter(app => app.id !== id))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Loan Applications</h1>
      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">Pending Applications</TabsTrigger>
          <TabsTrigger value="approved">Approved Applications</TabsTrigger>
        </TabsList>
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Loan Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Amount (NTTK)</TableHead>
                    <TableHead>Period (months)</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {applications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>{app.applicant}</TableCell>
                      <TableCell>{app.amount}</TableCell>
                      <TableCell>{app.period}</TableCell>
                      <TableCell>{app.status}</TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedApplication(app)}>
                              View Details
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>Application Details: {app.applicant}</DialogTitle>
                            </DialogHeader>
                            {selectedApplication && (
                              <div className="py-4">
                                <h3 className="text-lg font-semibold mb-2">Company Information</h3>
                                <Table>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell className="font-medium">Company Name</TableCell>
                                      <TableCell>{selectedApplication.companyInfo.name}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="font-medium">Industry</TableCell>
                                      <TableCell>{selectedApplication.companyInfo.industry}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="font-medium">Employees</TableCell>
                                      <TableCell>{selectedApplication.companyInfo.employees}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="font-medium">Annual Revenue</TableCell>
                                      <TableCell>{selectedApplication.companyInfo.annualRevenue}</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                                <h3 className="text-lg font-semibold mt-4 mb-2">Loan Information</h3>
                                <Table>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell className="font-medium">Loan Purpose</TableCell>
                                      <TableCell>{selectedApplication.loanPurpose}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="font-medium">Wallet IDs Involved</TableCell>
                                      <TableCell>{selectedApplication.walletIds.join(', ')}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="font-medium">Credit Score</TableCell>
                                      <TableCell>{selectedApplication.creditScore}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                      <TableCell className="font-medium">Proposed Repayment Period</TableCell>
                                      <TableCell>{selectedApplication.proposedRepaymentPeriod} months</TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </div>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="approved">
          <Card>
            <CardHeader>
              <CardTitle>Approved Loan Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Amount (NTTK)</TableHead>
                    <TableHead>Period (months)</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {approvedApplications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>{app.applicant}</TableCell>
                      <TableCell>{app.amount}</TableCell>
                      <TableCell>{app.period}</TableCell>
                      <TableCell>{app.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Profit & Loss</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Monthly Profit/Loss</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={profitLossData.monthly}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="profit" fill="#8884d8" />
                  <Bar dataKey="loss" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quarterly Profit/Loss</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={profitLossData.quarterly}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="profit" fill="#8884d8" />
                  <Bar dataKey="loss" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Yearly Profit/Loss</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={profitLossData.yearly}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="profit" fill="#8884d8" />
                  <Bar dataKey="loss" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Projected vs Actual Profit/Loss</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={projectedProfitLoss}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="actual" stroke="#8884d8" />
                  <Line type="monotone" dataKey="projected" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

