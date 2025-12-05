import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download, TrendingUp, DollarSign, ShoppingCart } from "lucide-react";

const soldItems = [
  { id: "SL001", item: "PUBG Mobile Account", seller: "Gaming Hub KTM", buyer: "user123", price: 5000, commission: 500, date: "2024-01-15 14:30" },
  { id: "SL002", item: "Free Fire Diamonds 1000", seller: "E-Zone Pokhara", buyer: "gamer456", price: 1200, commission: 96, date: "2024-01-15 14:25" },
  { id: "SL003", item: "COC TH14 Account", seller: "Game World LP", buyer: "player789", price: 8000, commission: 800, date: "2024-01-15 14:20" },
  { id: "SL004", item: "Mobile Legends Account", seller: "Gaming Hub KTM", buyer: "mlbb_fan", price: 3500, commission: 350, date: "2024-01-15 14:15" },
  { id: "SL005", item: "Valorant Account", seller: "Digital Corner", buyer: "valorant_pro", price: 12000, commission: 1200, date: "2024-01-15 14:10" },
  { id: "SL006", item: "Genshin Impact AR55", seller: "Tech Zone Butwal", buyer: "genshin_lover", price: 15000, commission: 1500, date: "2024-01-15 14:05" },
];

export default function SoldPoint() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Sold Points</h2>
            <p className="text-muted-foreground">Track all sold items and commissions</p>
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
                <ShoppingCart className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{soldItems.length}</div>
                  <p className="text-xs text-muted-foreground">Items Sold</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <DollarSign className="h-8 w-8 text-green-500" />
                <div>
                  <div className="text-2xl font-bold text-green-500">Rs {soldItems.reduce((a, b) => a + b.price, 0).toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Total Sales</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <TrendingUp className="h-8 w-8 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold text-blue-500">Rs {soldItems.reduce((a, b) => a + b.commission, 0).toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Total Commission</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">Rs {Math.round(soldItems.reduce((a, b) => a + b.price, 0) / soldItems.length).toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Avg. Sale Value</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search sold items..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Seller" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sellers</SelectItem>
                  <SelectItem value="hub">Gaming Hub KTM</SelectItem>
                  <SelectItem value="ezone">E-Zone Pokhara</SelectItem>
                  <SelectItem value="world">Game World LP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Seller</TableHead>
                  <TableHead>Buyer</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Commission</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {soldItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.item}</TableCell>
                    <TableCell>{item.seller}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.buyer}</Badge>
                    </TableCell>
                    <TableCell className="font-semibold">Rs {item.price.toLocaleString()}</TableCell>
                    <TableCell className="text-green-500">Rs {item.commission.toLocaleString()}</TableCell>
                    <TableCell className="text-muted-foreground">{item.date}</TableCell>
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
