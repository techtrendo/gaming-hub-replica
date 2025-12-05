import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Edit, Trash2, Eye, EyeOff, FileText, ExternalLink } from "lucide-react";

const pages = [
  { id: 1, title: "Home", slug: "/", status: "published", views: 15420, lastModified: "2024-01-15" },
  { id: 2, title: "About Us", slug: "/about", status: "published", views: 3250, lastModified: "2024-01-10" },
  { id: 3, title: "Contact", slug: "/contact", status: "published", views: 2180, lastModified: "2024-01-12" },
  { id: 4, title: "FAQ", slug: "/faq", status: "published", views: 1890, lastModified: "2024-01-08" },
  { id: 5, title: "Terms & Conditions", slug: "/terms", status: "published", views: 890, lastModified: "2024-01-05" },
  { id: 6, title: "Privacy Policy", slug: "/privacy", status: "published", views: 760, lastModified: "2024-01-05" },
  { id: 7, title: "Refund Policy", slug: "/refund", status: "published", views: 540, lastModified: "2024-01-05" },
  { id: 8, title: "KYC Policy", slug: "/kyc-policy", status: "draft", views: 0, lastModified: "2024-01-14" },
];

export default function ManagePages() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Manage Pages</h2>
            <p className="text-muted-foreground">Create and manage website pages</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Page
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{pages.length}</div>
                  <p className="text-xs text-muted-foreground">Total Pages</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">{pages.filter(p => p.status === "published").length}</div>
              <p className="text-xs text-muted-foreground">Published</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-500">{pages.filter(p => p.status === "draft").length}</div>
              <p className="text-xs text-muted-foreground">Drafts</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{pages.reduce((a, b) => a + b.views, 0).toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total Views</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search pages..." className="pl-10" />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Slug</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Last Modified</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pages.map((page) => (
                  <TableRow key={page.id}>
                    <TableCell className="font-medium">{page.title}</TableCell>
                    <TableCell>
                      <code className="text-xs bg-muted px-2 py-1 rounded">{page.slug}</code>
                    </TableCell>
                    <TableCell>
                      {page.status === "published" ? (
                        <Badge className="bg-green-500/10 text-green-500">
                          <Eye className="h-3 w-3 mr-1" />
                          Published
                        </Badge>
                      ) : (
                        <Badge className="bg-yellow-500/10 text-yellow-500">
                          <EyeOff className="h-3 w-3 mr-1" />
                          Draft
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>{page.views.toLocaleString()}</TableCell>
                    <TableCell className="text-muted-foreground">{page.lastModified}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon"><ExternalLink className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
