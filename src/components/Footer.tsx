import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/bettamansion-logo.png";

const footerLinks = {
  explore: [
    { name: "Our Fish", href: "#fish" },
    { name: "Products", href: "#products" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
  ],
  support: [
    { name: "Care Guides", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "FAQs", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="relative bg-secondary pt-24 pb-8 overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              className="inline-flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={logo}
                alt="Beta Mansion"
                className="h-12 w-auto object-contain"
              />
              <span className="font-serif text-xl font-semibold text-foreground">
                Beta Mansion
              </span>
            </motion.a>
            
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
              Where aquatic elegance meets excellence. Discover the world's finest
              collection of premium Betta fish and luxury aquarium essentials.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@betamansion.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">hello@betamansion.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+1 (234) 567-890</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Premium Aquatics District</span>
              </div>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
              Support
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-6">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-serif text-xl font-semibold text-foreground mb-2">
                Join the Elite
              </h4>
              <p className="text-sm text-muted-foreground">
                Subscribe for exclusive drops, care tips, and special offers.
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-6 py-3 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                className="btn-luxury whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 Beta Mansion. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
