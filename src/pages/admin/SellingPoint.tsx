import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, Eye, CheckCircle2, Clock, MapPin, Store } from "lucide-react";

const sellingPoints = [
  { id: "SP001", name: "Gaming Hub Kathmandu", location: "Kathmandu", owner: "Ram Sharma", balance: 45000, sales: 234, status: "active", joined: "2023-06-15" },
  { id: "SP002", name: "E-Zone Pokhara", location: "Pokhara", owner: "Sita Gurung", balance: 32000, sales: 187, status: "active", joined: "2023-07-20" },
  { id: "SP003", name: "Game World Lalitpur", location: "Lalitpur", owner: "Amit Thapa", balance: 28000, sales: 156, status: "active", joined: "2023-08-10" },
  { id: "SP004", name: "Digital Corner Birgunj", location: "Birgunj", owner: "Priya Yadav", balance: 15000, sales: 89, status: "pending", joined: "2023-09-05" },
  { id: "SP005", name: "Tech Zone Butwal", location: "Butwal", owner: "Krishna KC", balance: 0, sales: 0, status: "inactive", joined: "2023-10-01" },
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-500/10 text-green-500"><CheckCircle2 className="h-3 w-3 mr-1" />Active</Badge>;
    case "pending":
      return <Badge className="bg-yellow-500/10 text-yellow-500"><Clock className="h-3 w-3 mr-1" />Pending</Badge>;
    default:
      return <Badge variant="secondary">Inactive</Badge>;
  }
};

export default function SellingPoint() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Selling Points</h2>
            <p className="text-muted-foreground">Manage registered selling points</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Store className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{sellingPoints.length}</div>
                  <p className="text-xs text-muted-foreground">Total Points</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">{sellingPoints.filter(s => s.status === "active").length}</div>
              <p className="text-xs text-muted-foreground">Active</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">Rs {(sellingPoints.reduce((a, b) => a + b.balance, 0) / 1000).toFixed(0)}K</div>
              <p className="text-xs text-muted-foreground">Total Balance</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{sellingPoints.reduce((a, b) => a + b.sales, 0)}</div>
              <p className="text-xs text-muted-foreground">Total Sales</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search selling points..." className="pl-10" />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Owner</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sellingPoints.map((point) => (
                  <TableRow key={point.id}>
                    <TableCell className="font-medium">{point.id}</TableCell>
                    <TableCell>{point.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        {point.location}
                      </div>
                    </TableCell>
                    <TableCell>{point.owner}</TableCell>
                    <TableCell className="font-semibold">Rs {point.balance.toLocaleString()}</TableCell>
                    <TableCell>{point.sales}</TableCell>
                    <TableCell>{getStatusBadge(point.status)}</TableCell>
                    <TableCell className="text-muted-foreground">{point.joined}</TableCell>
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
