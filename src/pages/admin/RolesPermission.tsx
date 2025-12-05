import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Plus, Shield, Users, Settings, Eye, Edit, Trash2 } from "lucide-react";

const roles = [
  { id: 1, name: "Super Admin", users: 2, color: "bg-red-500", permissions: ["all"] },
  { id: 2, name: "Admin", users: 5, color: "bg-orange-500", permissions: ["dashboard", "users", "orders", "products"] },
  { id: 3, name: "Manager", users: 8, color: "bg-blue-500", permissions: ["dashboard", "orders", "products"] },
  { id: 4, name: "Support", users: 12, color: "bg-green-500", permissions: ["dashboard", "tickets", "users"] },
  { id: 5, name: "Agent", users: 25, color: "bg-purple-500", permissions: ["dashboard", "topup", "orders"] },
];

const permissionGroups = [
  { name: "Dashboard", permissions: ["View Dashboard", "View Analytics", "Export Reports"] },
  { name: "Users", permissions: ["View Users", "Create Users", "Edit Users", "Delete Users"] },
  { name: "Orders", permissions: ["View Orders", "Process Orders", "Refund Orders", "Cancel Orders"] },
  { name: "Products", permissions: ["View Products", "Create Products", "Edit Products", "Delete Products"] },
  { name: "Transactions", permissions: ["View Transactions", "Process Withdrawals", "Manage Payments"] },
  { name: "Settings", permissions: ["View Settings", "Edit Settings", "Manage Roles"] },
];

export default function RolesPermission() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Role & Permission</h2>
            <p className="text-muted-foreground">Manage user roles and their permissions</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Role
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{roles.length}</div>
                  <p className="text-xs text-muted-foreground">Total Roles</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Users className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{roles.reduce((a, b) => a + b.users, 0)}</div>
                  <p className="text-xs text-muted-foreground">Total Users</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Settings className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{permissionGroups.reduce((a, b) => a + b.permissions.length, 0)}</div>
                  <p className="text-xs text-muted-foreground">Total Permissions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Roles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {roles.map((role) => (
                <div key={role.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${role.color}`} />
                    <div>
                      <p className="font-medium">{role.name}</p>
                      <p className="text-xs text-muted-foreground">{role.users} users</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Permission Matrix</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {permissionGroups.map((group) => (
                <div key={group.name} className="space-y-3">
                  <h4 className="font-semibold text-sm">{group.name}</h4>
                  <div className="grid gap-2">
                    {group.permissions.map((perm) => (
                      <div key={perm} className="flex items-center justify-between py-1">
                        <span className="text-sm text-muted-foreground">{perm}</span>
                        <Switch defaultChecked={Math.random() > 0.3} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
