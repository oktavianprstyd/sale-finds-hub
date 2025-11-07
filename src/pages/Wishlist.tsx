import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { products } from "@/data/products";
import { Loader2, Heart } from "lucide-react";

const Wishlist = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [wishlistIds, setWishlistIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchWishlist();
    }
  }, [user]);

  const fetchWishlist = async () => {
    const { data, error } = await supabase
      .from("wishlist")
      .select("product_id")
      .eq("user_id", user!.id);

    if (!error && data) {
      setWishlistIds(data.map(item => item.product_id));
    }
    setLoading(false);
  };

  const wishlistProducts = products.filter(p => wishlistIds.includes(p.id));

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Wishlist Saya</h1>
          </div>
          <p className="text-muted-foreground">
            {wishlistProducts.length} produk yang Anda simpan
          </p>
        </div>

        {wishlistProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {wishlistProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              Wishlist Anda masih kosong
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Simpan produk favorit Anda untuk melihatnya nanti
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
