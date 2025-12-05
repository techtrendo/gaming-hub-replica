import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, CheckCircle2, Clock, XCircle, ArrowUpRight } from "lucide-react";

const topups = [
  { id: "TU001", agent: "Agent Alpha", customer: "9841234567", product: "NTC 100", amount: 100, commission: 3, status: "completed", date: "2024-01-15 14:30" },
  { id: "TU002", agent: "Agent Beta", customer: "9851234567", product: "PUBG UC 60", amount: 850, commission: 42.5, status: "completed", date: "2024-01-15 14:25" },
  { id: "TU003", agent: "Agent Gamma", customer: "9861234567", product: "Free Fire 100", amount: 120, commission: 6, status: "processing", date: "2024-01-15 14:20" },
  { id: "TU004", agent: "Agent Delta", customer: "9871234567", product: "Ncell 200", amount: 200, commission: 6, status: "completed", date: "2024-01-15 14:15" },
  { id: "TU005", agent: "Agent Alpha", customer: "9881234567", product: "MLBB 86 Dias", amount: 150, commission: 7.5, status: "failed", date: "2024-01-15 14:10" },
  { id: "TU006", agent: "Agent Beta", customer: "9891234567", product: "COC Gems", amount: 500, commission: 25, status: "completed", date: "2024-01-15 14:05" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-500/10 text-green-500"><CheckCircle2 className="h-3 w-3 mr-1" />Completed</Badge>;
    case "processing":
      return <Badge className="bg-yellow-500/10 text-yellow-500"><Clock className="h-3 w-3 mr-1" />Processing</Badge>;
    case "failed":
      return <Badge className="bg-red-500/10 text-red-500"><XCircle className="h-3 w-3 mr-1" />Failed</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export default function AgentTopUp() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Agent Top Up</h2>
            <p className="text-muted-foreground">View all agent top-up transactions</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{topups.length}</div>
                  <p className="text-xs text-muted-foreground">Total Transactions</p>
                </div>
                <ArrowUpRight className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">Rs {topups.reduce((a, b) => a + b.amount, 0).toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total Amount</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-500">Rs {topups.reduce((a, b) => a + b.commission, 0).toFixed(1)}</div>
              <p className="text-xs text-muted-foreground">Total Commission</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{topups.filter(t => t.status === "completed").length}</div>
              <p className="text-xs text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by agent or customer..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Agent</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Commission</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topups.map((topup) => (
                  <TableRow key={topup.id}>
                    <TableCell className="font-medium">{topup.id}</TableCell>
                    <TableCell>{topup.agent}</TableCell>
                    <TableCell>{topup.customer}</TableCell>
                    <TableCell>{topup.product}</TableCell>
                    <TableCell>Rs {topup.amount}</TableCell>
                    <TableCell className="text-green-500">Rs {topup.commission}</TableCell>
                    <TableCell>{getStatusBadge(topup.status)}</TableCell>
                    <TableCell className="text-muted-foreground">{topup.date}</TableCell>
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
