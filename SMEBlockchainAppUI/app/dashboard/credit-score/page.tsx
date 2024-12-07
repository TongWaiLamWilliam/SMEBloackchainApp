"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { CreditScoreGauge } from "@/components/credit-score-gauge"

const creditScoreData = {
  userScore: 85,
  platformAverage: 78,
}

const transactionStats = {
  totalTransactions: 157,
  averageAmount: 5230,
}

const transactionTypes = [
  { name: 'Supplier', amount: 45000 },
  { name: 'Salaries', amount: 30000 },
  { name: 'Inventory', amount: 25000 },
  { name: 'Utilities', amount: 5000 },
  { name: 'Marketing', amount: 10000 },
]

export default function MyCreditScore() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">My Credit Score</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-1 md:col-span-1">
          <CardHeader>
            <CardTitle>Credit Score Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <CreditScoreGauge score={creditScoreData.userScore} className="mb-4" />
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Your Score</TableCell>
                  <TableCell className="font-bold">{creditScoreData.userScore}/100</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Platform Average</TableCell>
                  <TableCell>{creditScoreData.platformAverage}/100</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-1">
          <CardHeader>
            <CardTitle>Transaction Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-center h-full">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Total Transactions</TableCell>
                    <TableCell>{transactionStats.totalTransactions}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Average Amount</TableCell>
                    <TableCell>${transactionStats.averageAmount.toLocaleString()}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 md:col-span-1">
          <CardHeader>
            <CardTitle>Transaction Types</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={transactionTypes} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={80} />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

