import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, MessageSquare, Clock, CheckCircle2, AlertCircle, Eye, Reply } from "lucide-react";

const tickets = [
  { id: "TKT001", subject: "Payment not received", user: "Ram Kumar", priority: "high", status: "open", category: "Payment", created: "2024-01-15 14:30", lastReply: "2024-01-15 15:45" },
  { id: "TKT002", subject: "Wrong product delivered", user: "Sita Sharma", priority: "high", status: "in_progress", category: "Orders", created: "2024-01-15 13:20", lastReply: "2024-01-15 14:30" },
  { id: "TKT003", subject: "Account login issue", user: "Amit Thapa", priority: "medium", status: "open", category: "Account", created: "2024-01-15 12:15", lastReply: "2024-01-15 12:15" },
  { id: "TKT004", subject: "Refund request", user: "Priya Rai", priority: "medium", status: "resolved", category: "Refund", created: "2024-01-14 10:30", lastReply: "2024-01-15 09:20" },
  { id: "TKT005", subject: "How to redeem code?", user: "Krishna KC", priority: "low", status: "resolved", category: "General", created: "2024-01-14 09:00", lastReply: "2024-01-14 11:30" },
  { id: "TKT006", subject: "Top up failed but money deducted", user: "Maya Limbu", priority: "high", status: "open", category: "Payment", created: "2024-01-15 16:00", lastReply: "2024-01-15 16:00" },
];

const getPriorityBadge = (priority: string) => {
  switch (priority) {
    case "high":
      return <Badge className="bg-red-500/10 text-red-500">High</Badge>;
    case "medium":
      return <Badge className="bg-yellow-500/10 text-yellow-500">Medium</Badge>;
    case "low":
      return <Badge className="bg-green-500/10 text-green-500">Low</Badge>;
    default:
      return <Badge>{priority}</Badge>;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "open":
      return <Badge className="bg-blue-500/10 text-blue-500"><AlertCircle className="h-3 w-3 mr-1" />Open</Badge>;
    case "in_progress":
      return <Badge className="bg-yellow-500/10 text-yellow-500"><Clock className="h-3 w-3 mr-1" />In Progress</Badge>;
    case "resolved":
      return <Badge className="bg-green-500/10 text-green-500"><CheckCircle2 className="h-3 w-3 mr-1" />Resolved</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export default function SupportTickets() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Support Tickets</h2>
            <p className="text-muted-foreground">Manage customer support requests</p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <MessageSquare className="h-8 w-8 text-primary" />
                <div>
                  <div className="text-2xl font-bold">{tickets.length}</div>
                  <p className="text-xs text-muted-foreground">Total Tickets</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-blue-500">{tickets.filter(t => t.status === "open").length}</div>
              <p className="text-xs text-muted-foreground">Open</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-yellow-500">{tickets.filter(t => t.status === "in_progress").length}</div>
              <p className="text-xs text-muted-foreground">In Progress</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-red-500">{tickets.filter(t => t.priority === "high" && t.status !== "resolved").length}</div>
              <p className="text-xs text-muted-foreground">High Priority</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search tickets..." className="pl-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in_progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticket ID</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>User</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {tickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="font-medium">{ticket.id}</TableCell>
                    <TableCell className="max-w-[200px] truncate">{ticket.subject}</TableCell>
                    <TableCell>{ticket.user}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{ticket.category}</Badge>
                    </TableCell>
                    <TableCell>{getPriorityBadge(ticket.priority)}</TableCell>
                    <TableCell>{getStatusBadge(ticket.status)}</TableCell>
                    <TableCell className="text-muted-foreground">{ticket.created}</TableCell>
                    <TableCell>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon"><Eye className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon"><Reply className="h-4 w-4" /></Button>
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
