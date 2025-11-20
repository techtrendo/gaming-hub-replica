import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { CategoryChips } from "@/components/CategoryChips";
import { ProductCard, Product } from "@/components/ProductCard";
import { QuickViewModal } from "@/components/QuickViewModal";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  const categories = ["Top Up", "Gift Card", "Subscription", "Voucher"];
  const featuredProducts = products.filter((p) => p.featured).slice(0, 8);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartCount((prev) => prev + quantity);
    toast({
      title: "Added to cart",
      description: `${quantity}x ${product.title} added to your cart`,
    });
  };

  const popularGames = [
    "Clash of Clans",
    "Brawl Stars",
    "Mobile Legends",
    "Free Fire",
    "PUBG Mobile",
    "Roblox",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={cartCount} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-6">
          <HeroCarousel />
        </section>

        {/* Popular Games Quick Links */}
        <section className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold mb-4">Popular Games</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {popularGames.map((game) => (
              <button
                key={game}
                className="flex-shrink-0 px-6 py-3 rounded-full bg-card border hover:border-primary hover:bg-primary/5 transition-colors"
              >
                <span className="font-medium text-sm">{game}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
          <CategoryChips
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </section>

        {/* Featured Products */}
        <section className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold mb-6">Featured Deals</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={handleQuickView}
                onAddToCart={(p) => handleAddToCart(p, 1)}
              />
            ))}
          </div>
        </section>

        {/* All Products */}
        <section className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">All Products</h2>
            <p className="text-muted-foreground">{products.length} items</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products
              .filter((p) => selectedCategory === "All" || p.category === selectedCategory)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={handleQuickView}
                  onAddToCart={(p) => handleAddToCart(p, 1)}
                />
              ))}
          </div>
        </section>
      </main>

      <Footer />

      <QuickViewModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Index;
