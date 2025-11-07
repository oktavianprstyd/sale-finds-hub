import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Tag, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Sale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  const saleProducts = products.filter(p => p.discount).sort((a, b) => (b.discount || 0) - (a.discount || 0));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="bg-sale-gradient py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                <Tag className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold text-white mb-2">Flash Sale</h1>
                <p className="text-white/90 text-lg">Diskon hingga 50%!</p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-white/20 backdrop-blur rounded-lg px-6 py-3">
              <Clock className="h-5 w-5 text-white" />
              <span className="text-white font-semibold">Berakhir dalam:</span>
              <div className="flex gap-2">
                <Badge className="bg-white text-primary font-bold text-lg px-3 py-1">
                  {String(timeLeft.hours).padStart(2, '0')}
                </Badge>
                <span className="text-white font-bold">:</span>
                <Badge className="bg-white text-primary font-bold text-lg px-3 py-1">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </Badge>
                <span className="text-white font-bold">:</span>
                <Badge className="bg-white text-primary font-bold text-lg px-3 py-1">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Semua Produk Sale</h2>
          <p className="text-muted-foreground">
            {saleProducts.length} produk dengan diskon spesial
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {saleProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <ProductCard {...product} isSale />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sale;
