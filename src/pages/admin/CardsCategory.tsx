import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Eye, EyeOff } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Gift Cards",
    slug: "gift-cards",
    products: 45,
    status: "active",
    icon: "🎁",
    description: "Digital gift cards for various platforms",
  },
  {
    id: 2,
    name: "Game Cards",
    slug: "game-cards",
    products: 78,
    status: "active",
    icon: "🎮",
    description: "Gaming platform cards and vouchers",
  },
  {
    id: 3,
    name: "Subscription Cards",
    slug: "subscription-cards",
    products: 32,
    status: "active",
    icon: "📺",
    description: "Monthly subscription service cards",
  },
  {
    id: 4,
    name: "E-Wallet Cards",
    slug: "ewallet-cards",
    products: 12,
    status: "active",
    icon: "💳",
    description: "Digital wallet top-up cards",
  },
  {
    id: 5,
    name: "Mobile Recharge",
    slug: "mobile-recharge",
    products: 56,
    status: "active",
    icon: "📱",
    description: "Mobile recharge and data cards",
  },
  {
    id: 6,
    name: "Streaming Services",
    slug: "streaming",
    products: 24,
    status: "inactive",
    icon: "🎬",
    description: "Netflix, Spotify, and other streaming cards",
  },
];

export default function CardsCategory() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Card Categories</h2>
            <p className="text-muted-foreground">Manage product categories</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add Category
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">Total Categories</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">5</div>
              <p className="text-xs text-muted-foreground">Active</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">247</div>
              <p className="text-xs text-muted-foreground">Total Products</p>
            </CardContent>
          </Card>
        </div>

        {/* Categories Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{category.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg">{category.name}</h3>
                      <p className="text-xs text-muted-foreground">{category.slug}</p>
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
                <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <span className="font-semibold text-primary">{category.products}</span>
                    <span className="text-muted-foreground"> products</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Edit className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-destructive">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
