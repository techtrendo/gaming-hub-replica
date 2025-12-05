import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, Shield, FileCheck, AlertTriangle } from "lucide-react";

const documentTypes = [
  { id: 1, name: "Citizenship", required: true, enabled: true },
  { id: 2, name: "Passport", required: false, enabled: true },
  { id: 3, name: "Driving License", required: false, enabled: true },
  { id: 4, name: "Voter ID", required: false, enabled: false },
];

export default function KYCSetting() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">KYC Settings</h2>
            <p className="text-muted-foreground">Configure KYC verification requirements</p>
          </div>
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Changes
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Shield className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">Enabled</div>
                  <p className="text-xs text-muted-foreground">KYC Status</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <FileCheck className="h-8 w-8 text-green-500" />
                <div>
                  <div className="text-2xl font-bold">{documentTypes.filter(d => d.enabled).length}</div>
                  <p className="text-xs text-muted-foreground">Active Documents</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <AlertTriangle className="h-8 w-8 text-yellow-500" />
                <div>
                  <div className="text-2xl font-bold">48hrs</div>
                  <p className="text-xs text-muted-foreground">Review Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label>Enable KYC Verification</Label>
                  <p className="text-xs text-muted-foreground">Require users to verify identity</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Mandatory for Withdrawals</Label>
                  <p className="text-xs text-muted-foreground">Require KYC for withdrawal requests</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label>Mandatory for Large Orders</Label>
                  <p className="text-xs text-muted-foreground">Require KYC for orders above limit</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="space-y-2">
                <Label>Order Limit (Rs)</Label>
                <Input type="number" defaultValue="10000" />
                <p className="text-xs text-muted-foreground">KYC required for orders above this amount</p>
              </div>
              <div className="space-y-2">
                <Label>Auto-Reject After (Days)</Label>
                <Select defaultValue="7">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 days</SelectItem>
                    <SelectItem value="7">7 days</SelectItem>
                    <SelectItem value="14">14 days</SelectItem>
                    <SelectItem value="30">30 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Document Types</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {documentTypes.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <FileCheck className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      {doc.required && <Badge variant="outline" className="text-xs">Required</Badge>}
                    </div>
                  </div>
                  <Switch checked={doc.enabled} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>KYC Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Instructions for Users</Label>
                <Textarea 
                  rows={4}
                  defaultValue="Please upload clear photos of your identity documents. Make sure all text is readable and the document is not expired. Both front and back sides are required for citizenship cards."
                />
              </div>
              <div className="space-y-2">
                <Label>Rejection Message Template</Label>
                <Textarea 
                  rows={3}
                  defaultValue="Your KYC verification was rejected. Reason: {reason}. Please resubmit with valid documents."
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
