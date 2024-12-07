"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload } from 'lucide-react'

const currentInvestedAssets = [
  { type: 'Bonds', amount: 5000000 },
  { type: 'Stocks', amount: 3000000 },
  { type: 'Cash', amount: 1000000 },
  { type: 'Gold', amount: 500000 },
]

const assetTransactions = [
  { date: '2024-03-08', type: 'Stock', action: 'Buy', amount: 15000 },
  { date: '2024-03-15', type: 'Bond', action: 'Sell', amount: 8000 },
  { date: '2024-03-22', type: 'Real Estate', action: 'Buy', amount: 50000 },
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
                <TableHead>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentInvestedAssets.map((asset, index) => (
                <TableRow key={index}>
                  <TableCell>{asset.type}</TableCell>
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
                <TableHead>Invest/Withdraw</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Project Investment/Asset Withdraw</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {assetTransactions.map((transaction, index) => (
                <TableRow key={index}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.action === "Buy" ? "Invest" : "Withdraw"}</TableCell>
                  <TableCell>${transaction.amount.toLocaleString()}</TableCell>
                  <TableCell>{transaction.action === "Buy" ? "Project Investment" : "Asset Withdraw"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upload Reserved Assets Proof and Documents</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Input type="file" id="asset-proof" />
              <Button className="mt-2">
                <Upload className="mr-2 h-4 w-4" /> Upload Asset Proof
              </Button>
            </div>
            <div>
              <Input type="file" id="position-document" />
              <Button className="mt-2">
                <Upload className="mr-2 h-4 w-4" /> Upload Position Document
              </Button>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Uploaded Documents</h3>
            <ul className="list-disc pl-5">
              <li>Asset_Proof_2024-03-01.pdf</li>
              <li>Position_Document_2024-03-15.xlsx</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

