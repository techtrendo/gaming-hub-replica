import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, Wallet, ArrowDownRight, Clock, Percent } from "lucide-react";

const withdrawMethods = [
  { id: 1, name: "eSewa", enabled: true, minAmount: 500, maxAmount: 50000, fee: 1.5, feeType: "percentage" },
  { id: 2, name: "Khalti", enabled: true, minAmount: 500, maxAmount: 50000, fee: 1.8, feeType: "percentage" },
  { id: 3, name: "Bank Transfer", enabled: true, minAmount: 5000, maxAmount: 500000, fee: 50, feeType: "fixed" },
  { id: 4, name: "IME Pay", enabled: false, minAmount: 500, maxAmount: 25000, fee: 2.0, feeType: "percentage" },
];

export default function WithdrawSetting() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Withdraw Settings</h2>
            <p className="text-muted-foreground">Configure withdrawal methods and limits</p>
          </div>
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Wallet className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{withdrawMethods.length}</div>
                  <p className="text-xs text-muted-foreground">Methods</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">{withdrawMethods.filter(m => m.enabled).length}</div>
              <p className="text-xs text-muted-foreground">Active</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Clock className="h-8 w-8 text-blue-500" />
                <div>
                  <div className="text-2xl font-bold">24hrs</div>
                  <p className="text-xs text-muted-foreground">Processing Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Percent className="h-8 w-8 text-orange-500" />
                <div>
                  <div className="text-2xl font-bold">1.7%</div>
                  <p className="text-xs text-muted-foreground">Avg. Fee</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Withdraw Methods</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {withdrawMethods.map((method) => (
                <div key={method.id} className="p-4 border rounded-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ArrowDownRight className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">{method.name}</span>
                    </div>
                    <Switch checked={method.enabled} />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="space-y-1">
                      <Label className="text-xs">Min Amount</Label>
                      <Input type="number" defaultValue={method.minAmount} className="h-8" />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Max Amount</Label>
                      <Input type="number" defaultValue={method.maxAmount} className="h-8" />
                    </div>
                    <div className="space-y-1">
                      <Label className="text-xs">Fee ({method.feeType === "percentage" ? "%" : "Rs"})</Label>
                      <Input type="number" defaultValue={method.fee} className="h-8" />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Global Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Enable Withdrawals</Label>
                  <p className="text-xs text-muted-foreground">Master switch for all withdrawals</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Require KYC</Label>
                  <p className="text-xs text-muted-foreground">KYC verification required for withdrawals</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label>Daily Limit per User (Rs)</Label>
                <Input type="number" defaultValue="100000" />
              </div>
              <div className="space-y-2">
                <Label>Weekly Limit per User (Rs)</Label>
                <Input type="number" defaultValue="500000" />
              </div>
              <div className="space-y-2">
                <Label>Processing Time</Label>
                <Select defaultValue="24">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 hour</SelectItem>
                    <SelectItem value="6">6 hours</SelectItem>
                    <SelectItem value="12">12 hours</SelectItem>
                    <SelectItem value="24">24 hours</SelectItem>
                    <SelectItem value="48">48 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto Approve</Label>
                  <p className="text-xs text-muted-foreground">Auto approve small withdrawals</p>
                </div>
                <Switch />
              </div>
              <div className="space-y-2">
                <Label>Auto Approve Limit (Rs)</Label>
                <Input type="number" defaultValue="5000" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
