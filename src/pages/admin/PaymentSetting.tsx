import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, Wallet, Smartphone, Building, Key, Globe } from "lucide-react";

export default function PaymentSetting() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Payment Settings</h2>
            <p className="text-muted-foreground">Configure payment gateway credentials</p>
          </div>
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save All
          </Button>
        </div>

        <Tabs defaultValue="esewa" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="esewa" className="gap-2"><Wallet className="h-4 w-4" />eSewa</TabsTrigger>
            <TabsTrigger value="khalti" className="gap-2"><Smartphone className="h-4 w-4" />Khalti</TabsTrigger>
            <TabsTrigger value="connectips" className="gap-2"><Building className="h-4 w-4" />ConnectIPS</TabsTrigger>
            <TabsTrigger value="bank" className="gap-2"><Building className="h-4 w-4" />Bank</TabsTrigger>
          </TabsList>

          <TabsContent value="esewa">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  eSewa Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Enable eSewa</Label>
                    <p className="text-xs text-muted-foreground">Accept payments via eSewa</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Merchant ID</Label>
                    <Input placeholder="Enter Merchant ID" defaultValue="EPAYTEST" />
                  </div>
                  <div className="space-y-2">
                    <Label>Secret Key</Label>
                    <Input type="password" placeholder="Enter Secret Key" defaultValue="8gBm/:&EnhH.1" />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Success URL</Label>
                    <Input placeholder="https://yoursite.com/success" defaultValue="https://gamingcenter.np/payment/success" />
                  </div>
                  <div className="space-y-2">
                    <Label>Failure URL</Label>
                    <Input placeholder="https://yoursite.com/failure" defaultValue="https://gamingcenter.np/payment/failure" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Test Mode</Label>
                    <p className="text-xs text-muted-foreground">Use sandbox environment</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="khalti">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  Khalti Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Enable Khalti</Label>
                    <p className="text-xs text-muted-foreground">Accept payments via Khalti</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Public Key</Label>
                    <Input placeholder="Enter Public Key" defaultValue="test_public_key_xxx" />
                  </div>
                  <div className="space-y-2">
                    <Label>Secret Key</Label>
                    <Input type="password" placeholder="Enter Secret Key" defaultValue="test_secret_key_xxx" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Webhook URL</Label>
                  <Input placeholder="https://yoursite.com/webhook/khalti" defaultValue="https://gamingcenter.np/api/webhook/khalti" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Test Mode</Label>
                    <p className="text-xs text-muted-foreground">Use sandbox environment</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="connectips">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  ConnectIPS Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Enable ConnectIPS</Label>
                    <p className="text-xs text-muted-foreground">Accept payments via ConnectIPS</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Merchant ID</Label>
                    <Input placeholder="Enter Merchant ID" />
                  </div>
                  <div className="space-y-2">
                    <Label>App ID</Label>
                    <Input placeholder="Enter App ID" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>App Secret</Label>
                  <Input type="password" placeholder="Enter App Secret" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bank">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Bank Transfer Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Enable Bank Transfer</Label>
                    <p className="text-xs text-muted-foreground">Accept manual bank transfers</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Bank Name</Label>
                    <Input placeholder="Enter Bank Name" defaultValue="Nepal SBI Bank" />
                  </div>
                  <div className="space-y-2">
                    <Label>Account Name</Label>
                    <Input placeholder="Enter Account Name" defaultValue="Gaming Center Pvt. Ltd." />
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Account Number</Label>
                    <Input placeholder="Enter Account Number" defaultValue="12345678901234" />
                  </div>
                  <div className="space-y-2">
                    <Label>Branch</Label>
                    <Input placeholder="Enter Branch" defaultValue="Kathmandu Main Branch" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
