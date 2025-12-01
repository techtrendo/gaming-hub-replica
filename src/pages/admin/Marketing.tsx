import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  TrendingUp, 
  Users, 
  Eye, 
  MousePointerClick,
  Share2,
  Gift
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const campaignData = [
  { month: "Jan", clicks: 2400, conversions: 400 },
  { month: "Feb", clicks: 1398, conversions: 210 },
  { month: "Mar", clicks: 9800, conversions: 900 },
  { month: "Apr", clicks: 3908, conversions: 480 },
  { month: "May", clicks: 4800, conversions: 580 },
  { month: "Jun", clicks: 3800, conversions: 430 },
];

const campaigns = [
  {
    id: 1,
    name: "Summer Sale 2024",
    type: "Discount",
    status: "active",
    clicks: 12450,
    conversions: 3245,
    budget: "Rs 50,000",
    spent: "Rs 38,500",
    roi: "+245%",
  },
  {
    id: 2,
    name: "New User Welcome",
    type: "Bonus",
    status: "active",
    clicks: 8930,
    conversions: 1890,
    budget: "Rs 30,000",
    spent: "Rs 24,300",
    roi: "+189%",
  },
  {
    id: 3,
    name: "Refer a Friend",
    type: "Referral",
    status: "active",
    clicks: 5620,
    conversions: 890,
    budget: "Rs 20,000",
    spent: "Rs 12,400",
    roi: "+156%",
  },
  {
    id: 4,
    name: "Black Friday Deal",
    type: "Special",
    status: "scheduled",
    clicks: 0,
    conversions: 0,
    budget: "Rs 100,000",
    spent: "Rs 0",
    roi: "-",
  },
];

const coupons = [
  {
    code: "WELCOME50",
    discount: "50%",
    used: 234,
    limit: 500,
    expires: "2024-12-31",
    status: "active",
  },
  {
    code: "SUMMER20",
    discount: "20%",
    used: 789,
    limit: 1000,
    expires: "2024-12-15",
    status: "active",
  },
  {
    code: "FIRSTBUY",
    discount: "Rs 100",
    used: 456,
    limit: 1000,
    expires: "2024-12-31",
    status: "active",
  },
];

export default function Marketing() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Marketing Campaigns</h2>
            <p className="text-muted-foreground">Manage campaigns and promotions</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Campaign
          </Button>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">27K</div>
                  <p className="text-xs text-muted-foreground">Total Clicks</p>
                </div>
                <div className="bg-blue-500/10 p-3 rounded-lg">
                  <MousePointerClick className="h-5 w-5 text-blue-500" />
                </div>
              </div>
              <div className="flex items-center text-xs mt-2 text-green-500">
                <TrendingUp className="h-3 w-3 mr-1" />
                +24.5% this month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">6,025</div>
                  <p className="text-xs text-muted-foreground">Conversions</p>
                </div>
                <div className="bg-green-500/10 p-3 rounded-lg">
                  <Users className="h-5 w-5 text-green-500" />
                </div>
              </div>
              <div className="flex items-center text-xs mt-2 text-green-500">
                <TrendingUp className="h-3 w-3 mr-1" />
                +18.2% this month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">22.3%</div>
                  <p className="text-xs text-muted-foreground">Conversion Rate</p>
                </div>
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Eye className="h-5 w-5 text-purple-500" />
                </div>
              </div>
              <div className="flex items-center text-xs mt-2 text-green-500">
                <TrendingUp className="h-3 w-3 mr-1" />
                +3.4% this month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">1,479</div>
                  <p className="text-xs text-muted-foreground">Coupons Used</p>
                </div>
                <div className="bg-orange-500/10 p-3 rounded-lg">
                  <Gift className="h-5 w-5 text-orange-500" />
                </div>
              </div>
              <div className="flex items-center text-xs mt-2 text-green-500">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.8% this month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Campaign Performance Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Campaign Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={campaignData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="clicks" fill="#ff6b35" />
                <Bar dataKey="conversions" fill="#4ecdc4" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Active Campaigns */}
        <Card>
          <CardHeader>
            <CardTitle>Active Campaigns</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{campaign.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline">{campaign.type}</Badge>
                        {campaign.status === "active" ? (
                          <Badge className="bg-green-500/10 text-green-500">Active</Badge>
                        ) : (
                          <Badge className="bg-blue-500/10 text-blue-500">Scheduled</Badge>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-green-500">{campaign.roi}</p>
                      <p className="text-xs text-muted-foreground">ROI</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-3">
                    <div>
                      <p className="text-xs text-muted-foreground">Clicks</p>
                      <p className="font-semibold">{campaign.clicks.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Conversions</p>
                      <p className="font-semibold">{campaign.conversions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Budget</p>
                      <p className="font-semibold">{campaign.budget}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Spent</p>
                      <p className="font-semibold text-primary">{campaign.spent}</p>
                    </div>
                  </div>

                  <Progress 
                    value={
                      campaign.status === "active" 
                        ? (parseFloat(campaign.spent.replace(/[^\d.]/g, '')) / parseFloat(campaign.budget.replace(/[^\d.]/g, ''))) * 100
                        : 0
                    } 
                    className="h-2" 
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Active Coupons */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Active Coupons</CardTitle>
              <Button variant="outline" size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Add Coupon
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              {coupons.map((coupon) => (
                <div key={coupon.code} className="p-4 rounded-lg border">
                  <div className="flex items-center justify-between mb-3">
                    <code className="text-lg font-bold bg-primary/10 text-primary px-3 py-1 rounded">
                      {coupon.code}
                    </code>
                    <Badge className="bg-green-500/10 text-green-500">Active</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Discount</span>
                      <span className="font-semibold">{coupon.discount}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Used</span>
                      <span className="font-semibold">
                        {coupon.used} / {coupon.limit}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Expires</span>
                      <span className="font-semibold">{coupon.expires}</span>
                    </div>
                    <Progress value={(coupon.used / coupon.limit) * 100} className="h-2 mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
