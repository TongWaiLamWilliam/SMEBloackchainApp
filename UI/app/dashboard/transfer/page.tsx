"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpDown, Filter } from 'lucide-react'

// Mock transaction data
const transactions = [
  { id: 1, date: '2023-06-01 14:30:00', type: 'TTK', amount: 100, recipient: '0x1234...5678', purpose: 'Supplier payment' },
  { id: 2, date: '2023-06-03 09:15:00', type: 'NTTK', amount: 50, recipient: '0x8765...4321', purpose: 'Inventory purchase' },
  { id: 3, date: '2023-05-28 16:45:00', type: 'TTK', amount: 200, recipient: '0x2468...1357', purpose: 'Service fee' },
  { id: 4, date: '2023-05-25 11:00:00', type: 'NTTK', amount: 75, recipient: '0x1357...2468', purpose: 'Equipment rental' },
  { id: 5, date: '2023-05-20 13:20:00', type: 'TTK', amount: 150, recipient: '0x3691...2580', purpose: 'Utility bill' },
]

export default function Transfer() {
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const [filter, setFilter] = useState('all')

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle transfer logic here
    setShowSuccessDialog(true)
  }

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true
    if (filter === '7days') {
      const sevenDaysAgo = new Date()
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
      return new Date(transaction.date) >= sevenDaysAgo
    }
    return true
  })

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Transfer</h2>
      <Card>
        <CardHeader>
          <CardTitle>Transfer Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTransfer} className="space-y-4">
            <Input placeholder="Receiver's Wallet Address" />
            <Input type="number" placeholder="Amount" />
            <Input placeholder="Purpose of Transfer" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Stablecoin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ttk">TTK</SelectItem>
                <SelectItem value="nttk">NTTK</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit" className="w-full">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Transfer
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            Transaction History
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter transactions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Transactions</SelectItem>
                <SelectItem value="7days">Last 7 Days</SelectItem>
              </SelectContent>
            </Select>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date & Time</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Recipient</TableHead>
                <TableHead>Purpose</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTransactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.recipient}</TableCell>
                  <TableCell>{transaction.purpose}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Transfer Successful</DialogTitle>
          </DialogHeader>
          <p>Your transfer has been completed successfully.</p>
        </DialogContent>
      </Dialog>
    </div>
  )
}

