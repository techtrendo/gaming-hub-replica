import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import BuyNow from "./pages/BuyNow";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin/Dashboard";
import GenericAdminPage from "./pages/admin/GenericAdminPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/checkout/:productId" element={<Checkout />} />
          <Route path="/buy/:productId" element={<BuyNow />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/staff/manage" element={<GenericAdminPage title="Manage Staff" />} />
          <Route path="/admin/staff/roles" element={<GenericAdminPage title="Role & Permission" />} />
          <Route path="/admin/cards/category" element={<GenericAdminPage title="Card Category" />} />
          <Route path="/admin/cards/list" element={<GenericAdminPage title="Cards" />} />
          <Route path="/admin/agent-topup/category" element={<GenericAdminPage title="Agent Top Up Category" />} />
          <Route path="/admin/agent-topup/topup" element={<GenericAdminPage title="Top Up" />} />
          <Route path="/admin/orders/topup" element={<GenericAdminPage title="Top Up Orders" />} />
          <Route path="/admin/orders/card" element={<GenericAdminPage title="Card Orders" />} />
          <Route path="/admin/sell/category" element={<GenericAdminPage title="Sell Category" />} />
          <Route path="/admin/sell/selling-point" element={<GenericAdminPage title="Selling Point" />} />
          <Route path="/admin/sell/sold-point" element={<GenericAdminPage title="Sold Point" />} />
          <Route path="/admin/transactions/list" element={<GenericAdminPage title="Transactions" />} />
          <Route path="/admin/transactions/withdraw" element={<GenericAdminPage title="Withdraw Log" />} />
          <Route path="/admin/transactions/payment" element={<GenericAdminPage title="Payment Log" />} />
          <Route path="/admin/transactions/request" element={<GenericAdminPage title="Payment Request" />} />
          <Route path="/admin/marketing/campaign" element={<GenericAdminPage title="Campaign" />} />
          <Route path="/admin/marketing/coupons" element={<GenericAdminPage title="Coupons" />} />
          <Route path="/admin/marketing/follow" element={<GenericAdminPage title="Follow" />} />
          <Route path="/admin/support/tickets" element={<GenericAdminPage title="Support Tickets" />} />
          <Route path="/admin/kyc/setting" element={<GenericAdminPage title="KYC Setting" />} />
          <Route path="/admin/kyc/request" element={<GenericAdminPage title="KYC Request" />} />
          <Route path="/admin/users/management" element={<GenericAdminPage title="User Management" />} />
          <Route path="/admin/users/activity" element={<GenericAdminPage title="User Activity" />} />
          <Route path="/admin/users/dashboard" element={<GenericAdminPage title="User Dashboard" />} />
          <Route path="/admin/payment/control" element={<GenericAdminPage title="Payment Control Panel" />} />
          <Route path="/admin/payment/setting" element={<GenericAdminPage title="Payment Setting" />} />
          <Route path="/admin/payment/withdraw" element={<GenericAdminPage title="Withdraw Setting" />} />
          <Route path="/admin/website/theme" element={<GenericAdminPage title="Choose Theme" />} />
          <Route path="/admin/website/pages" element={<GenericAdminPage title="Pages" />} />
          <Route path="/admin/website/menu" element={<GenericAdminPage title="Manage Menu" />} />
          <Route path="/admin/website/content" element={<GenericAdminPage title="Manage Content" />} />
          <Route path="/admin/website/blog" element={<GenericAdminPage title="Manage Blog" />} />
          <Route path="/admin/application/cache" element={<GenericAdminPage title="Cache Clear" />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
