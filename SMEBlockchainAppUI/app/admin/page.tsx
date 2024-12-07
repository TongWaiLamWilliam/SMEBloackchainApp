"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const circulationData = [
  { date: '2023-01', TTK: 1000000, NTTK: 500000 },
  { date: '2023-02', TTK: 1200000, NTTK: 600000 },
  { date: '2023-03', TTK: 1500000, NTTK: 750000 },
  { date: '2023-04', TTK: 1800000, NTTK: 900000 },
  { date: '2023-05', TTK: 2000000, NTTK: 1000000 },
]

const topHolders = [
  { address: '0x1234...5678', balance: 100000, percentage: 5 },
  { address: '0x2345...6789', balance: 90000, percentage: 4.5 },
  { address: '0x3456...7890', balance: 80000, percentage: 4 },
  { address: '0x4567...8901', balance: 70000, percentage: 3.5 },
  { address: '0x5678...9012', balance: 60000, percentage: 3 },
  { address: '0x6789...0123', balance: 50000, percentage: 2.5 },
  { address: '0x7890...1234', balance: 40000, percentage: 2 },
  { address: '0x8901...2345', balance: 30000, percentage: 1.5 },
  { address: '0x9012...3456', balance: 20000, percentage: 1 },
  { address: '0x0123...4567', balance: 10000, percentage: 0.5 },
]

export default function CoinsInCirculation() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Coins in Circulation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Total TTK Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">2,000,000 TTK</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total NTTK Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">1,000,000 NTTK</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Circulation History</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={circulationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="TTK" stroke="#8884d8" />
              <Line type="monotone" dataKey="NTTK" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Top 10 TTK Holders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Wallet Address</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Percentage</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topHolders.map((holder, index) => (
                <TableRow key={index}>
                  <TableCell>{holder.address}</TableCell>
                  <TableCell>{holder.balance} TTK</TableCell>
                  <TableCell>{holder.percentage}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

