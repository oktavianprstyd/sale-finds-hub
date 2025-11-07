import { Smartphone, ShoppingBag, Sofa, Car, Gamepad2, Home, Dumbbell, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CategoryGrid = () => {
  const navigate = useNavigate();
  
  const categories = [
    { name: "Elektronik", icon: Smartphone, count: "2.4k+" },
    { name: "Fashion", icon: ShoppingBag, count: "3.8k+" },
    { name: "Furniture", icon: Sofa, count: "1.2k+" },
    { name: "Kendaraan", icon: Car, count: "890+" },
    { name: "Hobi", icon: Gamepad2, count: "1.5k+" },
    { name: "Rumah Tangga", icon: Home, count: "2.1k+" },
    { name: "Olahraga", icon: Dumbbell, count: "760+" },
    { name: "Lainnya", icon: MoreHorizontal, count: "950+" },
  ];

  return (
    <section id="categories" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold">Jelajahi Kategori</h2>
          <p className="text-muted-foreground">
            Temukan produk dari berbagai kategori pilihan
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
                className="group flex flex-col items-center gap-3 rounded-lg border bg-card p-6 shadow-card transition-all hover:shadow-card-hover hover:border-primary animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
