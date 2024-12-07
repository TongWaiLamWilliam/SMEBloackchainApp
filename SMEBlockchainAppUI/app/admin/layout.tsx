import Link from "next/link"
import { CreditCard, FileText, BarChart3, Search, PieChart, FileBarChart, DollarSign, LogOut, Settings, Banknote } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function AdminLayout({
children,
}: {
children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-bold text-blue-600">Admin Portal</h1>
            <Button 
              variant="ghost" 
              size="sm"
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
          <nav>
            <ul className="space-y-2">
              <li>
                <Link href="/admin" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Coins in Circulation
                </Link>
              </li>
              <li>
                <Link href="/admin/coins-analysis" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                  <PieChart className="mr-2 h-5 w-5" />
                  Coins Analysis
                </Link>
              </li>
              <li>
                <Link href="/admin/loan-applications" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                  <FileText className="mr-2 h-5 w-5" />
                  Loan Applications
                </Link>
              </li>
              <li>
                <Link href="/admin/issuance-redemption" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                  <Banknote className="mr-2 h-5 w-5" />
                  Issuance & Redemption
                </Link>
              </li>
              <li>
                <Link href="/admin/search" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                  <Search className="mr-2 h-5 w-5" />
                  Search
                </Link>
              </li>
              <li>
                <Link href="/admin/invested-assets" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Invested Assets
                </Link>
              </li>
              <li>
                <Link href="/admin/reports" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                  <FileBarChart className="mr-2 h-5 w-5" />
                  Reports
                </Link>
              </li>
              <li>
                <Link href="/admin/settings" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                  <Settings className="mr-2 h-5 w-5" />
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}

