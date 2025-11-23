import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

export interface Product {
  id: number;
  title: string;
  game: string;
  category: string;
  price: number;
  oldPrice: number;
  currency: string;
  image: string;
  tag: string;
  provider: string;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
  onAddToCart?: (product: Product) => void;
  showPrice?: boolean;
}

export const ProductCard = ({ product, onQuickView, onAddToCart, showPrice = true }: ProductCardProps) => {
  const navigate = useNavigate();
  const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  return (
    <Card 
      className="group relative overflow-hidden hover-lift hover-border border-2 border-transparent cursor-pointer"
      onClick={() => navigate(`/buy/${product.id}`)}
    >
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={`${product.title} - ${product.game}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
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

          {/* Hover Actions */}
          <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-2">
            <Button
              size="sm"
              variant="secondary"
              onClick={(e) => {
                e.stopPropagation();
                onQuickView?.(product);
              }}
              aria-label="Quick view product"
              className="rounded-full p-3"
            >
              <Eye className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-2">
          <Badge variant="outline" className="text-xs">
            {product.tag}
          </Badge>
          <h3 className="font-semibold text-sm line-clamp-1" title={product.title}>
            {product.title}
          </h3>
          <p className="text-xs text-muted-foreground line-clamp-1" title={product.game}>
            {product.game}
          </p>
          
          {showPrice && (
            <div className="flex items-baseline gap-2 pt-1">
              <span className="text-lg font-bold text-primary">
                {product.currency} {product.price}
              </span>
              {product.oldPrice > product.price && (
                <span className="text-sm text-muted-foreground line-through">
                  {product.currency} {product.oldPrice}
                </span>
              )}
            </div>
          )}

          <Button 
            className="w-full mt-2" 
            size="sm"
            variant="ghost"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView?.(product);
            }}
            aria-label="Quick view product"
          >
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
