import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, CheckCircle2, XCircle, Clock, Eye, Check, X } from "lucide-react";

const requests = [
  { id: "REQ001", user: "Ram Sharma", type: "Deposit", method: "Bank Transfer", amount: 50000, proof: "receipt.jpg", status: "pending", date: "2024-01-15 18:30" },
  { id: "REQ002", user: "Sita Gurung", type: "Deposit", method: "Cash Deposit", amount: 25000, proof: "slip.jpg", status: "pending", date: "2024-01-15 18:25" },
  { id: "REQ003", user: "Amit Thapa", type: "Refund", method: "eSewa", amount: 1500, proof: "screenshot.png", status: "approved", date: "2024-01-15 18:20" },
  { id: "REQ004", user: "Priya Rai", type: "Deposit", method: "Bank Transfer", amount: 100000, proof: "voucher.pdf", status: "pending", date: "2024-01-15 18:15" },
  { id: "REQ005", user: "Krishna KC", type: "Refund", method: "Khalti", amount: 850, proof: "proof.jpg", status: "rejected", date: "2024-01-15 18:10" },
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

export default function PaymentRequest() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Payment Requests</h2>
            <p className="text-muted-foreground">Review and process payment requests</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{requests.length}</div>
              <p className="text-xs text-muted-foreground">Total Requests</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-500">{requests.filter(r => r.status === "pending").length}</div>
              <p className="text-xs text-muted-foreground">Pending</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">Rs {requests.filter(r => r.status === "pending").reduce((a, b) => a + b.amount, 0).toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Pending Amount</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{requests.filter(r => r.type === "Refund").length}</div>
              <p className="text-xs text-muted-foreground">Refund Requests</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search requests..." className="pl-10" />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Proof</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {requests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.id}</TableCell>
                    <TableCell>{request.user}</TableCell>
                    <TableCell>
                      <Badge variant={request.type === "Deposit" ? "default" : "secondary"}>
                        {request.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{request.method}</TableCell>
                    <TableCell className="font-semibold">Rs {request.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" className="gap-1">
                        <Eye className="h-3 w-3" />
                        View
                      </Button>
                    </TableCell>
                    <TableCell>{getStatusBadge(request.status)}</TableCell>
                    <TableCell className="text-muted-foreground">{request.date}</TableCell>
                    <TableCell>
                      {request.status === "pending" && (
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon" className="text-green-500 h-8 w-8">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="text-red-500 h-8 w-8">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
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
