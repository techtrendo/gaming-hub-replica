import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const revenueData = [
  { month: "Jan", revenue: 45000, orders: 120 },
  { month: "Feb", revenue: 52000, orders: 145 },
  { month: "Mar", revenue: 48000, orders: 132 },
  { month: "Apr", revenue: 61000, orders: 168 },
  { month: "May", revenue: 55000, orders: 152 },
  { month: "Jun", revenue: 67000, orders: 189 },
  { month: "Jul", revenue: 72000, orders: 201 },
  { month: "Aug", revenue: 68000, orders: 195 },
  { month: "Sep", revenue: 75000, orders: 215 },
  { month: "Oct", revenue: 82000, orders: 234 },
  { month: "Nov", revenue: 89000, orders: 256 },
  { month: "Dec", revenue: 95000, orders: 278 },
];

const paymentMethodData = [
  { name: "eSewa", value: 45, amount: 425000 },
  { name: "Khalti", value: 32, amount: 302000 },
  { name: "IME Pay", value: 18, amount: 170000 },
  { name: "Wallet", value: 5, amount: 47000 },
];

const COLORS = ["#ff6b35", "#f7931e", "#fdc500", "#4ecdc4"];

const recentTransactions = [
  {
    id: "TXN-2024-5678",
    customer: "Raj Kumar",
    type: "credit",
    amount: "Rs 595",
    method: "eSewa",
    status: "success",
    time: "2 mins ago",
  },
  {
    id: "TXN-2024-5679",
    customer: "Sita Sharma",
    type: "credit",
    amount: "Rs 1,200",
    method: "Khalti",
    status: "success",
    time: "15 mins ago",
  },
  {
    id: "TXN-2024-5680",
    customer: "Hari Bahadur",
    type: "debit",
    amount: "Rs 150",
    method: "Refund",
    status: "processing",
    time: "1 hour ago",
  },
  {
    id: "TXN-2024-5681",
    customer: "Maya Tamang",
    type: "credit",
    amount: "Rs 550",
    method: "IME Pay",
    status: "failed",
    time: "2 hours ago",
  },
];

export default function Transactions() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Transactions</h2>
          <p className="text-muted-foreground">Overview of all financial transactions</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">Rs 8.9L</div>
                  <p className="text-xs text-muted-foreground">Total Revenue</p>
                </div>
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <DollarSign className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <div className="flex items-center text-xs mt-2 text-green-500">
                <TrendingUp className="h-3 w-3 mr-1" />
                +18.2% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">2,456</div>
                  <p className="text-xs text-muted-foreground">Transactions</p>
                </div>
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <ArrowUpRight className="h-5 w-5 text-blue-500" />
                </div>
              </div>
              <div className="flex items-center text-xs mt-2 text-blue-500">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">Rs 45K</div>
                  <p className="text-xs text-muted-foreground">Avg. Transaction</p>
                </div>
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <DollarSign className="h-5 w-5 text-purple-500" />
                </div>
              </div>
              <div className="flex items-center text-xs mt-2 text-green-500">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5.2% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">Rs 12K</div>
                  <p className="text-xs text-muted-foreground">Refunds</p>
                </div>
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <ArrowDownRight className="h-5 w-5 text-red-500" />
                </div>
              </div>
              <div className="flex items-center text-xs mt-2 text-red-500">
                <TrendingDown className="h-3 w-3 mr-1" />
                -2.4% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#ff6b35" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={paymentMethodData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {paymentMethodData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((txn) => (
                <div
                  key={txn.id}
                  className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        txn.type === "credit"
                          ? "bg-green-500/10"
                          : "bg-red-500/10"
                      }`}
                    >
                      {txn.type === "credit" ? (
                        <ArrowUpRight className="h-5 w-5 text-green-500" />
                      ) : (
                        <ArrowDownRight className="h-5 w-5 text-red-500" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{txn.id}</p>
                      <p className="text-sm text-muted-foreground">{txn.customer}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{txn.amount}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {txn.method}
                      </Badge>
                      <Badge
                        className={`text-xs ${
                          txn.status === "success"
                            ? "bg-green-500/10 text-green-500"
                            : txn.status === "processing"
                            ? "bg-blue-500/10 text-blue-500"
                            : "bg-red-500/10 text-red-500"
                        }`}
                      >
                        {txn.status}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{txn.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
