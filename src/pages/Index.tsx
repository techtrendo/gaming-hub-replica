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
  const [selectedGame, setSelectedGame] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  const categories = ["Top Up", "Gift Card", "Subscription", "Voucher"];
  
  // Filter products based on selected game and category
  const filteredProducts = products.filter((p) => {
    const matchesGame = selectedGame === "All" || p.game === selectedGame;
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    return matchesGame && matchesCategory;
  });
  
  const featuredProducts = filteredProducts.filter((p) => p.featured).slice(0, 8);

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
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
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-6">
          <HeroCarousel />
        </section>

        {/* Popular Games Quick Links */}
        <section className="container mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold mb-4">Popular Games</h2>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedGame("All")}
              className={`flex-shrink-0 px-6 py-3 rounded-full border transition-colors ${
                selectedGame === "All"
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:border-primary hover:bg-primary/5"
              }`}
            >
              <span className="font-medium text-sm">All Games</span>
            </button>
            {popularGames.map((game) => (
              <button
                key={game}
                onClick={() => setSelectedGame(game)}
                className={`flex-shrink-0 px-6 py-3 rounded-full border transition-colors ${
                  selectedGame === game
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border hover:border-primary hover:bg-primary/5"
                }`}
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
                showPrice={false}
              />
            ))}
          </div>
        </section>

        {/* All Products */}
        <section className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">All Products</h2>
            <p className="text-muted-foreground">{filteredProducts.length} items</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={handleQuickView}
                onAddToCart={(p) => handleAddToCart(p, 1)}
                showPrice={false}
              />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No products found</p>
              <p className="text-sm text-muted-foreground mt-2">Try selecting different filters</p>
            </div>
          )}
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
