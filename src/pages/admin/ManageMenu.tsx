import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Plus, GripVertical, Edit, Trash2, ChevronRight, Menu, Save } from "lucide-react";

const menuItems = [
  { id: 1, title: "Home", url: "/", position: 1, visible: true, children: [] },
  { id: 2, title: "Shop", url: "/shop", position: 2, visible: true, children: [
    { id: 21, title: "Gift Cards", url: "/shop?cat=gift-cards", visible: true },
    { id: 22, title: "Game Cards", url: "/shop?cat=game-cards", visible: true },
    { id: 23, title: "Top Up", url: "/shop?cat=topup", visible: true },
  ]},
  { id: 3, title: "Categories", url: "#", position: 3, visible: true, children: [
    { id: 31, title: "PUBG Mobile", url: "/category/pubg", visible: true },
    { id: 32, title: "Free Fire", url: "/category/freefire", visible: true },
    { id: 33, title: "Mobile Legends", url: "/category/mlbb", visible: true },
  ]},
  { id: 4, title: "Contact", url: "/contact", position: 4, visible: true, children: [] },
  { id: 5, title: "FAQ", url: "/faq", position: 5, visible: false, children: [] },
];

const footerMenus = [
  { id: 1, title: "Quick Links", items: ["Home", "About", "Blog", "Contact"] },
  { id: 2, title: "Useful Links", items: ["FAQ", "Terms", "Privacy", "Refund Policy"] },
  { id: 3, title: "Categories", items: ["Gift Cards", "Game Cards", "Top Up", "Subscriptions"] },
];

export default function ManageMenu() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Manage Menu</h2>
            <p className="text-muted-foreground">Configure navigation menus</p>
          </div>
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Main Navigation</CardTitle>
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Add Item
              </Button>
            </CardHeader>
            <CardContent className="space-y-2">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <div className="flex items-center gap-2 p-3 border rounded-lg bg-background">
                    <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
                    <Menu className="h-4 w-4 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.url}</p>
                    </div>
                    {item.children.length > 0 && (
                      <Badge variant="outline">{item.children.length} items</Badge>
                    )}
                    <Switch checked={item.visible} />
                    <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                    <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                  </div>
                  {item.children.length > 0 && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <div key={child.id} className="flex items-center gap-2 p-2 border rounded-lg bg-muted/50">
                          <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          <div className="flex-1">
                            <p className="text-sm">{child.title}</p>
                          </div>
                          <Switch checked={child.visible} />
                          <Button variant="ghost" size="icon" className="h-7 w-7"><Edit className="h-3 w-3" /></Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Footer Menus</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {footerMenus.map((menu) => (
                  <div key={menu.id} className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">{menu.title}</h4>
                      <Button variant="ghost" size="sm"><Edit className="h-4 w-4" /></Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {menu.items.map((item) => (
                        <Badge key={item} variant="secondary">{item}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Add Menu Item</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Title</Label>
                  <Input placeholder="Menu item title" />
                </div>
                <div className="space-y-2">
                  <Label>URL</Label>
                  <Input placeholder="/page-url" />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Visible</Label>
                  <Switch defaultChecked />
                </div>
                <Button className="w-full">Add to Menu</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
