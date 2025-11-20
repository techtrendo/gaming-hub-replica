import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import type { Product } from "./ProductCard";
import { useNavigate } from "react-router-dom";

interface QuickViewModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onAddToCart?: (product: Product, quantity: number) => void;
}

export const QuickViewModal = ({ product, open, onClose, onAddToCart }: QuickViewModalProps) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);
  const totalPrice = product.price * quantity;

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(99, prev + delta)));
  };

  const handleAddToCart = () => {
    onAddToCart?.(product, quantity);
    onClose();
    setQuantity(1);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="sr-only">Product Details</DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={`${product.title} - ${product.game}`}
              className="w-full h-full object-cover"
            />
            {product.featured && (
              <Badge className="absolute top-2 left-2 bg-warning-orange text-white">
                Special Offer
              </Badge>
            )}
            {discountPercent > 0 && (
              <Badge className="absolute top-2 right-2 bg-success-green text-white">
                -{discountPercent}%
              </Badge>
            )}
          </div>

          {/* Product Details */}
          <div className="flex flex-col space-y-4">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.tag}
              </Badge>
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="text-muted-foreground mt-1">{product.game}</p>
              <p className="text-sm text-muted-foreground">by {product.provider}</p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">
                {product.currency} {product.price}
              </span>
              {product.oldPrice > product.price && (
                <span className="text-lg text-muted-foreground line-through">
                  {product.currency} {product.oldPrice}
                </span>
              )}
            </div>

            {discountPercent > 0 && (
              <p className="text-sm text-success-green font-medium">
                Save {product.currency} {product.oldPrice - product.price} ({discountPercent}% off)
              </p>
            )}

            {/* Quantity Selector */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 99}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Total:</span>
                <span className="text-2xl font-bold text-primary">
                  {product.currency} {totalPrice}
                </span>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  className="flex-1" 
                  variant="outline"
                  onClick={() => {
                    navigate(`/checkout/${product.id}`);
                    onClose();
                  }}
                >
                  Buy Now
                </Button>
              </div>
            </div>

            <div className="text-sm text-muted-foreground space-y-1 pt-2 border-t">
              <p>✓ Instant delivery after payment</p>
              <p>✓ Secure payment processing</p>
              <p>✓ 24/7 customer support</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
