import { Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

const SaleSection = () => {
  const saleProducts = products.filter(p => p.discount);

  return (
    <section id="sale" className="bg-secondary/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sale-gradient">
              <Tag className="h-6 w-6 text-accent-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Flash Sale</h2>
              <p className="text-muted-foreground">
                Diskon hingga 50% - Buruan sebelum kehabisan!
              </p>
            </div>
          </div>
          <Button variant="sale" className="hidden md:flex">
            Lihat Semua
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {saleProducts.slice(0, 4).map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...product} isSale />
            </div>
          ))}
        </div>

        <Button variant="sale" className="mt-8 w-full md:hidden">
          Lihat Semua Produk Sale
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default SaleSection;
