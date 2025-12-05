import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Check, Palette, Sun, Moon, Monitor } from "lucide-react";

const themes = [
  { id: 1, name: "Default Blue", primary: "#3b82f6", secondary: "#1e40af", active: true },
  { id: 2, name: "Gaming Green", primary: "#22c55e", secondary: "#15803d", active: false },
  { id: 3, name: "Purple Dream", primary: "#8b5cf6", secondary: "#6d28d9", active: false },
  { id: 4, name: "Sunset Orange", primary: "#f97316", secondary: "#c2410c", active: false },
  { id: 5, name: "Ruby Red", primary: "#ef4444", secondary: "#b91c1c", active: false },
  { id: 6, name: "Teal Ocean", primary: "#14b8a6", secondary: "#0f766e", active: false },
];

const colorModes = [
  { id: "light", name: "Light", icon: Sun, description: "Light mode for day time" },
  { id: "dark", name: "Dark", icon: Moon, description: "Dark mode for night time" },
  { id: "system", name: "System", icon: Monitor, description: "Follow system preference" },
];

export default function ChooseTheme() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Choose Theme</h2>
            <p className="text-muted-foreground">Customize your website appearance</p>
          </div>
          <Button className="gap-2">
            <Palette className="h-4 w-4" />
            Apply Theme
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Color Themes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {themes.map((theme) => (
                  <div
                    key={theme.id}
                    className={`relative p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      theme.active ? "border-primary ring-2 ring-primary/20" : ""
                    }`}
                  >
                    {theme.active && (
                      <div className="absolute top-2 right-2">
                        <Check className="h-5 w-5 text-primary" />
                      </div>
                    )}
                    <div className="flex gap-2 mb-3">
                      <div
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: theme.primary }}
                      />
                      <div
                        className="w-8 h-8 rounded-full"
                        style={{ backgroundColor: theme.secondary }}
                      />
                    </div>
                    <p className="font-medium">{theme.name}</p>
                    {theme.active && (
                      <Badge variant="outline" className="mt-2">Active</Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Color Mode</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {colorModes.map((mode) => {
                const Icon = mode.icon;
                return (
                  <div
                    key={mode.id}
                    className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition-all hover:shadow-md ${
                      mode.id === "dark" ? "border-primary ring-2 ring-primary/20" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <div>
                        <p className="font-medium">{mode.name}</p>
                        <p className="text-xs text-muted-foreground">{mode.description}</p>
                      </div>
                    </div>
                    {mode.id === "dark" && <Check className="h-5 w-5 text-primary" />}
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Custom Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Primary Color</Label>
                  <div className="flex gap-2">
                    <Input type="color" defaultValue="#3b82f6" className="w-12 h-10 p-1" />
                    <Input defaultValue="#3b82f6" className="flex-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Secondary Color</Label>
                  <div className="flex gap-2">
                    <Input type="color" defaultValue="#1e40af" className="w-12 h-10 p-1" />
                    <Input defaultValue="#1e40af" className="flex-1" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Accent Color</Label>
                  <div className="flex gap-2">
                    <Input type="color" defaultValue="#f59e0b" className="w-12 h-10 p-1" />
                    <Input defaultValue="#f59e0b" className="flex-1" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Background</Label>
                  <div className="flex gap-2">
                    <Input type="color" defaultValue="#0f172a" className="w-12 h-10 p-1" />
                    <Input defaultValue="#0f172a" className="flex-1" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Enable Animations</Label>
                  <p className="text-xs text-muted-foreground">Smooth transitions and effects</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Rounded Corners</Label>
                  <p className="text-xs text-muted-foreground">Use rounded corners for elements</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Show Shadows</Label>
                  <p className="text-xs text-muted-foreground">Display drop shadows on cards</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Compact Mode</Label>
                  <p className="text-xs text-muted-foreground">Reduce spacing for more content</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
