import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Plus, Search, Edit, Trash2, Eye, EyeOff, FileText, Calendar, User } from "lucide-react";

const blogs = [
  { id: 1, title: "Top 10 PUBG Mobile Tips for Beginners", author: "Admin", category: "Gaming Tips", status: "published", views: 2450, date: "2024-01-15" },
  { id: 2, title: "How to Redeem Steam Gift Cards", author: "Admin", category: "Guides", status: "published", views: 1890, date: "2024-01-12" },
  { id: 3, title: "Best Free Fire Characters in 2024", author: "Editor", category: "Gaming Tips", status: "published", views: 3200, date: "2024-01-10" },
  { id: 4, title: "Mobile Legends: Bang Bang Season Guide", author: "Admin", category: "Gaming Tips", status: "draft", views: 0, date: "2024-01-14" },
  { id: 5, title: "PlayStation Plus vs Xbox Game Pass", author: "Editor", category: "Comparison", status: "published", views: 1560, date: "2024-01-08" },
  { id: 6, title: "Upcoming Games of 2024", author: "Admin", category: "News", status: "published", views: 4500, date: "2024-01-05" },
];

const categories = ["Gaming Tips", "Guides", "News", "Comparison", "Reviews"];

export default function ManageBlog() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Manage Blog</h2>
            <p className="text-muted-foreground">Create and manage blog posts</p>
          </div>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            New Post
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{blogs.length}</div>
                  <p className="text-xs text-muted-foreground">Total Posts</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-green-500">{blogs.filter(b => b.status === "published").length}</div>
              <p className="text-xs text-muted-foreground">Published</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-500">{blogs.filter(b => b.status === "draft").length}</div>
              <p className="text-xs text-muted-foreground">Drafts</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold">{blogs.reduce((a, b) => a + b.views, 0).toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Total Views</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search posts..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Views</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.map((blog) => (
                  <TableRow key={blog.id}>
                    <TableCell className="font-medium max-w-[250px] truncate">{blog.title}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        {blog.author}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{blog.category}</Badge>
                    </TableCell>
                    <TableCell>
                      {blog.status === "published" ? (
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
                    <TableCell>{blog.views.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {blog.date}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
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
