import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, CheckCircle2, XCircle, Clock, Eye, Check, X, FileText, Shield } from "lucide-react";

const kycRequests = [
  { id: "KYC001", user: "Ram Sharma", email: "ram@email.com", document: "Citizenship", docNumber: "12-34-56789", status: "pending", submitted: "2024-01-15 14:30" },
  { id: "KYC002", user: "Sita Gurung", email: "sita@email.com", document: "Passport", docNumber: "NP1234567", status: "pending", submitted: "2024-01-15 13:20" },
  { id: "KYC003", user: "Amit Thapa", email: "amit@email.com", document: "Citizenship", docNumber: "45-67-89012", status: "approved", submitted: "2024-01-14 10:30" },
  { id: "KYC004", user: "Priya Rai", email: "priya@email.com", document: "Driving License", docNumber: "DL12345", status: "rejected", submitted: "2024-01-14 09:00" },
  { id: "KYC005", user: "Krishna KC", email: "krishna@email.com", document: "Citizenship", docNumber: "78-90-12345", status: "pending", submitted: "2024-01-15 16:00" },
  { id: "KYC006", user: "Maya Limbu", email: "maya@email.com", document: "Passport", docNumber: "NP7654321", status: "approved", submitted: "2024-01-13 11:45" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "approved":
      return <Badge className="bg-green-500/10 text-green-500"><CheckCircle2 className="h-3 w-3 mr-1" />Approved</Badge>;
    case "pending":
      return <Badge className="bg-yellow-500/10 text-yellow-500"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
    case "rejected":
      return <Badge className="bg-red-500/10 text-red-500"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export default function KYCRequest() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">KYC Requests</h2>
            <p className="text-muted-foreground">Review and verify user KYC submissions</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{kycRequests.length}</div>
                  <p className="text-xs text-muted-foreground">Total Requests</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-500">{kycRequests.filter(k => k.status === "pending").length}</div>
              <p className="text-xs text-muted-foreground">Pending Review</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">{kycRequests.filter(k => k.status === "approved").length}</div>
              <p className="text-xs text-muted-foreground">Approved</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-500">{kycRequests.filter(k => k.status === "rejected").length}</div>
              <p className="text-xs text-muted-foreground">Rejected</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by name or email..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="approved">Approved</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Document" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Documents</SelectItem>
                  <SelectItem value="citizenship">Citizenship</SelectItem>
                  <SelectItem value="passport">Passport</SelectItem>
                  <SelectItem value="license">Driving License</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Document</TableHead>
                  <TableHead>Document No.</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {kycRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{request.user}</p>
                        <p className="text-xs text-muted-foreground">{request.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        {request.document}
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{request.docNumber}</TableCell>
                    <TableCell>{getStatusBadge(request.status)}</TableCell>
                    <TableCell className="text-muted-foreground">{request.submitted}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
                        {request.status === "pending" && (
                          <>
                            <Button variant="ghost" size="icon" className="text-green-500">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="text-red-500">
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
