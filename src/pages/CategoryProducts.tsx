import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const CategoryProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  const filteredProducts = products.filter(
    p => p.category.toLowerCase() === category?.toLowerCase()
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 capitalize">{category}</h1>
          <p className="text-muted-foreground">
            Ditemukan {filteredProducts.length} produk dalam kategori ini
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              Belum ada produk dalam kategori ini
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
