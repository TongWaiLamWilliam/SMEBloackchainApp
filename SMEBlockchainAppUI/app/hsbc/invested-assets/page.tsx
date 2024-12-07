"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const currentInvestedAssets = [
  { type: 'Bonds', bank: 'HSBC', amount: 2000000 },
  { type: 'Stocks', bank: 'HSBC', amount: 1500000 },
  { type: 'Cash', bank: 'HSBC', amount: 500000 },
  { type: 'Real Estate', bank: 'HSBC', amount: 3000000 },
]

const assetTransactions = [
  { date: '2024-03-08', type: 'Stock', action: 'Buy', amount: 150000 },
  { date: '2024-03-15', type: 'Bond', action: 'Sell', amount: 80000 },
  { date: '2024-03-22', type: 'Real Estate', action: 'Buy', amount: 500000 },
  { date: '2024-03-29', type: 'Cash', action: 'Deposit', amount: 1000000 },
  { date: '2024-04-05', type: 'Stock', action: 'Sell', amount: 200000 },
]

export default function HSBCInvestedAssets() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">HSBC - Invested Assets</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Current Invested Assets</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset Type</TableHead>
                <TableHead>Bank</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentInvestedAssets.map((asset, index) => (
                <TableRow key={index}>
                  <TableCell>{asset.type}</TableCell>
                  <TableCell>{asset.bank}</TableCell>
                  <TableCell>${asset.amount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Asset Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Asset Type</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assetTransactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.action}</TableCell>
                  <TableCell>${transaction.amount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Add New Investment</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="asset-type" className="block text-sm font-medium text-gray-700">Asset Type</label>
                <Select>
                  <SelectTrigger id="asset-type">
                    <SelectValue placeholder="Select asset type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bonds">Bonds</SelectItem>
                    <SelectItem value="stocks">Stocks</SelectItem>
                    <SelectItem value="cash">Cash</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                <Input id="amount" type="number" placeholder="Enter amount" />
              </div>
            </div>
            <Button type="submit">Add Investment</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

