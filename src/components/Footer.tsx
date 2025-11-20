import { NavLink } from "@/components/NavLink";
import { Instagram, Twitter, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/blog", label: "Blog" },
    { to: "/contact", label: "Contact" },
  ];

  const usefulLinks = [
    { to: "/faq", label: "FAQ" },
    { to: "/terms", label: "Terms & Conditions" },
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/refund", label: "Refund Policy" },
    { to: "/kyc", label: "KYC Policy" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: MessageCircle, href: "https://wa.me/9848995198", label: "WhatsApp" },
  ];

  return (
    <footer className="border-t bg-card mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-medium text-foreground">Chat Below Before Calling</p>
                  <p>Information Officer: 9848995198</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a href="mailto:[email protected]" className="hover:text-primary">
                  [email protected]
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <p>Kanchanpur, Nepal</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm">
              {usefulLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              Nepal's trusted gaming marketplace for instant top-ups, gift cards, and subscriptions.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>Copyright © 2025 Gaming Center All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};
