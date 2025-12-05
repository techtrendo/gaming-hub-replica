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
import UserManagement from "./pages/admin/UserManagement";
import OrdersTopUp from "./pages/admin/OrdersTopUp";
import CardsCategory from "./pages/admin/CardsCategory";
import Transactions from "./pages/admin/Transactions";
import Marketing from "./pages/admin/Marketing";
import StaffManagement from "./pages/admin/StaffManagement";
import RolesPermission from "./pages/admin/RolesPermission";
import CardsList from "./pages/admin/CardsList";
import AgentTopUpCategory from "./pages/admin/AgentTopUpCategory";
import AgentTopUp from "./pages/admin/AgentTopUp";
import CardOrders from "./pages/admin/CardOrders";
import SellCategory from "./pages/admin/SellCategory";
import SellingPoint from "./pages/admin/SellingPoint";
import SoldPoint from "./pages/admin/SoldPoint";
import WithdrawLog from "./pages/admin/WithdrawLog";
import PaymentLog from "./pages/admin/PaymentLog";
import PaymentRequest from "./pages/admin/PaymentRequest";
import Coupons from "./pages/admin/Coupons";
import Follow from "./pages/admin/Follow";
import SupportTickets from "./pages/admin/SupportTickets";
import KYCSetting from "./pages/admin/KYCSetting";
import KYCRequest from "./pages/admin/KYCRequest";
import UserActivity from "./pages/admin/UserActivity";
import UserDashboard from "./pages/admin/UserDashboard";
import PaymentControl from "./pages/admin/PaymentControl";
import PaymentSetting from "./pages/admin/PaymentSetting";
import WithdrawSetting from "./pages/admin/WithdrawSetting";
import ChooseTheme from "./pages/admin/ChooseTheme";
import ManagePages from "./pages/admin/ManagePages";
import ManageMenu from "./pages/admin/ManageMenu";
import ManageContent from "./pages/admin/ManageContent";
import ManageBlog from "./pages/admin/ManageBlog";
import CacheClear from "./pages/admin/CacheClear";

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
          <Route path="/admin/staff/manage" element={<StaffManagement />} />
          <Route path="/admin/staff/roles" element={<RolesPermission />} />
          <Route path="/admin/cards/category" element={<CardsCategory />} />
          <Route path="/admin/cards/list" element={<CardsList />} />
          <Route path="/admin/agent-topup/category" element={<AgentTopUpCategory />} />
          <Route path="/admin/agent-topup/topup" element={<AgentTopUp />} />
          <Route path="/admin/orders/topup" element={<OrdersTopUp />} />
          <Route path="/admin/orders/card" element={<CardOrders />} />
          <Route path="/admin/sell/category" element={<SellCategory />} />
          <Route path="/admin/sell/selling-point" element={<SellingPoint />} />
          <Route path="/admin/sell/sold-point" element={<SoldPoint />} />
          <Route path="/admin/transactions/list" element={<Transactions />} />
          <Route path="/admin/transactions/withdraw" element={<WithdrawLog />} />
          <Route path="/admin/transactions/payment" element={<PaymentLog />} />
          <Route path="/admin/transactions/request" element={<PaymentRequest />} />
          <Route path="/admin/marketing/campaign" element={<Marketing />} />
          <Route path="/admin/marketing/coupons" element={<Coupons />} />
          <Route path="/admin/marketing/follow" element={<Follow />} />
          <Route path="/admin/support/tickets" element={<SupportTickets />} />
          <Route path="/admin/kyc/setting" element={<KYCSetting />} />
          <Route path="/admin/kyc/request" element={<KYCRequest />} />
          <Route path="/admin/users/management" element={<UserManagement />} />
          <Route path="/admin/users/activity" element={<UserActivity />} />
          <Route path="/admin/users/dashboard" element={<UserDashboard />} />
          <Route path="/admin/payment/control" element={<PaymentControl />} />
          <Route path="/admin/payment/setting" element={<PaymentSetting />} />
          <Route path="/admin/payment/withdraw" element={<WithdrawSetting />} />
          <Route path="/admin/website/theme" element={<ChooseTheme />} />
          <Route path="/admin/website/pages" element={<ManagePages />} />
          <Route path="/admin/website/menu" element={<ManageMenu />} />
          <Route path="/admin/website/content" element={<ManageContent />} />
          <Route path="/admin/website/blog" element={<ManageBlog />} />
          <Route path="/admin/application/cache" element={<CacheClear />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
