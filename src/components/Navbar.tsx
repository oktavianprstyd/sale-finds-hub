import { Search, Heart, ShoppingBag, Menu, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Tag className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">BeliBekas</span>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                Beranda
              </a>
              <a href="#sale" className="text-sm font-medium text-accent hover:text-accent/80 transition-colors flex items-center gap-1">
                <Tag className="h-4 w-4" />
                Sale
              </a>
              <a href="#categories" className="text-sm font-medium hover:text-primary transition-colors">
                Kategori
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="default" size="sm" className="hidden md:flex">
              Masuk
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
