import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Search = () => {
  const [searchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  
  const [sortBy, setSortBy] = useState("newest");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 20000000]);

  const brands = ["all", ...Array.from(new Set(products.map(p => p.brand)))];
  const conditions = ["all", "Seperti Baru", "Baik", "Bekas"];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(p => {
      const matchesSearch = queryParam === "" || 
        p.title.toLowerCase().includes(queryParam.toLowerCase()) ||
        p.brand.toLowerCase().includes(queryParam.toLowerCase()) ||
        p.category.toLowerCase().includes(queryParam.toLowerCase());
      
      const matchesBrand = selectedBrand === "all" || p.brand === selectedBrand;
      const matchesCondition = selectedCondition === "all" || p.condition === selectedCondition;
      const matchesPrice = p.price >= priceRange[0] && p.price <= priceRange[1];
      
      return matchesSearch && matchesBrand && matchesCondition && matchesPrice;
    });

    // Sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "discount":
        filtered.sort((a, b) => (b.discount || 0) - (a.discount || 0));
        break;
      case "newest":
      default:
        // Already in default order
        break;
    }

    return filtered;
  }, [queryParam, sortBy, selectedBrand, selectedCondition, priceRange]);

  const resetFilters = () => {
    setSortBy("newest");
    setSelectedBrand("all");
    setSelectedCondition("all");
    setPriceRange([0, 20000000]);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">
            {queryParam ? `Hasil Pencarian: "${queryParam}"` : "Semua Produk"}
          </h1>
          <p className="text-muted-foreground">
            Ditemukan {filteredProducts.length} produk
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-lg border bg-card p-4 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Filter</h3>
                <Button variant="ghost" size="sm" onClick={resetFilters}>
                  <X className="h-4 w-4 mr-1" />
                  Reset
                </Button>
              </div>

              <div className="space-y-2">
                <Label>Urutkan</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Terbaru</SelectItem>
                    <SelectItem value="price-low">Harga Terendah</SelectItem>
                    <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                    <SelectItem value="discount">Diskon Terbesar</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Merek</Label>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {brands.map(brand => (
                      <SelectItem key={brand} value={brand}>
                        {brand === "all" ? "Semua Merek" : brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Kondisi</Label>
                <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {conditions.map(condition => (
                      <SelectItem key={condition} value={condition}>
                        {condition === "all" ? "Semua Kondisi" : condition}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>Rentang Harga</Label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={20000000}
                  step={100000}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Rp {priceRange[0].toLocaleString("id-ID")}</span>
                  <span>Rp {priceRange[1].toLocaleString("id-ID")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Tidak ada produk yang sesuai dengan filter
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
