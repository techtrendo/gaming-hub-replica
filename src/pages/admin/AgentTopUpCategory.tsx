import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye, EyeOff, Smartphone, Gamepad2, CreditCard, Wifi } from "lucide-react";

const categories = [
  { id: 1, name: "Mobile Games", icon: Gamepad2, products: 85, agents: 45, status: "active", commission: "5%" },
  { id: 2, name: "Mobile Recharge", icon: Smartphone, products: 120, agents: 62, status: "active", commission: "3%" },
  { id: 3, name: "Data Packs", icon: Wifi, products: 45, agents: 38, status: "active", commission: "4%" },
  { id: 4, name: "Gift Cards", icon: CreditCard, products: 78, agents: 55, status: "active", commission: "6%" },
  { id: 5, name: "Streaming", icon: Gamepad2, products: 32, agents: 28, status: "inactive", commission: "5%" },
];

export default function AgentTopUpCategory() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Agent Top Up Categories</h2>
            <p className="text-muted-foreground">Manage categories available for agents</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Category
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{categories.length}</div>
              <p className="text-xs text-muted-foreground">Total Categories</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">{categories.filter(c => c.status === "active").length}</div>
              <p className="text-xs text-muted-foreground">Active</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{categories.reduce((a, b) => a + b.products, 0)}</div>
              <p className="text-xs text-muted-foreground">Total Products</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{categories.reduce((a, b) => a + b.agents, 0)}</div>
              <p className="text-xs text-muted-foreground">Active Agents</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{category.name}</h3>
                        <p className="text-xs text-muted-foreground">Commission: {category.commission}</p>
                      </div>
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
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-xl font-bold">{category.products}</div>
                      <p className="text-xs text-muted-foreground">Products</p>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="text-xl font-bold">{category.agents}</div>
                      <p className="text-xs text-muted-foreground">Agents</p>
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
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
}
