import { useState } from "react";
import { ChevronDown, LayoutDashboard, Users, CreditCard, TrendingUp, ShoppingCart, DollarSign, Megaphone, Headphones, Shield, User, Settings, Globe, Package } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface MenuItem {
  title: string;
  url?: string;
  icon: any;
  submenu?: { title: string; url: string }[];
}

const menuItems: MenuItem[] = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Manage Staff",
    icon: Users,
    submenu: [
      { title: "Manage Staff", url: "/admin/staff/manage" },
      { title: "Role & Permission", url: "/admin/staff/roles" },
    ],
  },
  {
    title: "Cards",
    icon: CreditCard,
    submenu: [
      { title: "Category", url: "/admin/cards/category" },
      { title: "Card", url: "/admin/cards/list" },
    ],
  },
  {
    title: "Agent Top Up",
    icon: TrendingUp,
    submenu: [
      { title: "Category", url: "/admin/agent-topup/category" },
      { title: "Top Up", url: "/admin/agent-topup/topup" },
    ],
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    submenu: [
      { title: "Top Up Order", url: "/admin/orders/topup" },
      { title: "Card Order", url: "/admin/orders/card" },
    ],
  },
  {
    title: "Sell",
    icon: Package,
    submenu: [
      { title: "Sell Category", url: "/admin/sell/category" },
      { title: "Selling Point", url: "/admin/sell/selling-point" },
      { title: "Sold Point", url: "/admin/sell/sold-point" },
    ],
  },
  {
    title: "Transactions",
    icon: DollarSign,
    submenu: [
      { title: "Transaction", url: "/admin/transactions/list" },
      { title: "Withdraw Log", url: "/admin/transactions/withdraw" },
      { title: "Payment Log", url: "/admin/transactions/payment" },
      { title: "Payment Request", url: "/admin/transactions/request" },
    ],
  },
  {
    title: "Marketing",
    icon: Megaphone,
    submenu: [
      { title: "Campaign", url: "/admin/marketing/campaign" },
      { title: "Coupons", url: "/admin/marketing/coupons" },
      { title: "Follow", url: "/admin/marketing/follow" },
    ],
  },
  {
    title: "Support",
    icon: Headphones,
    submenu: [
      { title: "Support Ticket", url: "/admin/support/tickets" },
    ],
  },
  {
    title: "KYC System",
    icon: Shield,
    submenu: [
      { title: "KYC Setting", url: "/admin/kyc/setting" },
      { title: "KYC Request", url: "/admin/kyc/request" },
    ],
  },
  {
    title: "Users",
    icon: User,
    submenu: [
      { title: "User Management", url: "/admin/users/management" },
      { title: "User Activity", url: "/admin/users/activity" },
      { title: "Dashboard", url: "/admin/users/dashboard" },
    ],
  },
  {
    title: "Payment Setup",
    icon: Settings,
    submenu: [
      { title: "Control Panel", url: "/admin/payment/control" },
      { title: "Payment Setting", url: "/admin/payment/setting" },
      { title: "Withdraw Setting", url: "/admin/payment/withdraw" },
    ],
  },
  {
    title: "Website Setting",
    icon: Globe,
    submenu: [
      { title: "Choose Theme", url: "/admin/website/theme" },
      { title: "Pages", url: "/admin/website/pages" },
      { title: "Manage Menu", url: "/admin/website/menu" },
      { title: "Manage Content", url: "/admin/website/content" },
      { title: "Manage Blog", url: "/admin/website/blog" },
    ],
  },
  {
    title: "Application",
    icon: Package,
    submenu: [
      { title: "Cache Clear", url: "/admin/application/cache" },
    ],
  },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const [openGroups, setOpenGroups] = useState<string[]>(["Dashboard"]);

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const isPathActive = (path: string) => location.pathname === path;
  const isGroupActive = (submenu?: { url: string }[]) =>
    submenu?.some((item) => location.pathname === item.url);

  return (
    <Sidebar className="border-r border-border/40 bg-[#1a1d2e]" collapsible="icon">
      <SidebarContent className="bg-[#1a1d2e]">
        <SidebarGroup>
          <div className="px-4 py-6 border-b border-border/20">
            <h2 className={cn(
              "text-lg font-bold text-white transition-opacity",
              state === "collapsed" && "opacity-0"
            )}>
              Gaming Center
            </h2>
            <p className={cn(
              "text-xs text-gray-400 mt-1 transition-opacity",
              state === "collapsed" && "opacity-0"
            )}>
              Admin Dashboard
            </p>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.submenu ? (
                    <Collapsible
                      open={openGroups.includes(item.title)}
                      onOpenChange={() => toggleGroup(item.title)}
                    >
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          className={cn(
                            "w-full text-gray-300 hover:bg-[#252842] hover:text-white transition-colors",
                            isGroupActive(item.submenu) && "bg-[#252842] text-white"
                          )}
                        >
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                          <ChevronDown
                            className={cn(
                              "ml-auto h-4 w-4 transition-transform",
                              openGroups.includes(item.title) && "rotate-180"
                            )}
                          />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-1">
                        {item.submenu.map((subItem) => (
                          <NavLink
                            key={subItem.url}
                            to={subItem.url}
                            className={cn(
                              "flex items-center py-2 pl-12 pr-4 text-sm text-gray-400 hover:bg-[#252842] hover:text-white transition-colors",
                              isPathActive(subItem.url) && "bg-primary/20 text-primary font-medium border-l-2 border-primary"
                            )}
                          >
                            {subItem.title}
                          </NavLink>
                        ))}
                      </CollapsibleContent>
                    </Collapsible>
                  ) : (
                    <SidebarMenuButton
                      asChild
                      className={cn(
                        "text-gray-300 hover:bg-[#252842] hover:text-white transition-colors",
                        isPathActive(item.url!) && "bg-primary/20 text-primary font-medium"
                      )}
                    >
                      <NavLink to={item.url!}>
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
