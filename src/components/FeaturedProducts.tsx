import ProductCard from "./ProductCard";
import productPhone from "@/assets/product-phone.jpg";
import productBag from "@/assets/product-bag.jpg";
import productCamera from "@/assets/product-camera.jpg";
import productShoes from "@/assets/product-shoes.jpg";

const FeaturedProducts = () => {
  const products = [
    {
      image: productCamera,
      title: "Kamera DSLR Canon EOS 80D Body Only",
      brand: "Canon",
      price: 6500000,
      location: "Jakarta Pusat",
      condition: "Seperti Baru" as const,
    },
    {
      image: productPhone,
      title: "Samsung Galaxy S21 Ultra 5G",
      brand: "Samsung",
      price: 7200000,
      location: "Tangerang",
      condition: "Baik" as const,
    },
    {
      image: productShoes,
      title: "Sepatu Running Adidas Ultraboost",
      brand: "Adidas",
      price: 1100000,
      location: "Bekasi",
      condition: "Seperti Baru" as const,
    },
    {
      image: productBag,
      title: "Handbag Authentic Designer",
      brand: "Michael Kors",
      price: 1800000,
      location: "Jakarta Selatan",
      condition: "Baik" as const,
    },
    {
      image: productPhone,
      title: "iPad Pro 11 inch 2021 256GB",
      brand: "Apple",
      price: 9500000,
      location: "Depok",
      condition: "Seperti Baru" as const,
    },
    {
      image: productCamera,
      title: "Sony A7 III Full Frame",
      brand: "Sony",
      price: 18500000,
      location: "Bandung",
      condition: "Seperti Baru" as const,
    },
    {
      image: productShoes,
      title: "Nike Air Jordan 1 Retro High",
      brand: "Nike",
      price: 2200000,
      location: "Semarang",
      condition: "Baik" as const,
    },
    {
      image: productBag,
      title: "Tas Ransel Laptop Premium",
      brand: "Herschel",
      price: 650000,
      location: "Surabaya",
      condition: "Baik" as const,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="mb-2 text-3xl font-bold">Produk Pilihan</h2>
          <p className="text-muted-foreground">
            Rekomendasi produk berkualitas dari berbagai merek ternama
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {products.map((product, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
