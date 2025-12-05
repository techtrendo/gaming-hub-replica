import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, CheckCircle2, Clock, XCircle, Eye, CreditCard } from "lucide-react";

const orders = [
  { id: "CO001", customer: "Rajesh Kumar", email: "rajesh@email.com", card: "Steam $10", quantity: 2, total: 2300, status: "completed", date: "2024-01-15 16:30" },
  { id: "CO002", customer: "Sita Sharma", email: "sita@email.com", card: "Google Play $25", quantity: 1, total: 2900, status: "completed", date: "2024-01-15 16:25" },
  { id: "CO003", customer: "Amit Thapa", email: "amit@email.com", card: "Netflix 1 Month", quantity: 1, total: 1500, status: "processing", date: "2024-01-15 16:20" },
  { id: "CO004", customer: "Priya Rai", email: "priya@email.com", card: "PSN $50", quantity: 1, total: 5800, status: "completed", date: "2024-01-15 16:15" },
  { id: "CO005", customer: "Ram Gurung", email: "ram@email.com", card: "Xbox Game Pass", quantity: 3, total: 5400, status: "failed", date: "2024-01-15 16:10" },
  { id: "CO006", customer: "Maya Limbu", email: "maya@email.com", card: "iTunes $100", quantity: 1, total: 11500, status: "completed", date: "2024-01-15 16:05" },
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

export default function CardOrders() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Card Orders</h2>
            <p className="text-muted-foreground">Manage digital card orders</p>
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
                  <div className="text-2xl font-bold">{orders.length}</div>
                  <p className="text-xs text-muted-foreground">Total Orders</p>
                </div>
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">Rs {orders.reduce((a, b) => a + b.total, 0).toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total Revenue</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-500">{orders.filter(o => o.status === "completed").length}</div>
              <p className="text-xs text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-500">{orders.filter(o => o.status === "processing").length}</div>
              <p className="text-xs text-muted-foreground">Processing</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search orders..." className="pl-10" />
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
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Card</TableHead>
                  <TableHead>Qty</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>
                      <div>
                        <p className="font-medium">{order.customer}</p>
                        <p className="text-xs text-muted-foreground">{order.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>{order.card}</TableCell>
                    <TableCell>{order.quantity}</TableCell>
                    <TableCell className="font-semibold">Rs {order.total.toLocaleString()}</TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell className="text-muted-foreground">{order.date}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
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
