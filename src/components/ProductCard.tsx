import { Heart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  location: string;
  condition: "Seperti Baru" | "Baik" | "Bekas";
  isSale?: boolean;
}

const ProductCard = ({
  image,
  title,
  brand,
  price,
  originalPrice,
  discount,
  location,
  condition,
  isSale,
}: ProductCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg border bg-card shadow-card transition-all hover:shadow-card-hover">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {discount && (
          <Badge className="absolute left-2 top-2 bg-sale-gradient font-bold">
            -{discount}%
          </Badge>
        )}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 bg-background/80 backdrop-blur hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-primary">{brand}</span>
          <Badge variant="secondary" className="text-xs">
            {condition}
          </Badge>
        </div>

        <h3 className="mb-2 line-clamp-2 text-sm font-semibold">{title}</h3>

        <div className="mb-3 flex items-baseline gap-2">
          <span className="text-lg font-bold">
            Rp {price.toLocaleString("id-ID")}
          </span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              Rp {originalPrice.toLocaleString("id-ID")}
            </span>
          )}
        </div>

        <div className="flex items-center text-xs text-muted-foreground">
          <MapPin className="mr-1 h-3 w-3" />
          {location}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
