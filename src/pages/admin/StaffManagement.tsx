import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  UserPlus, 
  Search, 
  Shield, 
  Crown, 
  User,
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

const staff = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@gamingcenter.np",
    phone: "+977 9841000001",
    role: "Admin",
    status: "active",
    joined: "2023-01-15",
    lastActive: "2 mins ago",
  },
  {
    id: 2,
    name: "Ram Kumar Sharma",
    email: "ram.sharma@gamingcenter.np",
    phone: "+977 9841000002",
    role: "Manager",
    status: "active",
    joined: "2023-03-20",
    lastActive: "5 mins ago",
  },
  {
    id: 3,
    name: "Sita Devi Thapa",
    email: "sita.thapa@gamingcenter.np",
    phone: "+977 9841000003",
    role: "Support",
    status: "active",
    joined: "2023-06-10",
    lastActive: "1 hour ago",
  },
  {
    id: 4,
    name: "Hari Bahadur Magar",
    email: "hari.magar@gamingcenter.np",
    phone: "+977 9841000004",
    role: "Support",
    status: "active",
    joined: "2023-08-15",
    lastActive: "3 hours ago",
  },
  {
    id: 5,
    name: "Maya Gurung",
    email: "maya.gurung@gamingcenter.np",
    phone: "+977 9841000005",
    role: "Manager",
    status: "inactive",
    joined: "2023-05-01",
    lastActive: "2 days ago",
  },
];

const roles = [
  {
    name: "Admin",
    count: 1,
    permissions: [
      "Full System Access",
      "User Management",
      "Financial Control",
      "System Settings",
    ],
    icon: Crown,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    name: "Manager",
    count: 2,
    permissions: [
      "Order Management",
      "Product Management",
      "View Analytics",
      "Customer Support",
    ],
    icon: Shield,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Support",
    count: 2,
    permissions: [
      "Ticket Management",
      "Order View",
      "Customer Chat",
      "Basic Reports",
    ],
    icon: User,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
];

const getRoleBadge = (role: string) => {
  switch (role) {
    case "Admin":
      return <Badge className="bg-yellow-500/10 text-yellow-500"><Crown className="h-3 w-3 mr-1" />Admin</Badge>;
    case "Manager":
      return <Badge className="bg-blue-500/10 text-blue-500"><Shield className="h-3 w-3 mr-1" />Manager</Badge>;
    case "Support":
      return <Badge className="bg-green-500/10 text-green-500"><User className="h-3 w-3 mr-1" />Support</Badge>;
    default:
      return <Badge variant="secondary">{role}</Badge>;
  }
};

export default function StaffManagement() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Staff Management</h2>
            <p className="text-muted-foreground">Manage team members and permissions</p>
          </div>
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            Add Staff Member
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Total Staff</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">4</div>
              <p className="text-xs text-muted-foreground">Active Now</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-500">3</div>
              <p className="text-xs text-muted-foreground">Roles</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">458</div>
              <p className="text-xs text-muted-foreground">Actions Today</p>
            </CardContent>
          </Card>
        </div>

        {/* Roles & Permissions */}
        <div className="grid gap-4 md:grid-cols-3">
          {roles.map((role) => (
            <Card key={role.name} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`${role.bgColor} p-3 rounded-lg`}>
                      <role.icon className={`h-6 w-6 ${role.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{role.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{role.count} members</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {role.permissions.map((permission) => (
                    <div key={permission} className="flex items-center text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                      <span className="text-muted-foreground">{permission}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Staff List */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search staff..." className="pl-10" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Staff Member</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Last Active</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {staff.map((member) => (
                  <TableRow key={member.id}>
                    <TableCell>
                      <div className="font-medium">{member.name}</div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Mail className="h-3 w-3" />
                          {member.email}
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Phone className="h-3 w-3" />
                          {member.phone}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{getRoleBadge(member.role)}</TableCell>
                    <TableCell>
                      {member.status === "active" ? (
                        <Badge className="bg-green-500/10 text-green-500">Active</Badge>
                      ) : (
                        <Badge className="bg-gray-500/10 text-gray-500">Inactive</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {member.joined}
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {member.lastActive}
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
