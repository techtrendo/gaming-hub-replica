import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Download, Edit, Trash2, Eye, CreditCard } from "lucide-react";

const cards = [
  { id: 1, name: "Steam Wallet $10", category: "Gift Cards", price: 1150, stock: 245, sold: 1520, status: "active" },
  { id: 2, name: "PlayStation Plus 1 Month", category: "Subscription Cards", price: 1200, stock: 180, sold: 890, status: "active" },
  { id: 3, name: "Google Play $25", category: "Gift Cards", price: 2900, stock: 320, sold: 2100, status: "active" },
  { id: 4, name: "Netflix Premium 1 Month", category: "Streaming Services", price: 1500, stock: 0, sold: 456, status: "out_of_stock" },
  { id: 5, name: "iTunes $50", category: "Gift Cards", price: 5800, stock: 95, sold: 780, status: "active" },
  { id: 6, name: "Xbox Game Pass Ultimate", category: "Subscription Cards", price: 1800, stock: 150, sold: 620, status: "active" },
  { id: 7, name: "Spotify Premium 3 Months", category: "Streaming Services", price: 2500, stock: 200, sold: 340, status: "active" },
  { id: 8, name: "Amazon Gift Card $100", category: "Gift Cards", price: 11500, stock: 50, sold: 180, status: "low_stock" },
];

export default function CardsList() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Cards List</h2>
            <p className="text-muted-foreground">Manage all digital cards and vouchers</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Card
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <CreditCard className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{cards.length}</div>
                  <p className="text-xs text-muted-foreground">Total Cards</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">{cards.filter(c => c.status === "active").length}</div>
              <p className="text-xs text-muted-foreground">In Stock</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-orange-500">{cards.filter(c => c.status === "low_stock").length}</div>
              <p className="text-xs text-muted-foreground">Low Stock</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{cards.reduce((a, b) => a + b.sold, 0).toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total Sold</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search cards..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="gift">Gift Cards</SelectItem>
                  <SelectItem value="subscription">Subscription</SelectItem>
                  <SelectItem value="streaming">Streaming</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Card Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Price (Rs)</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Sold</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cards.map((card) => (
                  <TableRow key={card.id}>
                    <TableCell className="font-medium">{card.name}</TableCell>
                    <TableCell>{card.category}</TableCell>
                    <TableCell>Rs {card.price.toLocaleString()}</TableCell>
                    <TableCell>{card.stock}</TableCell>
                    <TableCell>{card.sold.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={card.status === "active" ? "default" : card.status === "low_stock" ? "secondary" : "destructive"}>
                        {card.status === "active" ? "In Stock" : card.status === "low_stock" ? "Low Stock" : "Out of Stock"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
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
