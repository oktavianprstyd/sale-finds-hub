import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  const popularBrands = ["Samsung", "Apple", "Nike", "Sony", "Canon", "Adidas"];

  return (
    <section className="relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Temukan Barang
            <span className="block bg-primary-gradient bg-clip-text text-transparent">
              Bekas Berkualitas
            </span>
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Jual beli barang bekas dengan aman. Temukan produk favorit dari merek ternama dengan harga terbaik.
          </p>

          <div className="mb-6 flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Cari produk atau merek..."
                className="h-12 pl-10 pr-4 shadow-lg"
              />
            </div>
            <Button size="lg" className="h-12 px-8">
              Cari
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-muted-foreground">Merek populer:</span>
            {popularBrands.map((brand) => (
              <Button
                key={brand}
                variant="secondary"
                size="sm"
                className="h-8 text-xs"
              >
                {brand}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
