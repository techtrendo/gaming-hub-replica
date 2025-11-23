import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CategoryChips } from "@/components/CategoryChips";
import { ProductCard, Product } from "@/components/ProductCard";
import { QuickViewModal } from "@/components/QuickViewModal";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.game.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "featured":
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchQuery, sortBy]);

  const categories = ["Top Up", "Gift Card", "Subscription", "Voucher"];

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearchChange={setSearchQuery} />

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="border-b bg-muted/30">
          <div className="container mx-auto px-4 py-3">
            <nav className="text-sm text-muted-foreground">
              <a href="/" className="hover:text-primary">Home</a>
              <span className="mx-2">/</span>
              <span className="text-foreground">Shop</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6">Shop All Products</h1>

          {/* Filters & Sort */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <CategoryChips
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Results Count */}
          <div className="mb-4 text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={handleQuickView}
                onAddToCart={(p) => handleAddToCart(p, 1)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No products found</p>
              <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters or search query</p>
            </div>
          )}
        </div>
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

export default Shop;
