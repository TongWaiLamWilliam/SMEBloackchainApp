"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Phone, Mail, FileText, Copy, Users } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { Settings } from "@/components/settings"

export default function MyInformation() {
  const [isEditing, setIsEditing] = useState(false)
  const [consentGiven, setConsentGiven] = useState(true)
  const [formData, setFormData] = useState({
    enterpriseName: "SME Company Ltd.",
    contactPerson: "John Doe",
    email: "john@smecompany.com",
    phone: "+852 1234 5678",
    businessRegistrationNumber: "BR12345678",
    address: "123 Business Street, Central, Hong Kong",
    industry: "Technology",
    accountingFirm: "",
    accountingContact: "",
    employeeCount: 0,
    businessModel: "",
    companyHistory: 0,
    fundingRecord: "",
    investorComposition: "",
    financialStatement: null
  })
  const [promoCode, setPromoCode] = useState("SME1-PROMO-2023")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormData(prev => ({ ...prev, financialStatement: file }));
  };

  const handleSave = () => {
    // Here you would typically send the data to your backend
    console.log("Saving data:", formData)
    setIsEditing(false)
  }

  const copyPromoCode = () => {
    navigator.clipboard.writeText(promoCode)
    // You might want to show a toast or some other feedback here
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">My Information</h2>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-blue-600">
            <Building2 className="mr-2" />
            SME Details
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="enterpriseName" className="text-sm font-medium text-gray-700">Enterprise Name</label>
                <Input
                  id="enterpriseName"
                  name="enterpriseName"
                  value={formData.enterpriseName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="contactPerson" className="text-sm font-medium text-gray-700">Contact Person</label>
                <Input
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="businessRegistrationNumber" className="text-sm font-medium text-gray-700">Business Registration Number</label>
                <Input
                  id="businessRegistrationNumber"
                  name="businessRegistrationNumber"
                  value={formData.businessRegistrationNumber}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="industry" className="text-sm font-medium text-gray-700">Industry</label>
                <Select
                  disabled={!isEditing}
                  value={formData.industry}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Technology">Technology</SelectItem>
                    <SelectItem value="Finance">Finance</SelectItem>
                    <SelectItem value="Healthcare">Healthcare</SelectItem>
                    <SelectItem value="Retail">Retail</SelectItem>
                    <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="address" className="text-sm font-medium text-gray-700">Address</label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="accountingFirm" className="text-sm font-medium text-gray-700">Accounting Firm</label>
                <Input
                  id="accountingFirm"
                  name="accountingFirm"
                  value={formData.accountingFirm}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="accountingContact" className="text-sm font-medium text-gray-700">Accounting Firm Contact</label>
                <Input
                  id="accountingContact"
                  name="accountingContact"
                  value={formData.accountingContact}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="employeeCount" className="text-sm font-medium text-gray-700">Number of Employees</label>
                <Input
                  id="employeeCount"
                  name="employeeCount"
                  type="number"
                  value={formData.employeeCount}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="businessModel" className="text-sm font-medium text-gray-700">Business Model</label>
                <Textarea
                  id="businessModel"
                  name="businessModel"
                  value={formData.businessModel}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="companyHistory" className="text-sm font-medium text-gray-700">Company History (in years)</label>
                <Input
                  id="companyHistory"
                  name="companyHistory"
                  type="number"
                  value={formData.companyHistory}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="fundingRecord" className="text-sm font-medium text-gray-700">Past Funding Record</label>
                <Textarea
                  id="fundingRecord"
                  name="fundingRecord"
                  value={formData.fundingRecord}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="investorComposition" className="text-sm font-medium text-gray-700">Investor Composition</label>
                <Textarea
                  id="investorComposition"
                  name="investorComposition"
                  value={formData.investorComposition}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="financialStatement" className="text-sm font-medium text-gray-700">Upload Financial Statement</label>
                <Input
                  id="financialStatement"
                  name="financialStatement"
                  type="file"
                  onChange={handleFileUpload}
                  disabled={!isEditing}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="consent"
                checked={consentGiven}
                onCheckedChange={(checked) => setConsentGiven(checked as boolean)}
              />
              <label htmlFor="consent" className="text-sm text-gray-700">
                I consent to allow StableCoin Financing Scheme to transfer my transaction/loan data to authorized third parties
              </label>
            </div>
            <div className="flex justify-end space-x-2">
              {isEditing ? (
                <>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                  <Button onClick={handleSave}>Save</Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)}>Edit</Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-blue-600">
            <Users className="mr-2" />
            Refer New Joiners
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center space-x-2">
          <Input value={promoCode} readOnly />
          <Button onClick={copyPromoCode}>
            <Copy className="mr-2 h-4 w-4" />
            Copy
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-blue-600">
            <FileText className="mr-2" />
            Campaigns Involved
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="font-medium">Active transact for 80% days in 3 months</p>
            <div className="flex items-center space-x-2">
              <Progress value={99} className="w-full" />
              <span className="text-sm font-medium">99%</span>
            </div>
          </div>
          <div>
            <p className="font-medium">Exchange $1 million HKD to TTK</p>
            <div className="flex items-center space-x-2">
              <Progress value={30} className="w-full" />
              <span className="text-sm font-medium">30%</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Settings />
    </div>
  )
}

