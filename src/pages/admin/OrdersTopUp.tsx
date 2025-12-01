import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Download, Clock, CheckCircle2, XCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const orders = [
  {
    id: "ORD-2024-1245",
    customer: "Raj Kumar",
    product: "Mobile Legends 275 Diamonds",
    userId: "ML123456",
    amount: "Rs 595",
    payment: "eSewa",
    status: "completed",
    date: "2024-12-01 14:23",
  },
  {
    id: "ORD-2024-1246",
    customer: "Sita Sharma",
    product: "PUBG UC 600 + 60",
    userId: "PUBG789012",
    amount: "Rs 1,200",
    payment: "Khalti",
    status: "processing",
    date: "2024-12-01 14:15",
  },
  {
    id: "ORD-2024-1247",
    customer: "Hari Bahadur",
    product: "Free Fire 100 Diamonds",
    userId: "FF345678",
    amount: "Rs 150",
    payment: "IME Pay",
    status: "completed",
    date: "2024-12-01 13:45",
  },
  {
    id: "ORD-2024-1248",
    customer: "Maya Tamang",
    product: "Clash of Clans 500 Gems",
    userId: "COC901234",
    amount: "Rs 550",
    payment: "eSewa",
    status: "failed",
    date: "2024-12-01 12:30",
  },
  {
    id: "ORD-2024-1249",
    customer: "Krishna Adhikari",
    product: "Mobile Legends 565 Diamonds",
    userId: "ML567890",
    amount: "Rs 1,195",
    payment: "Khalti",
    status: "completed",
    date: "2024-12-01 11:20",
  },
  {
    id: "ORD-2024-1250",
    customer: "Anita Rai",
    product: "PUBG UC 1800 + 300",
    userId: "PUBG234567",
    amount: "Rs 3,600",
    payment: "eSewa",
    status: "processing",
    date: "2024-12-01 10:15",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return (
        <Badge className="bg-green-500/10 text-green-500">
          <CheckCircle2 className="h-3 w-3 mr-1" />
          Completed
        </Badge>
      );
    case "processing":
      return (
        <Badge className="bg-blue-500/10 text-blue-500">
          <Clock className="h-3 w-3 mr-1" />
          Processing
        </Badge>
      );
    case "failed":
      return (
        <Badge className="bg-red-500/10 text-red-500">
          <XCircle className="h-3 w-3 mr-1" />
          Failed
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function OrdersTopUp() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Top Up Orders</h2>
            <p className="text-muted-foreground">Manage all top-up orders</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">Total Orders</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">1,089</div>
              <p className="text-xs text-muted-foreground">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-500">42</div>
              <p className="text-xs text-muted-foreground">Processing</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-500">103</div>
              <p className="text-xs text-muted-foreground">Failed</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters & Table */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by order ID, customer..." className="pl-10" />
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
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Product</TableHead>
                  <TableHead>User ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Payment</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>
                      <code className="text-xs bg-muted px-2 py-1 rounded">{order.userId}</code>
                    </TableCell>
                    <TableCell className="font-semibold text-primary">{order.amount}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{order.payment}</Badge>
                    </TableCell>
                    <TableCell>{getStatusBadge(order.status)}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{order.date}</TableCell>
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
