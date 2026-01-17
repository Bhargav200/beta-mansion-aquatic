import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const products = [
    {
        id: 1,
        name: "Premium Betta Pellets",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&h=600&fit=crop",
        category: "Nutrition"
    },
    {
        id: 2,
        name: "Aquascape Driftwood",
        price: "$24.50",
        image: "https://images.unsplash.com/photo-1530631339102-e2aaff2bc6bb?w=600&h=600&fit=crop",
        category: "Decor"
    },
    {
        id: 3,
        name: "Nano Tank Kit",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1520302519878-3c0a26e8f1dc?w=600&h=600&fit=crop", // Placeholder
        category: "Tanks"
    },
    {
        id: 4,
        name: "Water Conditioner",
        price: "$15.00",
        image: "https://images.unsplash.com/photo-1585839933066-cdb744ac68f8?w=600&h=600&fit=crop",
        category: "Care"
    }
];

const Products = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />
            <div className="pt-28 container mx-auto px-6 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Luxury Aquarium Essentials
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mb-12">
                        Curated products for the discerning hobbyist. From high-grade nutrition to handcrafted aquascape materials.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.map((product) => (
                            <motion.div
                                key={product.id}
                                className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-colors"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="aspect-square overflow-hidden bg-secondary">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <p className="text-xs text-primary uppercase tracking-wider mb-2">{product.category}</p>
                                    <h3 className="font-serif text-xl text-foreground font-semibold mb-2">{product.name}</h3>
                                    <p className="text-muted-foreground">{product.price}</p>
                                    <button className="mt-4 w-full py-2 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-lg transition-colors font-medium">
                                        Add to Cart
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default Products;
