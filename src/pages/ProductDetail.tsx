import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Share2, MapPin, Eye, Clock, ShieldCheck, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useState, useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const product = products.find(p => p.id === id);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user && id) {
      checkWishlist();
    }
  }, [user, id]);

  const checkWishlist = async () => {
    const { data } = await supabase
      .from("wishlist")
      .select("id")
      .eq("user_id", user!.id)
      .eq("product_id", id!)
      .maybeSingle();
    
    setIsInWishlist(!!data);
  };

  const toggleWishlist = async () => {
    if (!user) {
      toast.error("Silakan login terlebih dahulu");
      navigate("/auth");
      return;
    }

    setIsLoading(true);

    if (isInWishlist) {
      const { error } = await supabase
        .from("wishlist")
        .delete()
        .eq("user_id", user.id)
        .eq("product_id", id!);
      
      if (!error) {
        setIsInWishlist(false);
        toast.success("Dihapus dari wishlist");
      }
    } else {
      const { error } = await supabase
        .from("wishlist")
        .insert({ user_id: user.id, product_id: id! });
      
      if (!error) {
        setIsInWishlist(true);
        toast.success("Ditambahkan ke wishlist");
      }
    }

    setIsLoading(false);
  };

  const addToCart = async () => {
    if (!user) {
      toast.error("Silakan login terlebih dahulu");
      navigate("/auth");
      return;
    }

    setIsLoading(true);

    const { data: existing } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", user.id)
      .eq("product_id", id!)
      .maybeSingle();

    if (existing) {
      const { error } = await supabase
        .from("cart")
        .update({ quantity: existing.quantity + 1 })
        .eq("id", existing.id);
      
      if (!error) {
        toast.success("Jumlah produk di keranjang diperbarui");
      }
    } else {
      const { error } = await supabase
        .from("cart")
        .insert({ user_id: user.id, product_id: id!, quantity: 1 });
      
      if (!error) {
        toast.success("Ditambahkan ke keranjang");
      }
    }

    setIsLoading(false);
  };

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
          <Button onClick={() => navigate("/")}>Kembali ke Beranda</Button>
        </div>
      </div>
    );
  }

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

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-cover"
              />
              {product.discount && (
                <Badge className="absolute left-4 top-4 bg-sale-gradient font-bold text-lg">
                  -{product.discount}%
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-center gap-2">
                <Badge variant="secondary">{product.category}</Badge>
                <Badge className="bg-primary/10 text-primary">{product.brand}</Badge>
              </div>
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {product.views} dilihat
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {product.posted}
                </div>
              </div>
            </div>

            <Separator />

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold">
                  Rp {product.price.toLocaleString("id-ID")}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    Rp {product.originalPrice.toLocaleString("id-ID")}
                  </span>
                )}
              </div>
              {product.discount && (
                <p className="text-success font-semibold">
                  Hemat Rp {(product.originalPrice! - product.price).toLocaleString("id-ID")} ({product.discount}%)
                </p>
              )}
            </div>

            <Separator />

            {/* Product Details */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Detail Produk</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-sm text-muted-foreground">Kondisi</p>
                  <p className="font-medium">{product.condition}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Merek</p>
                  <p className="font-medium">{product.brand}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Kategori</p>
                  <p className="font-medium">{product.category}</p>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <p className="font-medium">{product.location}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Deskripsi</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Seller Info */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Penjual</h3>
              <div className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{product.seller.name}</p>
                    {product.seller.verified && (
                      <ShieldCheck className="h-4 w-4 text-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Rating: {product.seller.rating} ⭐
                  </p>
                </div>
                <Button variant="outline">Lihat Profil</Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <Button className="flex-1" size="lg" onClick={addToCart} disabled={isLoading}>
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Tambah ke Keranjang
                </Button>
                <Button variant="outline" size="lg" onClick={toggleWishlist} disabled={isLoading}>
                  <Heart className={`h-5 w-5 ${isInWishlist ? "fill-primary text-primary" : ""}`} />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <Button className="w-full" size="lg" variant="secondary">
                Hubungi Penjual
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
