import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Instagram, Twitter, Facebook, Youtube, MessageCircle, Users, TrendingUp, ExternalLink } from "lucide-react";

const socialPlatforms = [
  { id: 1, name: "Instagram", icon: Instagram, followers: 15420, url: "https://instagram.com/gamingcenter", reward: 10, status: true, color: "text-pink-500" },
  { id: 2, name: "Twitter", icon: Twitter, followers: 8750, url: "https://twitter.com/gamingcenter", reward: 10, status: true, color: "text-blue-400" },
  { id: 3, name: "Facebook", icon: Facebook, followers: 23500, url: "https://facebook.com/gamingcenter", reward: 10, status: true, color: "text-blue-600" },
  { id: 4, name: "YouTube", icon: Youtube, followers: 5200, url: "https://youtube.com/gamingcenter", reward: 15, status: true, color: "text-red-500" },
  { id: 5, name: "Discord", icon: MessageCircle, followers: 3800, url: "https://discord.gg/gamingcenter", reward: 20, status: false, color: "text-indigo-500" },
];

const recentFollowers = [
  { id: 1, user: "gamer123", platform: "Instagram", reward: 10, date: "2024-01-15 14:30" },
  { id: 2, user: "proPlayer", platform: "Twitter", reward: 10, date: "2024-01-15 14:25" },
  { id: 3, user: "mlbb_fan", platform: "YouTube", reward: 15, date: "2024-01-15 14:20" },
  { id: 4, user: "codMaster", platform: "Facebook", reward: 10, date: "2024-01-15 14:15" },
  { id: 5, user: "ff_lover", platform: "Instagram", reward: 10, date: "2024-01-15 14:10" },
];

export default function Follow() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Follow & Earn</h2>
            <p className="text-muted-foreground">Manage social media follow rewards</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{socialPlatforms.reduce((a, b) => a + b.followers, 0).toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">Total Followers</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">{socialPlatforms.filter(s => s.status).length}</div>
              <p className="text-xs text-muted-foreground">Active Platforms</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <TrendingUp className="h-8 w-8 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">Rs {socialPlatforms.reduce((a, b) => a + b.reward, 0)}</div>
                  <p className="text-xs text-muted-foreground">Total Rewards</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{recentFollowers.length}</div>
              <p className="text-xs text-muted-foreground">Today's Follows</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Social Platforms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {socialPlatforms.map((platform) => {
                const Icon = platform.icon;
                return (
                  <div key={platform.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Icon className={`h-8 w-8 ${platform.color}`} />
                      <div>
                        <p className="font-medium">{platform.name}</p>
                        <p className="text-xs text-muted-foreground">{platform.followers.toLocaleString()} followers</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="outline">Rs {platform.reward}</Badge>
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Switch checked={platform.status} />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Followers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentFollowers.map((follower) => (
                  <div key={follower.id} className="flex items-center justify-between py-3 border-b last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                        <Users className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium">{follower.user}</p>
                        <p className="text-xs text-muted-foreground">{follower.platform}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className="bg-green-500/10 text-green-500">+Rs {follower.reward}</Badge>
                      <p className="text-xs text-muted-foreground mt-1">{follower.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
