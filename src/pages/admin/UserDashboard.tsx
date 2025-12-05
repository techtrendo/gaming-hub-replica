import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, UserPlus, UserCheck, TrendingUp, Activity, ShoppingCart, CreditCard, Clock } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";

const userGrowth = [
  { month: "Aug", users: 1200 },
  { month: "Sep", users: 1450 },
  { month: "Oct", users: 1680 },
  { month: "Nov", users: 1920 },
  { month: "Dec", users: 2340 },
  { month: "Jan", users: 2780 },
];

const userActivity = [
  { day: "Mon", active: 450 },
  { day: "Tue", active: 520 },
  { day: "Wed", active: 480 },
  { day: "Thu", active: 610 },
  { day: "Fri", active: 720 },
  { day: "Sat", active: 890 },
  { day: "Sun", active: 780 },
];

const userTypes = [
  { name: "Regular", value: 1850, color: "#3b82f6" },
  { name: "Premium", value: 520, color: "#f59e0b" },
  { name: "VIP", value: 180, color: "#8b5cf6" },
  { name: "New", value: 230, color: "#22c55e" },
];

const topUsers = [
  { name: "Ram Sharma", orders: 156, spent: 45000, status: "VIP" },
  { name: "Sita Gurung", orders: 134, spent: 38000, status: "Premium" },
  { name: "Amit Thapa", orders: 98, spent: 28000, status: "Premium" },
  { name: "Priya Rai", orders: 87, spent: 24000, status: "Regular" },
  { name: "Krishna KC", orders: 76, spent: 21000, status: "Regular" },
];

export default function UserDashboard() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">User Dashboard</h2>
          <p className="text-muted-foreground">Overview of user statistics and analytics</p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">2,780</div>
                  <p className="text-xs text-muted-foreground">Total Users</p>
                </div>
              </div>
              <div className="mt-3 flex items-center text-xs text-green-500">
                <TrendingUp className="h-3 w-3 mr-1" />
                +18.7% from last month
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <UserPlus className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">230</div>
                  <p className="text-xs text-muted-foreground">New This Month</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <UserCheck className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">890</div>
                  <p className="text-xs text-muted-foreground">Active Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Activity className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">68%</div>
                  <p className="text-xs text-muted-foreground">Retention Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={userGrowth}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: "hsl(var(--primary))" }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Weekly Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={userActivity}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis dataKey="day" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Bar dataKey="active" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={userTypes} cx="50%" cy="50%" innerRadius={60} outerRadius={100} paddingAngle={2} dataKey="value">
                      {userTypes.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                {userTypes.map((type) => (
                  <div key={type.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: type.color }} />
                    <span className="text-sm">{type.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topUsers.map((user, index) => (
                  <div key={user.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-muted-foreground">{user.orders} orders</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={user.status === "VIP" ? "default" : user.status === "Premium" ? "secondary" : "outline"}>
                        {user.status}
                      </Badge>
                      <p className="text-sm font-semibold mt-1">Rs {user.spent.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
