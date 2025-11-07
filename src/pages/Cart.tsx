import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { toast } from "sonner";

interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
}

const Cart = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      fetchCart();
    }
  }, [user]);

  const fetchCart = async () => {
    const { data, error } = await supabase
      .from("cart")
      .select("*")
      .eq("user_id", user!.id);

    if (!error && data) {
      setCartItems(data);
    }
    setLoading(false);
  };

  const updateQuantity = async (cartId: string, newQuantity: number) => {
    if (newQuantity < 1) return;

    const { error } = await supabase
      .from("cart")
      .update({ quantity: newQuantity })
      .eq("id", cartId);

    if (!error) {
      setCartItems(items =>
        items.map(item => item.id === cartId ? { ...item, quantity: newQuantity } : item)
      );
    }
  };

  const removeItem = async (cartId: string) => {
    const { error } = await supabase
      .from("cart")
      .delete()
      .eq("id", cartId);

    if (!error) {
      setCartItems(items => items.filter(item => item.id !== cartId));
      toast.success("Produk dihapus dari keranjang");
    }
  };

  const cartProducts = cartItems.map(item => ({
    ...products.find(p => p.id === item.product_id)!,
    cartId: item.id,
    quantity: item.quantity,
  }));

  const totalPrice = cartProducts.reduce((sum, item) => sum + (item.price * item.quantity), 0);

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
            <ShoppingCart className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">Keranjang Belanja</h1>
          </div>
          <p className="text-muted-foreground">
            {cartProducts.length} produk dalam keranjang
          </p>
        </div>

        {cartProducts.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-4">
              {cartProducts.map((product) => (
                <div key={product.cartId} className="flex gap-4 rounded-lg border bg-card p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-24 w-24 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{product.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>
                    <p className="font-bold text-lg">
                      Rp {product.price.toLocaleString("id-ID")}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(product.cartId)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                    <div className="flex items-center gap-2 border rounded">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(product.cartId, product.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{product.quantity}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(product.cartId, product.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="rounded-lg border bg-card p-6 sticky top-4">
                <h3 className="font-semibold text-lg mb-4">Ringkasan Belanja</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>Rp {totalPrice.toLocaleString("id-ID")}</span>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              Keranjang belanja Anda kosong
            </p>
            <p className="text-sm text-muted-foreground mt-2 mb-4">
              Yuk mulai belanja produk favorit Anda!
            </p>
            <Button onClick={() => navigate("/")}>
              Mulai Belanja
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
