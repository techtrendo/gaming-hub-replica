import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, CheckCircle2, Clock, XCircle, CreditCard, ArrowUpRight } from "lucide-react";

const payments = [
  { id: "PAY001", user: "Ram Kumar", method: "eSewa", txnId: "ESW123456789", amount: 1500, type: "deposit", status: "completed", date: "2024-01-15 17:30" },
  { id: "PAY002", user: "Sita Sharma", method: "Khalti", txnId: "KHL987654321", amount: 2500, type: "deposit", status: "completed", date: "2024-01-15 17:25" },
  { id: "PAY003", user: "Amit Thapa", method: "ConnectIPS", txnId: "CIP456789012", amount: 5000, type: "deposit", status: "processing", date: "2024-01-15 17:20" },
  { id: "PAY004", user: "Priya Rai", method: "eSewa", txnId: "ESW234567890", amount: 850, type: "purchase", status: "completed", date: "2024-01-15 17:15" },
  { id: "PAY005", user: "Krishna KC", method: "IME Pay", txnId: "IME345678901", amount: 3000, type: "deposit", status: "failed", date: "2024-01-15 17:10" },
  { id: "PAY006", user: "Maya Limbu", method: "Khalti", txnId: "KHL567890123", amount: 1200, type: "purchase", status: "completed", date: "2024-01-15 17:05" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-500/10 text-green-500"><CheckCircle2 className="h-3 w-3 mr-1" />Completed</Badge>;
    case "processing":
      return <Badge className="bg-blue-500/10 text-blue-500"><Clock className="h-3 w-3 mr-1" />Processing</Badge>;
    case "failed":
      return <Badge className="bg-red-500/10 text-red-500"><XCircle className="h-3 w-3 mr-1" />Failed</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export default function PaymentLog() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Payment Log</h2>
            <p className="text-muted-foreground">Track all payment transactions</p>
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
                <CreditCard className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{payments.length}</div>
                  <p className="text-xs text-muted-foreground">Total Payments</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <ArrowUpRight className="h-8 w-8 text-green-500" />
                <div>
                  <div className="text-2xl font-bold text-green-500">Rs {payments.reduce((a, b) => a + b.amount, 0).toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Total Amount</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-500">{payments.filter(p => p.type === "deposit").length}</div>
              <p className="text-xs text-muted-foreground">Deposits</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{payments.filter(p => p.type === "purchase").length}</div>
              <p className="text-xs text-muted-foreground">Purchases</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search payments..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="deposit">Deposit</SelectItem>
                  <SelectItem value="purchase">Purchase</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Methods</SelectItem>
                  <SelectItem value="esewa">eSewa</SelectItem>
                  <SelectItem value="khalti">Khalti</SelectItem>
                  <SelectItem value="connectips">ConnectIPS</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.user}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{payment.method}</Badge>
                    </TableCell>
                    <TableCell className="font-mono text-xs">{payment.txnId}</TableCell>
                    <TableCell className="font-semibold">Rs {payment.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={payment.type === "deposit" ? "default" : "secondary"}>
                        {payment.type}
                      </Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(payment.status)}</TableCell>
                    <TableCell className="text-muted-foreground">{payment.date}</TableCell>
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
