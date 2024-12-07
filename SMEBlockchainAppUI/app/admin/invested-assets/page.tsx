"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const currentInvestedAssets = [
  { type: 'Bonds', bank: 'HSBC', amount: 2000000 },
  { type: 'Stocks', bank: 'DBS', amount: 1500000 },
  { type: 'Cash', bank: 'SCBHK', amount: 500000 },
  { type: 'Bonds', bank: 'DBS', amount: 1000000 },
  { type: 'Stocks', bank: 'HSBC', amount: 1500000 },
  { type: 'Gold', bank: 'SCBHK', amount: 500000 },
]

const assetTransactions = [
  { date: '2024-03-08', type: 'Stock', bank: 'HSBC', action: 'Buy', amount: 15000 },
  { date: '2024-03-15', type: 'Bond', bank: 'DBS', action: 'Sell', amount: 8000 },
  { date: '2024-03-22', type: 'Real Estate', bank: 'SCBHK', action: 'Buy', amount: 50000 },
  { date: '2024-03-29', type: 'Cash', bank: 'HSBC', action: 'Deposit', amount: 100000 },
  { date: '2024-04-05', type: 'Stock', bank: 'DBS', action: 'Sell', amount: 20000 },
]

export default function InvestedAssets() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Invested Assets</h1>
      
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
                <TableHead>Bank</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assetTransactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.bank}</TableCell>
                  <TableCell>{transaction.action}</TableCell>
                  <TableCell>${transaction.amount.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

    </div>
  )
}

