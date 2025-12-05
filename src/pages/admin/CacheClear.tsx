import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trash2, Database, Image, FileText, RefreshCw, HardDrive, CheckCircle2, Clock } from "lucide-react";

const cacheItems = [
  { id: 1, name: "Application Cache", size: "125 MB", items: 1250, icon: Database, lastCleared: "2024-01-10" },
  { id: 2, name: "Image Cache", size: "450 MB", items: 3420, icon: Image, lastCleared: "2024-01-12" },
  { id: 3, name: "View Cache", size: "45 MB", items: 890, icon: FileText, lastCleared: "2024-01-14" },
  { id: 4, name: "Route Cache", size: "12 MB", items: 156, icon: RefreshCw, lastCleared: "2024-01-15" },
  { id: 5, name: "Config Cache", size: "8 MB", items: 45, icon: HardDrive, lastCleared: "2024-01-15" },
];

const recentClears = [
  { action: "Cleared Application Cache", user: "Admin", time: "2024-01-15 14:30" },
  { action: "Cleared All Caches", user: "Super Admin", time: "2024-01-14 10:15" },
  { action: "Cleared Image Cache", user: "Admin", time: "2024-01-12 16:45" },
  { action: "Cleared View Cache", user: "Admin", time: "2024-01-10 09:30" },
];

export default function CacheClear() {
  const totalSize = cacheItems.reduce((acc, item) => {
    const size = parseFloat(item.size);
    return acc + size;
  }, 0);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Cache Management</h2>
            <p className="text-muted-foreground">Clear application caches to improve performance</p>
          </div>
          <Button variant="destructive" className="gap-2">
            <Trash2 className="h-4 w-4" />
            Clear All Caches
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <HardDrive className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{totalSize.toFixed(0)} MB</div>
                  <p className="text-xs text-muted-foreground">Total Cache Size</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{cacheItems.length}</div>
              <p className="text-xs text-muted-foreground">Cache Types</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{cacheItems.reduce((a, b) => a + b.items, 0).toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Cached Items</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Storage Used</span>
                  <span>{((totalSize / 1000) * 100).toFixed(0)}%</span>
                </div>
                <Progress value={(totalSize / 1000) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Cache Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {cacheItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-muted rounded-lg">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.items.toLocaleString()} items • {item.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.lastCleared}
                      </Badge>
                      <Button variant="outline" size="sm" className="gap-1">
                        <Trash2 className="h-3 w-3" />
                        Clear
                      </Button>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentClears.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                    <div className="p-2 bg-green-500/10 rounded-full">
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">by {activity.user}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                  <RefreshCw className="h-6 w-6" />
                  <span>Optimize Tables</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                  <Database className="h-6 w-6" />
                  <span>Clear Sessions</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                  <Image className="h-6 w-6" />
                  <span>Purge Old Images</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col gap-2">
                  <FileText className="h-6 w-6" />
                  <span>Clear Logs</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
