import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  Clock,
  CheckCircle2,
  XCircle,
  Package
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Mock data
const stats = [
  {
    title: "Total Revenue",
    value: "Rs 2,45,231",
    change: "+20.1%",
    trend: "up",
    icon: DollarSign,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Total Orders",
    value: "1,234",
    change: "+12.5%",
    trend: "up",
    icon: ShoppingCart,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "Active Users",
    value: "8,459",
    change: "+8.2%",
    trend: "up",
    icon: Users,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Pending Orders",
    value: "42",
    change: "-5.4%",
    trend: "down",
    icon: Clock,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];

const recentOrders = [
  {
    id: "ORD-2024-001",
    customer: "Raj Kumar",
    product: "Mobile Legends 275 Diamonds",
    amount: "Rs 595",
    status: "completed",
    time: "2 mins ago",
  },
  {
    id: "ORD-2024-002",
    customer: "Sita Sharma",
    product: "PUBG UC 600 + 60",
    amount: "Rs 1,200",
    status: "processing",
    time: "15 mins ago",
  },
  {
    id: "ORD-2024-003",
    customer: "Hari Bahadur",
    product: "Free Fire 100 Diamonds",
    amount: "Rs 150",
    status: "completed",
    time: "1 hour ago",
  },
  {
    id: "ORD-2024-004",
    customer: "Maya Tamang",
    product: "Clash of Clans 500 Gems",
    amount: "Rs 550",
    status: "failed",
    time: "2 hours ago",
  },
  {
    id: "ORD-2024-005",
    customer: "Krishna Adhikari",
    product: "Garena Shells 200",
    amount: "Rs 800",
    status: "completed",
    time: "3 hours ago",
  },
];

const topProducts = [
  { name: "Mobile Legends Diamonds", sales: 245, revenue: "Rs 58,400", progress: 85 },
  { name: "PUBG UC", sales: 189, revenue: "Rs 42,300", progress: 70 },
  { name: "Free Fire Diamonds", sales: 156, revenue: "Rs 35,200", progress: 60 },
  { name: "Clash of Clans Gems", sales: 98, revenue: "Rs 22,100", progress: 45 },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/20"><CheckCircle2 className="h-3 w-3 mr-1" />Completed</Badge>;
    case "processing":
      return <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20"><Clock className="h-3 w-3 mr-1" />Processing</Badge>;
    case "failed":
      return <Badge className="bg-red-500/10 text-red-500 hover:bg-red-500/20"><XCircle className="h-3 w-3 mr-1" />Failed</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="flex items-center text-xs mt-1">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  <span className={stat.trend === "up" ? "text-green-500" : "text-red-500"}>
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-7">
          {/* Recent Orders */}
          <Card className="md:col-span-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Recent Orders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">{order.id}</p>
                        {getStatusBadge(order.status)}
                      </div>
                      <p className="text-sm text-muted-foreground">{order.customer}</p>
                      <p className="text-xs text-muted-foreground">{order.product}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{order.amount}</p>
                      <p className="text-xs text-muted-foreground">{order.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Top Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {topProducts.map((product) => (
                  <div key={product.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">{product.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {product.sales} sales
                        </p>
                      </div>
                      <p className="text-sm font-bold text-primary">{product.revenue}</p>
                    </div>
                    <Progress value={product.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 rounded-lg border-2 border-dashed hover:border-primary hover:bg-primary/5 transition-all text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">Add User</p>
              </button>
              <button className="p-4 rounded-lg border-2 border-dashed hover:border-primary hover:bg-primary/5 transition-all text-center">
                <Package className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">Add Product</p>
              </button>
              <button className="p-4 rounded-lg border-2 border-dashed hover:border-primary hover:bg-primary/5 transition-all text-center">
                <ShoppingCart className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">View Orders</p>
              </button>
              <button className="p-4 rounded-lg border-2 border-dashed hover:border-primary hover:bg-primary/5 transition-all text-center">
                <LayoutDashboard className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm font-medium">Settings</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
