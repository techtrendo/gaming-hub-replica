import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save, CreditCard, Wallet, Building, Smartphone, CheckCircle2, XCircle, Settings } from "lucide-react";

const paymentGateways = [
  { id: 1, name: "eSewa", icon: Wallet, status: true, transactions: 1250, volume: 2500000, fee: "1.5%" },
  { id: 2, name: "Khalti", icon: Smartphone, status: true, transactions: 980, volume: 1800000, fee: "1.8%" },
  { id: 3, name: "ConnectIPS", icon: Building, status: true, transactions: 450, volume: 3200000, fee: "0.5%" },
  { id: 4, name: "IME Pay", icon: CreditCard, status: false, transactions: 0, volume: 0, fee: "2.0%" },
  { id: 5, name: "Bank Transfer", icon: Building, status: true, transactions: 120, volume: 5500000, fee: "0%" },
];

export default function PaymentControl() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Payment Control Panel</h2>
            <p className="text-muted-foreground">Manage payment gateways and settings</p>
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
                <CreditCard className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{paymentGateways.length}</div>
                  <p className="text-xs text-muted-foreground">Total Gateways</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">{paymentGateways.filter(g => g.status).length}</div>
              <p className="text-xs text-muted-foreground">Active</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{paymentGateways.reduce((a, b) => a + b.transactions, 0).toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total Transactions</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">Rs {(paymentGateways.reduce((a, b) => a + b.volume, 0) / 1000000).toFixed(1)}M</div>
              <p className="text-xs text-muted-foreground">Total Volume</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Payment Gateways</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentGateways.map((gateway) => {
                const Icon = gateway.icon;
                return (
                  <div key={gateway.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-muted rounded-lg">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{gateway.name}</p>
                          {gateway.status ? (
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">Fee: {gateway.fee}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-semibold">{gateway.transactions.toLocaleString()} txns</p>
                        <p className="text-xs text-muted-foreground">Rs {(gateway.volume / 1000).toFixed(0)}K</p>
                      </div>
                      <Switch checked={gateway.status} />
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Global Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Enable All Payments</Label>
                  <p className="text-xs text-muted-foreground">Master switch for all payment methods</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Auto Verify Payments</Label>
                  <p className="text-xs text-muted-foreground">Automatically verify small payments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label>Auto Verify Limit (Rs)</Label>
                <Input type="number" defaultValue="5000" />
              </div>
              <div className="space-y-2">
                <Label>Minimum Deposit (Rs)</Label>
                <Input type="number" defaultValue="100" />
              </div>
              <div className="space-y-2">
                <Label>Maximum Deposit (Rs)</Label>
                <Input type="number" defaultValue="100000" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Maintenance Mode</Label>
                  <p className="text-xs text-muted-foreground">Disable all payments temporarily</p>
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
