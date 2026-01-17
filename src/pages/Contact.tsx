import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <div className="pt-44 container mx-auto px-6 mb-20">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-muted-foreground text-lg mb-12">
                            Have questions about our collection? Interested in wholesale?
                            We're here to assist you with your aquatic journey.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Email</h3>
                                    <p className="text-muted-foreground">hello@betamansion.com</p>
                                    <p className="text-muted-foreground">support@betamansion.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Phone</h3>
                                    <p className="text-muted-foreground">+1 (234) 567-890</p>
                                    <p className="text-sm text-muted-foreground mt-1">Mon-Fri, 9am - 6pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">Visit Us</h3>
                                    <p className="text-muted-foreground">Premium Aquatics District</p>
                                    <p className="text-muted-foreground">123 Coral Way, Miami, FL 33101</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass p-8 rounded-3xl"
                    >
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Email</label>
                                <input type="email" className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:border-primary transition-colors" placeholder="How can we help you?" />
                            </div>

                            <button type="submit" className="w-full btn-luxury">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
