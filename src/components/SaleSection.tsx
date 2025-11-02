import { Tag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";
import productPhone from "@/assets/product-phone.jpg";
import productBag from "@/assets/product-bag.jpg";
import productCamera from "@/assets/product-camera.jpg";
import productShoes from "@/assets/product-shoes.jpg";

const SaleSection = () => {
  const saleProducts = [
    {
      image: productPhone,
      title: "iPhone 12 Pro Max 256GB",
      brand: "Apple",
      price: 8500000,
      originalPrice: 12000000,
      discount: 29,
      location: "Jakarta Selatan",
      condition: "Seperti Baru" as const,
    },
    {
      image: productBag,
      title: "Tas Kulit Premium Original",
      brand: "Coach",
      price: 1200000,
      originalPrice: 2500000,
      discount: 52,
      location: "Bandung",
      condition: "Baik" as const,
    },
    {
      image: productCamera,
      title: "Kamera Vintage Film",
      brand: "Canon",
      price: 1500000,
      originalPrice: 2000000,
      discount: 25,
      location: "Yogyakarta",
      condition: "Baik" as const,
    },
    {
      image: productShoes,
      title: "Sneakers Limited Edition",
      brand: "Nike",
      price: 950000,
      originalPrice: 1500000,
      discount: 37,
      location: "Surabaya",
      condition: "Seperti Baru" as const,
    },
  ];

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
          {saleProducts.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
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
