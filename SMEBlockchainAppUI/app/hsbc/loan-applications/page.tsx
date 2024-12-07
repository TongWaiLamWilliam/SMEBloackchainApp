"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const pendingApplications = [
  { 
    id: 1, 
    applicant: "SME1", 
    amount: 10000, 
    period: 12, 
    status: "Pending Review",
    creditScore: 750,
    industry: "Technology",
  },
  { 
    id: 2, 
    applicant: "SME2", 
    amount: 15000, 
    period: 18, 
    status: "Pending Review",
    creditScore: 680,
    industry: "Retail",
  },
]

const approvedApplications = [
  { id: 3, applicant: "SME3", amount: 8000, period: 9, status: "Approved", approvalDate: "2023-06-01" },
  { id: 4, applicant: "SME4", amount: 20000, period: 24, status: "Approved", approvalDate: "2023-06-05" },
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

export default function HSBCLoanApplications() {
  const [applications, setApplications] = useState(pendingApplications)
  const [selectedApplication, setSelectedApplication] = useState(null)

  const handleStatusChange = (id: number, newStatus: string) => {
    setApplications(applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    ))
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">HSBC - Loan Applications</h1>
      <Tabs defaultValue="pending">
        <TabsList>
          <TabsTrigger value="pending">Pending Applications</TabsTrigger>
          <TabsTrigger value="approved">Approved Applications</TabsTrigger>
          <TabsTrigger value="profitloss">Profit & Loss</TabsTrigger>
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
                    <TableHead>Credit Score</TableHead>
                    <TableHead>Industry</TableHead>
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
                      <TableCell>{app.creditScore}</TableCell>
                      <TableCell>{app.industry}</TableCell>
                      <TableCell>{app.status}</TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              onClick={() => setSelectedApplication(app)}
                            >
                              Review
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Review Application: {app.applicant}</DialogTitle>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="amount" className="text-right">
                                  Amount
                                </Label>
                                <Input id="amount" value={app.amount} className="col-span-3" readOnly />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="period" className="text-right">
                                  Period
                                </Label>
                                <Input id="period" value={`${app.period} months`} className="col-span-3" readOnly />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="credit-score" className="text-right">
                                  Credit Score
                                </Label>
                                <Input id="credit-score" value={app.creditScore} className="col-span-3" readOnly />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="industry" className="text-right">
                                  Industry
                                </Label>
                                <Input id="industry" value={app.industry} className="col-span-3" readOnly />
                              </div>
                              <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="status" className="text-right">
                                  Status
                                </Label>
                                <Select onValueChange={(value) => handleStatusChange(app.id, value)}>
                                  <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Select status" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="Approved">Approve</SelectItem>
                                    <SelectItem value="Rejected">Reject</SelectItem>
                                    <SelectItem value="Need More Info">Need More Info</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                            </div>
                            <Button onClick={() => handleStatusChange(app.id, "Reviewed")}>
                              Submit Review
                            </Button>
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
                    <TableHead>Approval Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {approvedApplications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>{app.applicant}</TableCell>
                      <TableCell>{app.amount}</TableCell>
                      <TableCell>{app.period}</TableCell>
                      <TableCell>{app.status}</TableCell>
                      <TableCell>{app.approvalDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="profitloss">
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
        </TabsContent>
      </Tabs>
    </div>
  )
}

