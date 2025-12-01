import { AdminLayout } from "@/components/admin/AdminLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GenericAdminPageProps {
  title: string;
  description?: string;
}

export default function GenericAdminPage({ title, description }: GenericAdminPageProps) {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
          {description && <p className="text-muted-foreground">{description}</p>}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">This section is under construction.</p>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
