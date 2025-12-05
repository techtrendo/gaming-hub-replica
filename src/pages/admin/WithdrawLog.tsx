import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, CheckCircle2, Clock, XCircle, Wallet, ArrowDownRight } from "lucide-react";

const withdrawals = [
  { id: "WD001", user: "Ram Sharma", method: "eSewa", account: "9841******67", amount: 5000, fee: 50, status: "completed", date: "2024-01-15 16:30" },
  { id: "WD002", user: "Sita Gurung", method: "Khalti", account: "9851******89", amount: 8000, fee: 80, status: "completed", date: "2024-01-15 16:25" },
  { id: "WD003", user: "Amit Thapa", method: "Bank Transfer", account: "****5678", amount: 15000, fee: 150, status: "processing", date: "2024-01-15 16:20" },
  { id: "WD004", user: "Priya Rai", method: "eSewa", account: "9861******23", amount: 3000, fee: 30, status: "completed", date: "2024-01-15 16:15" },
  { id: "WD005", user: "Krishna KC", method: "IME Pay", account: "9871******45", amount: 10000, fee: 100, status: "rejected", date: "2024-01-15 16:10" },
  { id: "WD006", user: "Maya Limbu", method: "Bank Transfer", account: "****9012", amount: 25000, fee: 250, status: "pending", date: "2024-01-15 16:05" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-500/10 text-green-500"><CheckCircle2 className="h-3 w-3 mr-1" />Completed</Badge>;
    case "processing":
      return <Badge className="bg-blue-500/10 text-blue-500"><Clock className="h-3 w-3 mr-1" />Processing</Badge>;
    case "pending":
      return <Badge className="bg-yellow-500/10 text-yellow-500"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
    case "rejected":
      return <Badge className="bg-red-500/10 text-red-500"><XCircle className="h-3 w-3 mr-1" />Rejected</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export default function WithdrawLog() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Withdraw Log</h2>
            <p className="text-muted-foreground">Track all withdrawal requests</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Wallet className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{withdrawals.length}</div>
                  <p className="text-xs text-muted-foreground">Total Requests</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <ArrowDownRight className="h-8 w-8 text-green-500" />
                <div>
                  <div className="text-2xl font-bold text-green-500">Rs {withdrawals.reduce((a, b) => a + b.amount, 0).toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Total Amount</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-500">{withdrawals.filter(w => w.status === "pending").length}</div>
              <p className="text-xs text-muted-foreground">Pending</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">Rs {withdrawals.reduce((a, b) => a + b.fee, 0).toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total Fees</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search withdrawals..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Account</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Fee</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {withdrawals.map((withdrawal) => (
                  <TableRow key={withdrawal.id}>
                    <TableCell className="font-medium">{withdrawal.id}</TableCell>
                    <TableCell>{withdrawal.user}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{withdrawal.method}</Badge>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{withdrawal.account}</TableCell>
                    <TableCell className="font-semibold">Rs {withdrawal.amount.toLocaleString()}</TableCell>
                    <TableCell className="text-muted-foreground">Rs {withdrawal.fee}</TableCell>
                    <TableCell>{getStatusBadge(withdrawal.status)}</TableCell>
                    <TableCell className="text-muted-foreground">{withdrawal.date}</TableCell>
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
