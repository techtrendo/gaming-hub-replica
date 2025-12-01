import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Download, 
  UserPlus, 
  MoreVertical,
  Mail,
  Phone,
  Calendar
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const users = [
  {
    id: 1,
    name: "Raj Kumar Sharma",
    email: "raj.kumar@email.com",
    phone: "+977 9841234567",
    status: "active",
    role: "User",
    joined: "2024-01-15",
    orders: 45,
    spent: "Rs 12,450",
  },
  {
    id: 2,
    name: "Sita Devi Thapa",
    email: "sita.thapa@email.com",
    phone: "+977 9852345678",
    status: "active",
    role: "User",
    joined: "2024-02-20",
    orders: 32,
    spent: "Rs 8,920",
  },
  {
    id: 3,
    name: "Hari Bahadur Magar",
    email: "hari.magar@email.com",
    phone: "+977 9863456789",
    status: "suspended",
    role: "User",
    joined: "2024-01-08",
    orders: 12,
    spent: "Rs 3,240",
  },
  {
    id: 4,
    name: "Maya Gurung",
    email: "maya.gurung@email.com",
    phone: "+977 9874567890",
    status: "active",
    role: "Premium",
    joined: "2023-12-01",
    orders: 89,
    spent: "Rs 28,750",
  },
  {
    id: 5,
    name: "Krishna Adhikari",
    email: "krishna.adhikari@email.com",
    phone: "+977 9885678901",
    status: "active",
    role: "User",
    joined: "2024-03-10",
    orders: 18,
    spent: "Rs 4,680",
  },
  {
    id: 6,
    name: "Anita Tamang",
    email: "anita.tamang@email.com",
    phone: "+977 9896789012",
    status: "inactive",
    role: "User",
    joined: "2023-11-22",
    orders: 5,
    spent: "Rs 1,250",
  },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-500/10 text-green-500">Active</Badge>;
    case "suspended":
      return <Badge className="bg-red-500/10 text-red-500">Suspended</Badge>;
    case "inactive":
      return <Badge className="bg-gray-500/10 text-gray-500">Inactive</Badge>;
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
};

const getRoleBadge = (role: string) => {
  return role === "Premium" ? (
    <Badge className="bg-primary/10 text-primary">Premium</Badge>
  ) : (
    <Badge variant="outline">{role}</Badge>
  );
};

export default function UserManagement() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">User Management</h2>
            <p className="text-muted-foreground">Manage all registered users</p>
          </div>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            Add New User
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">8,459</div>
              <p className="text-xs text-muted-foreground">Total Users</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">7,234</div>
              <p className="text-xs text-muted-foreground">Active Users</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">1,045</div>
              <p className="text-xs text-muted-foreground">Premium Users</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-500">180</div>
              <p className="text-xs text-muted-foreground">Suspended</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search users..." className="pl-10" />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
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
                  <TableHead>User</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Total Spent</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-3 w-3" />
                          {user.email}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-3 w-3" />
                          {user.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(user.status)}</TableCell>
                    <TableCell>{getRoleBadge(user.role)}</TableCell>
                    <TableCell>{user.orders}</TableCell>
                    <TableCell className="font-semibold">{user.spent}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {user.joined}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Edit User</DropdownMenuItem>
                          <DropdownMenuItem>View Orders</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Suspend User
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
