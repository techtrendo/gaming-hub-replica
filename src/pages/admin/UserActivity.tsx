import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, Activity, LogIn, ShoppingCart, CreditCard, Settings, Eye } from "lucide-react";

const activities = [
  { id: 1, user: "Ram Kumar", action: "Login", details: "Logged in from Chrome/Windows", ip: "192.168.1.***", timestamp: "2024-01-15 17:30:45" },
  { id: 2, user: "Sita Sharma", action: "Purchase", details: "Purchased Steam $10 Gift Card", ip: "192.168.2.***", timestamp: "2024-01-15 17:28:30" },
  { id: 3, user: "Amit Thapa", action: "Deposit", details: "Added Rs 5,000 via eSewa", ip: "192.168.3.***", timestamp: "2024-01-15 17:25:15" },
  { id: 4, user: "Priya Rai", action: "Profile Update", details: "Updated phone number", ip: "192.168.4.***", timestamp: "2024-01-15 17:20:00" },
  { id: 5, user: "Krishna KC", action: "Login", details: "Logged in from Safari/iOS", ip: "192.168.5.***", timestamp: "2024-01-15 17:15:30" },
  { id: 6, user: "Maya Limbu", action: "Purchase", details: "Purchased PUBG UC 60", ip: "192.168.6.***", timestamp: "2024-01-15 17:10:45" },
  { id: 7, user: "Ram Kumar", action: "Withdrawal", details: "Requested Rs 3,000 withdrawal", ip: "192.168.1.***", timestamp: "2024-01-15 17:05:20" },
  { id: 8, user: "Sita Sharma", action: "Login", details: "Logged in from Firefox/Linux", ip: "192.168.2.***", timestamp: "2024-01-15 17:00:00" },
];

const getActionIcon = (action: string) => {
  switch (action) {
    case "Login":
      return <LogIn className="h-4 w-4 text-blue-500" />;
    case "Purchase":
      return <ShoppingCart className="h-4 w-4 text-green-500" />;
    case "Deposit":
    case "Withdrawal":
      return <CreditCard className="h-4 w-4 text-purple-500" />;
    case "Profile Update":
      return <Settings className="h-4 w-4 text-orange-500" />;
    default:
      return <Activity className="h-4 w-4 text-gray-500" />;
  }
};

const getActionBadge = (action: string) => {
  const colors: Record<string, string> = {
    "Login": "bg-blue-500/10 text-blue-500",
    "Purchase": "bg-green-500/10 text-green-500",
    "Deposit": "bg-purple-500/10 text-purple-500",
    "Withdrawal": "bg-orange-500/10 text-orange-500",
    "Profile Update": "bg-yellow-500/10 text-yellow-500",
  };
  return <Badge className={colors[action] || "bg-gray-500/10 text-gray-500"}>{action}</Badge>;
};

export default function UserActivity() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">User Activity</h2>
            <p className="text-muted-foreground">Monitor user actions and behavior</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export Log
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Activity className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{activities.length}</div>
                  <p className="text-xs text-muted-foreground">Total Activities</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <LogIn className="h-8 w-8 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">{activities.filter(a => a.action === "Login").length}</div>
                  <p className="text-xs text-muted-foreground">Logins</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <ShoppingCart className="h-8 w-8 text-green-500" />
                <div>
                  <div className="text-2xl font-bold">{activities.filter(a => a.action === "Purchase").length}</div>
                  <p className="text-xs text-muted-foreground">Purchases</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <CreditCard className="h-8 w-8 text-purple-500" />
                <div>
                  <div className="text-2xl font-bold">{activities.filter(a => ["Deposit", "Withdrawal"].includes(a.action)).length}</div>
                  <p className="text-xs text-muted-foreground">Transactions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search by user..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Action" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Actions</SelectItem>
                  <SelectItem value="login">Login</SelectItem>
                  <SelectItem value="purchase">Purchase</SelectItem>
                  <SelectItem value="deposit">Deposit</SelectItem>
                  <SelectItem value="withdrawal">Withdrawal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Action</TableHead>
                  <TableHead>Details</TableHead>
                  <TableHead>IP Address</TableHead>
                  <TableHead>Timestamp</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.map((activity) => (
                  <TableRow key={activity.id}>
                    <TableCell className="font-medium">{activity.user}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getActionIcon(activity.action)}
                        {getActionBadge(activity.action)}
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[250px] truncate">{activity.details}</TableCell>
                    <TableCell className="font-mono text-sm">{activity.ip}</TableCell>
                    <TableCell className="text-muted-foreground">{activity.timestamp}</TableCell>
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
