import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Edit, Trash2, Copy, Ticket, Percent, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const coupons = [
  { id: 1, code: "WELCOME20", type: "percentage", value: 20, minOrder: 500, maxDiscount: 200, used: 145, limit: 500, status: "active", expiry: "2024-02-28" },
  { id: 2, code: "FLAT100", type: "fixed", value: 100, minOrder: 1000, maxDiscount: 100, used: 89, limit: 200, status: "active", expiry: "2024-01-31" },
  { id: 3, code: "GAME15", type: "percentage", value: 15, minOrder: 300, maxDiscount: 150, used: 234, limit: 300, status: "active", expiry: "2024-03-15" },
  { id: 4, code: "NEWYEAR50", type: "percentage", value: 50, minOrder: 2000, maxDiscount: 500, used: 500, limit: 500, status: "expired", expiry: "2024-01-01" },
  { id: 5, code: "VIP25", type: "percentage", value: 25, minOrder: 0, maxDiscount: 1000, used: 12, limit: 50, status: "active", expiry: "2024-06-30" },
];

export default function Coupons() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Coupons</h2>
            <p className="text-muted-foreground">Manage discount coupons and promotions</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Coupon
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Ticket className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{coupons.length}</div>
                  <p className="text-xs text-muted-foreground">Total Coupons</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">{coupons.filter(c => c.status === "active").length}</div>
              <p className="text-xs text-muted-foreground">Active</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Users className="h-8 w-8 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">{coupons.reduce((a, b) => a + b.used, 0)}</div>
                  <p className="text-xs text-muted-foreground">Total Used</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Percent className="h-8 w-8 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">{Math.round(coupons.reduce((a, b) => a + b.value, 0) / coupons.length)}%</div>
                  <p className="text-xs text-muted-foreground">Avg. Discount</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search coupons..." className="pl-10" />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Min Order</TableHead>
                  <TableHead>Usage</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Expiry</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {coupons.map((coupon) => (
                  <TableRow key={coupon.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <code className="bg-muted px-2 py-1 rounded font-mono text-sm">{coupon.code}</code>
                        <Button variant="ghost" size="icon" className="h-6 w-6">
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {coupon.type === "percentage" ? `${coupon.value}%` : `Rs ${coupon.value}`}
                      </Badge>
                    </TableCell>
                    <TableCell>Rs {coupon.minOrder}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{coupon.used}/{coupon.limit}</div>
                        <Progress value={(coupon.used / coupon.limit) * 100} className="h-1.5" />
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={coupon.status === "active" ? "default" : "secondary"}>
                        {coupon.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{coupon.expiry}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                      </div>
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
