import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye, EyeOff, DollarSign, TrendingUp, Package } from "lucide-react";

const categories = [
  { id: 1, name: "Game Accounts", items: 156, sold: 89, revenue: 245000, status: "active", commission: "10%" },
  { id: 2, name: "In-Game Items", items: 342, sold: 178, revenue: 89000, status: "active", commission: "8%" },
  { id: 3, name: "Game Currency", items: 89, sold: 234, revenue: 156000, status: "active", commission: "5%" },
  { id: 4, name: "Boosting Services", items: 45, sold: 23, revenue: 67000, status: "active", commission: "15%" },
  { id: 5, name: "Game Keys", items: 67, sold: 45, revenue: 123000, status: "inactive", commission: "12%" },
];

export default function SellCategory() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Sell Categories</h2>
            <p className="text-muted-foreground">Manage marketplace sell categories</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Category
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Package className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{categories.length}</div>
                  <p className="text-xs text-muted-foreground">Categories</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{categories.reduce((a, b) => a + b.items, 0)}</div>
              <p className="text-xs text-muted-foreground">Total Items</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">{categories.reduce((a, b) => a + b.sold, 0)}</div>
              <p className="text-xs text-muted-foreground">Items Sold</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">Rs {(categories.reduce((a, b) => a + b.revenue, 0) / 1000).toFixed(0)}K</div>
              <p className="text-xs text-muted-foreground">Total Revenue</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-xs text-muted-foreground">Commission: {category.commission}</p>
                  </div>
                  {category.status === "active" ? (
                    <Badge className="bg-green-500/10 text-green-500">
                      <Eye className="h-3 w-3 mr-1" />
                      Active
                    </Badge>
                  ) : (
                    <Badge className="bg-gray-500/10 text-gray-500">
                      <EyeOff className="h-3 w-3 mr-1" />
                      Inactive
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 bg-muted/50 rounded-lg">
                    <Package className="h-4 w-4 mx-auto mb-1 text-muted-foreground" />
                    <div className="text-lg font-bold">{category.items}</div>
                    <p className="text-xs text-muted-foreground">Items</p>
                  </div>
                  <div className="text-center p-2 bg-muted/50 rounded-lg">
                    <TrendingUp className="h-4 w-4 mx-auto mb-1 text-green-500" />
                    <div className="text-lg font-bold">{category.sold}</div>
                    <p className="text-xs text-muted-foreground">Sold</p>
                  </div>
                  <div className="text-center p-2 bg-muted/50 rounded-lg">
                    <DollarSign className="h-4 w-4 mx-auto mb-1 text-primary" />
                    <div className="text-lg font-bold">{(category.revenue / 1000).toFixed(0)}K</div>
                    <p className="text-xs text-muted-foreground">Revenue</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="h-3 w-3 mr-1" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="text-destructive">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
