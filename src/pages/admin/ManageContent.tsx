import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, Image, Type, Phone, Mail, MapPin, Globe } from "lucide-react";

export default function ManageContent() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Manage Content</h2>
            <p className="text-muted-foreground">Update website content and information</p>
          </div>
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save All
          </Button>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList>
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="contact">Contact Info</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="seo">SEO</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Site Identity</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Site Name</Label>
                    <Input defaultValue="Gaming Center" />
                  </div>
                  <div className="space-y-2">
                    <Label>Tagline</Label>
                    <Input defaultValue="Your Ultimate Gaming Destination" />
                  </div>
                  <div className="space-y-2">
                    <Label>Site Logo</Label>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center">
                        <Image className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <Button variant="outline">Upload Logo</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Favicon</Label>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
                        <Image className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <Button variant="outline">Upload Favicon</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Homepage Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Hero Title</Label>
                    <Input defaultValue="Welcome to Gaming Center" />
                  </div>
                  <div className="space-y-2">
                    <Label>Hero Subtitle</Label>
                    <Textarea defaultValue="Get the best deals on gaming gift cards, top-ups, and subscriptions." rows={3} />
                  </div>
                  <div className="space-y-2">
                    <Label>Featured Banner Image</Label>
                    <div className="flex items-center gap-4">
                      <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
                        <Image className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">Upload Banner</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Footer Content</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Footer Description</Label>
                    <Textarea defaultValue="Gaming Center is your one-stop shop for all gaming needs. We offer gift cards, game top-ups, and subscription services at the best prices." rows={3} />
                  </div>
                  <div className="space-y-2">
                    <Label>Copyright Text</Label>
                    <Input defaultValue="Copyright © 2025 Gaming Center. All Rights Reserved." />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><Phone className="h-4 w-4" />Phone Number</Label>
                    <Input defaultValue="9848995198" />
                  </div>
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2"><Phone className="h-4 w-4" />WhatsApp Number</Label>
                    <Input defaultValue="9848995198" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><Mail className="h-4 w-4" />Email Address</Label>
                  <Input type="email" defaultValue="info@gamingcenter.np" />
                </div>
                <div className="space-y-2">
                  <Label className="flex items-center gap-2"><MapPin className="h-4 w-4" />Address</Label>
                  <Textarea defaultValue="Kanchanpur, Nepal" rows={2} />
                </div>
                <div className="space-y-2">
                  <Label>Business Hours</Label>
                  <Input defaultValue="Sun - Fri: 10:00 AM - 8:00 PM" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="social">
            <Card>
              <CardHeader>
                <CardTitle>Social Media Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Facebook</Label>
                  <Input placeholder="https://facebook.com/..." defaultValue="https://facebook.com/gamingcenter" />
                </div>
                <div className="space-y-2">
                  <Label>Instagram</Label>
                  <Input placeholder="https://instagram.com/..." defaultValue="https://instagram.com/gamingcenter" />
                </div>
                <div className="space-y-2">
                  <Label>Twitter</Label>
                  <Input placeholder="https://twitter.com/..." defaultValue="https://twitter.com/gamingcenter" />
                </div>
                <div className="space-y-2">
                  <Label>YouTube</Label>
                  <Input placeholder="https://youtube.com/..." />
                </div>
                <div className="space-y-2">
                  <Label>Discord</Label>
                  <Input placeholder="https://discord.gg/..." />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="seo">
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Meta Title</Label>
                  <Input defaultValue="Gaming Center - Best Gaming Gift Cards & Top Up in Nepal" />
                  <p className="text-xs text-muted-foreground">Recommended: 50-60 characters</p>
                </div>
                <div className="space-y-2">
                  <Label>Meta Description</Label>
                  <Textarea defaultValue="Buy gaming gift cards, game top-ups, and subscriptions at the best prices. Fast delivery and secure payment. PUBG, Free Fire, Mobile Legends, Steam, and more." rows={3} />
                  <p className="text-xs text-muted-foreground">Recommended: 150-160 characters</p>
                </div>
                <div className="space-y-2">
                  <Label>Meta Keywords</Label>
                  <Input defaultValue="gaming, gift cards, top up, PUBG, Free Fire, Mobile Legends, Nepal" />
                </div>
                <div className="space-y-2">
                  <Label>Google Analytics ID</Label>
                  <Input placeholder="UA-XXXXXXXXX-X" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}
