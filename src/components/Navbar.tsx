import { Search, Menu, X, Heart, ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <button onClick={() => navigate("/")} className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent whitespace-nowrap">
              BeliBekas
            </button>
            
            <form onSubmit={handleSearch} className="hidden md:flex relative flex-1 max-w-md">
              <Input
                type="text"
                placeholder="Cari produk, merek, atau kategori..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                type="submit"
                size="icon"
                variant="ghost"
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => navigate("/search")}>
              Jelajah
            </Button>
            <Button variant="ghost" size="sm" onClick={() => navigate("/sale")}>
              Flash Sale
            </Button>
            
            {user ? (
              <>
                <Button variant="ghost" size="icon" onClick={() => navigate("/wishlist")}>
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => navigate("/cart")} className="relative">
                  <ShoppingCart className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate("/wishlist")}>
                      <Heart className="mr-2 h-4 w-4" />
                      Wishlist
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate("/cart")}>
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Keranjang
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={signOut}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button onClick={() => navigate("/auth")}>Login</Button>
            )}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t py-4">
          <form onSubmit={handleSearch} className="mb-4 px-4 flex gap-2">
            <Input
              type="text"
              placeholder="Cari produk..."
              className="flex-1"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button type="submit" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </form>
          <div className="space-y-2 px-4">
            <Button variant="ghost" className="w-full justify-start" onClick={() => { navigate("/search"); setIsMenuOpen(false); }}>
              Jelajah
            </Button>
            <Button variant="ghost" className="w-full justify-start" onClick={() => { navigate("/sale"); setIsMenuOpen(false); }}>
              Flash Sale
            </Button>
            {user ? (
              <>
                <Button variant="ghost" className="w-full justify-start" onClick={() => { navigate("/wishlist"); setIsMenuOpen(false); }}>
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => { navigate("/cart"); setIsMenuOpen(false); }}>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Keranjang
                </Button>
                <Button variant="ghost" className="w-full justify-start" onClick={() => { signOut(); setIsMenuOpen(false); }}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <Button className="w-full" onClick={() => { navigate("/auth"); setIsMenuOpen(false); }}>
                Login
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
