import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Product } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Check, Info } from "lucide-react";
import { z } from "zod";

const buyNowSchema = z.object({
  userId: z.string().trim().min(1, "User ID is required"),
  zoneId: z.string().trim().optional(),
});

type BuyNowForm = z.infer<typeof buyNowSchema>;

const BuyNow = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string>("");
  const [selectedPayment, setSelectedPayment] = useState<string>("");
  const [formData, setFormData] = useState<BuyNowForm>({
    userId: "",
    zoneId: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof BuyNowForm, string>>>({});
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock variants for demonstration
  const variants = [
    { id: "1", name: "11 Diamonds (10 + 1 Bonus)", price: 29, image: "/placeholder.svg" },
    { id: "2", name: "22 Diamonds (20 + 2 Bonus)", price: 58, image: "/placeholder.svg" },
    { id: "3", name: "56 Diamonds (51 + 5 Bonus)", price: 145, image: "/placeholder.svg" },
    { id: "4", name: "112 Diamonds (102 + 10 Bonus)", price: 295, image: "/placeholder.svg" },
    { id: "5", name: "223 Diamonds (203 + 20 Bonus)", price: 595, image: "/placeholder.svg" },
  ];

  const paymentMethods = [
    { id: "wallet", name: "Wallet", note: "Must Login For This", icon: "💳" },
    { id: "esewa", name: "eSewa", note: "Scan to Pay", icon: "📱" },
    { id: "khalti", name: "Khalti Payment", note: "E-Wallet", icon: "💰" },
    { id: "imepay", name: "IME PAY", note: "Mobile Banking", icon: "🏦" },
  ];

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const foundProduct = data.find((p) => p.id === Number(productId));
        if (foundProduct) {
          setProduct(foundProduct);
          if (variants.length > 0) {
            setSelectedVariant(variants[0].id);
          }
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("Failed to load product:", err);
        navigate("/");
      });
  }, [productId, navigate]);

  const handleInputChange = (field: keyof BuyNowForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedVariant) {
      toast({
        title: "Please select a package",
        variant: "destructive",
      });
      return;
    }

    if (!selectedPayment) {
      toast({
        title: "Please select a payment method",
        variant: "destructive",
      });
      return;
    }

    try {
      const validatedData = buyNowSchema.parse(formData);
      setIsProcessing(true);

      // Simulate payment processing
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const selectedVariantData = variants.find((v) => v.id === selectedVariant);
      
      toast({
        title: "Order Placed Successfully!",
        description: `Your order for ${selectedVariantData?.name} has been confirmed. Check your email for details.`,
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof BuyNowForm, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof BuyNowForm] = err.message;
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

  const selectedVariantData = variants.find((v) => v.id === selectedVariant);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        {/* Product Header */}
        <Card className="p-6 mb-6">
          <div className="flex gap-4 items-start">
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold mb-2">{product.game}</h1>
              <div className="flex gap-2 items-center text-sm text-muted-foreground mb-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded">Instant</span>
                <span>Nepal</span>
              </div>
              <p className="text-xs text-destructive">
                All Purchases are NON-REFUNDABLE and NON-RETURNABLE.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            {product.title}. Pay conveniently using eSewa, Khalti, Imepay & Any Mobile Banking.
          </p>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Account Data */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded flex items-center justify-center font-bold">
                1
              </span>
              <h2 className="text-xl font-bold">Enter Your Account Data</h2>
              <Button type="button" variant="ghost" size="sm">
                <Info className="h-4 w-4 mr-1" />
                Guide
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="userId">User ID</Label>
                <Input
                  id="userId"
                  value={formData.userId}
                  onChange={(e) => handleInputChange("userId", e.target.value)}
                  placeholder="Enter User ID"
                  className={errors.userId ? "border-destructive" : ""}
                />
                {errors.userId && (
                  <p className="text-sm text-destructive mt-1">{errors.userId}</p>
                )}
              </div>
              <div>
                <Label htmlFor="zoneId">Zone ID</Label>
                <Input
                  id="zoneId"
                  value={formData.zoneId}
                  onChange={(e) => handleInputChange("zoneId", e.target.value)}
                  placeholder="Enter Zone ID"
                />
              </div>
            </div>
          </Card>

          {/* Step 2: Select Package */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded flex items-center justify-center font-bold">
                2
              </span>
              <h2 className="text-xl font-bold">Select the Amount You Want to Buy</h2>
            </div>
            <div className="mb-3">
              <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                <span className="text-primary">⚡️</span> TOPUP
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {variants.map((variant) => (
                <button
                  key={variant.id}
                  type="button"
                  onClick={() => setSelectedVariant(variant.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all hover:scale-105 ${
                    selectedVariant === variant.id
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <img 
                      src={variant.image} 
                      alt={variant.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-sm">{variant.name}</p>
                      <p className="text-primary font-bold">Rs {variant.price}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Step 3: Payment Method */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded flex items-center justify-center font-bold">
                3
              </span>
              <h2 className="text-xl font-bold">Select the Payment You Want to Use</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {paymentMethods.map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setSelectedPayment(method.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-all ${
                    selectedPayment === method.id
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{method.icon}</span>
                    <div>
                      <p className="font-semibold">{method.name}</p>
                      <p className="text-xs text-muted-foreground">{method.note}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Buy Now Button */}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isProcessing || !selectedVariant || !selectedPayment}
          >
            {isProcessing ? (
              <>Processing...</>
            ) : (
              <>
                <Check className="h-5 w-5 mr-2" />
                Buy Now! {selectedVariantData && `- Rs ${selectedVariantData.price}`}
              </>
            )}
          </Button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default BuyNow;
