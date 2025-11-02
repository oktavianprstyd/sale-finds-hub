import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SaleSection from "@/components/SaleSection";
import CategoryGrid from "@/components/CategoryGrid";
import FeaturedProducts from "@/components/FeaturedProducts";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <SaleSection />
      <CategoryGrid />
      <FeaturedProducts />
      
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 BeliBekas. Platform jual beli barang bekas terpercaya.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
