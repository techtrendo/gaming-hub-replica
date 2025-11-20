import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart, ArrowLeft, Check } from "lucide-react";
import { z } from "zod";

const checkoutSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number too long"),
  playerId: z.string().trim().max(100, "Player ID too long").optional(),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

const Checkout = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState<CheckoutForm>({
    fullName: "",
    email: "",
    phone: "",
    playerId: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutForm, string>>>({});

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const foundProduct = data.find((p) => p.id === Number(productId));
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("Failed to load product:", err);
        navigate("/");
      });
  }, [productId, navigate]);

  const handleInputChange = (field: keyof CheckoutForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(99, prev + delta)));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = checkoutSchema.parse(formData);
      setIsProcessing(true);

      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast({
        title: "Order Placed Successfully!",
        description: `Your order for ${quantity}x ${product?.title} has been confirmed. Check your email for details.`,
      });

      // Redirect to home after success
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof CheckoutForm, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof CheckoutForm] = err.message;
          }
        });
        setErrors(newErrors);
      }
      setIsProcessing(false);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">Loading...</p>
      </div>
    );
  }

  const subtotal = product.price * quantity;
  const discount = product.oldPrice ? (product.oldPrice - product.price) * quantity : 0;
  const total = subtotal;

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartCount={0} />

      <main className="flex-1 bg-muted/30">
        {/* Breadcrumbs */}
        <div className="border-b bg-background">
          <div className="container mx-auto px-4 py-3">
            <nav className="text-sm text-muted-foreground flex items-center gap-2">
              <a href="/" className="hover:text-primary">Home</a>
              <span>/</span>
              <a href="/shop" className="hover:text-primary">Shop</a>
              <span>/</span>
              <span className="text-foreground">Checkout</span>
            </nav>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Form */}
            <div className="lg:col-span-2">
              <Card className="p-6">
                <h1 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <ShoppingCart className="h-6 w-6" />
                  Checkout
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        placeholder="Enter your full name"
                        className={errors.fullName ? "border-destructive" : ""}
                      />
                      {errors.fullName && (
                        <p className="text-sm text-destructive mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your@email.com"
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="9848995198"
                        className={errors.phone ? "border-destructive" : ""}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {product.category === "Top Up" && (
                      <div>
                        <Label htmlFor="playerId">Player ID / Game Username</Label>
                        <Input
                          id="playerId"
                          value={formData.playerId}
                          onChange={(e) => handleInputChange("playerId", e.target.value)}
                          placeholder="Enter your game player ID"
                          className={errors.playerId ? "border-destructive" : ""}
                        />
                        {errors.playerId && (
                          <p className="text-sm text-destructive mt-1">{errors.playerId}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">
                          We'll use this to deliver the {product.game} items to your account
                        </p>
                      </div>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>Processing...</>
                    ) : (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        Place Order - Rs {total.toFixed(2)}
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                <div className="space-y-4">
                  {/* Product Info */}
                  <div className="flex gap-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm line-clamp-2">{product.title}</h3>
                      <p className="text-sm text-muted-foreground">{product.game}</p>
                      <p className="text-sm font-semibold text-primary mt-1">
                        Rs {product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  {/* Quantity Selector */}
                  <div className="flex items-center justify-between">
                    <Label>Quantity</Label>
                    <div className="flex items-center gap-2">
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(-1)}
                        disabled={quantity <= 1}
                      >
                        -
                      </Button>
                      <span className="w-12 text-center font-semibold">{quantity}</span>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(1)}
                        disabled={quantity >= 99}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Price Breakdown */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>Rs {subtotal.toFixed(2)}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Discount</span>
                        <span className="text-green-600">-Rs {discount.toFixed(2)}</span>
                      </div>
                    )}
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-primary">Rs {total.toFixed(2)}</span>
                    </div>
                  </div>

                  {product.oldPrice && (
                    <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-3 text-sm">
                      <p className="text-green-700 dark:text-green-300 font-semibold">
                        You save Rs {discount.toFixed(2)}!
                      </p>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
