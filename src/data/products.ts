import productPhone from "@/assets/product-phone.jpg";
import productBag from "@/assets/product-bag.jpg";
import productCamera from "@/assets/product-camera.jpg";
import productShoes from "@/assets/product-shoes.jpg";

export interface Product {
  id: string;
  image: string;
  title: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  location: string;
  condition: "Seperti Baru" | "Baik" | "Bekas";
  category: string;
  description: string;
  seller: {
    name: string;
    rating: number;
    verified: boolean;
  };
  views: number;
  posted: string;
}

export const products: Product[] = [
  {
    id: "1",
    image: productCamera,
    title: "Kamera DSLR Canon EOS 80D Body Only",
    brand: "Canon",
    price: 6500000,
    location: "Jakarta Pusat",
    condition: "Seperti Baru",
    category: "Elektronik",
    description: "Kamera DSLR Canon EOS 80D dalam kondisi sangat baik, jarang dipakai. Lengkap dengan box, charger, dan battery. Sensor 24.2MP APS-C CMOS, Dual Pixel CMOS AF, dan dapat merekam video Full HD 60fps.",
    seller: { name: "Toko Kamera Pro", rating: 4.8, verified: true },
    views: 234,
    posted: "2 hari lalu"
  },
  {
    id: "2",
    image: productPhone,
    title: "Samsung Galaxy S21 Ultra 5G",
    brand: "Samsung",
    price: 7200000,
    location: "Tangerang",
    condition: "Baik",
    category: "Elektronik",
    description: "Samsung Galaxy S21 Ultra 5G 256GB, warna Phantom Black. Kondisi fisik 90%, tidak ada cacat atau lecet. Baterai health 85%. Lengkap dengan charger original.",
    seller: { name: "Gadget Store", rating: 4.5, verified: true },
    views: 445,
    posted: "1 hari lalu"
  },
  {
    id: "3",
    image: productShoes,
    title: "Sepatu Running Adidas Ultraboost",
    brand: "Adidas",
    price: 1100000,
    location: "Bekasi",
    condition: "Seperti Baru",
    category: "Olahraga",
    description: "Sepatu running Adidas Ultraboost original, size 42. Baru dipakai 3x, kondisi seperti baru. Nyaman untuk lari jarak jauh dengan teknologi Boost cushioning.",
    seller: { name: "Sneakers Hub", rating: 4.9, verified: true },
    views: 178,
    posted: "3 hari lalu"
  },
  {
    id: "4",
    image: productBag,
    title: "Handbag Authentic Designer",
    brand: "Michael Kors",
    price: 1800000,
    location: "Jakarta Selatan",
    condition: "Baik",
    category: "Fashion",
    description: "Handbag Michael Kors authentic, pembelian dari USA. Kondisi masih bagus, ada sedikit bekas pemakaian normal. Material kulit berkualitas tinggi.",
    seller: { name: "Luxury Fashion", rating: 4.7, verified: true },
    views: 312,
    posted: "1 hari lalu"
  },
  {
    id: "5",
    image: productPhone,
    title: "iPad Pro 11 inch 2021 256GB",
    brand: "Apple",
    price: 9500000,
    location: "Depok",
    condition: "Seperti Baru",
    category: "Elektronik",
    description: "iPad Pro 11 inch 2021 dengan chip M1, 256GB storage. Kondisi mulus 99%, sudah dipasang tempered glass sejak awal. Termasuk Apple Pencil generasi 2.",
    seller: { name: "Apple Store ID", rating: 5.0, verified: true },
    views: 567,
    posted: "4 jam lalu"
  },
  {
    id: "6",
    image: productCamera,
    title: "Sony A7 III Full Frame",
    brand: "Sony",
    price: 18500000,
    location: "Bandung",
    condition: "Seperti Baru",
    category: "Elektronik",
    description: "Sony A7 III mirrorless full frame, shutter count rendah hanya 5000. Kondisi sempurna, lengkap dengan dus dan aksesoris. Sensor 24.2MP BSI CMOS, 4K video recording.",
    seller: { name: "Pro Camera", rating: 4.9, verified: true },
    views: 889,
    posted: "1 hari lalu"
  },
  {
    id: "7",
    image: productShoes,
    title: "Nike Air Jordan 1 Retro High",
    brand: "Nike",
    price: 2200000,
    location: "Semarang",
    condition: "Baik",
    category: "Olahraga",
    description: "Nike Air Jordan 1 Retro High OG, colorway Chicago. Size 43, kondisi 85% masih bagus. Original 100% with receipt.",
    seller: { name: "Sneakerhead ID", rating: 4.6, verified: false },
    views: 423,
    posted: "2 hari lalu"
  },
  {
    id: "8",
    image: productBag,
    title: "Tas Ransel Laptop Premium",
    brand: "Herschel",
    price: 650000,
    location: "Surabaya",
    condition: "Baik",
    category: "Fashion",
    description: "Tas ransel Herschel original dengan compartment laptop hingga 15 inch. Bahan berkualitas, waterproof. Kondisi 90%, bekas pemakaian pribadi.",
    seller: { name: "Bag Store", rating: 4.4, verified: false },
    views: 156,
    posted: "5 hari lalu"
  },
  {
    id: "9",
    image: productPhone,
    title: "iPhone 12 Pro Max 256GB",
    brand: "Apple",
    price: 8500000,
    originalPrice: 12000000,
    discount: 29,
    location: "Jakarta Selatan",
    condition: "Seperti Baru",
    category: "Elektronik",
    description: "iPhone 12 Pro Max 256GB, warna Pacific Blue. Battery health 92%, kondisi fisik 95%. Fullset dengan dus dan aksesoris original. iCloud sudah clear.",
    seller: { name: "iPhone Store", rating: 4.8, verified: true },
    views: 1024,
    posted: "6 jam lalu"
  },
  {
    id: "10",
    image: productBag,
    title: "Tas Kulit Premium Original",
    brand: "Coach",
    price: 1200000,
    originalPrice: 2500000,
    discount: 52,
    location: "Bandung",
    condition: "Baik",
    category: "Fashion",
    description: "Tas kulit Coach original dengan sertifikat. Kondisi bagus 85%, ada sedikit patina yang menambah karakter. Material kulit asli berkualitas tinggi.",
    seller: { name: "Designer Bags", rating: 4.6, verified: true },
    views: 678,
    posted: "1 hari lalu"
  },
  {
    id: "11",
    image: productCamera,
    title: "Kamera Vintage Film",
    brand: "Canon",
    price: 1500000,
    originalPrice: 2000000,
    discount: 25,
    location: "Yogyakarta",
    condition: "Baik",
    category: "Hobi",
    description: "Kamera film Canon AE-1 vintage, kondisi masih berfungsi dengan baik. Ideal untuk fotografi analog enthusiast. Termasuk lensa 50mm f/1.8.",
    seller: { name: "Vintage Cam", rating: 4.7, verified: false },
    views: 234,
    posted: "3 hari lalu"
  },
  {
    id: "12",
    image: productShoes,
    title: "Sneakers Limited Edition",
    brand: "Nike",
    price: 950000,
    originalPrice: 1500000,
    discount: 37,
    location: "Surabaya",
    condition: "Seperti Baru",
    category: "Olahraga",
    description: "Nike sneakers limited edition, size 42. Hanya dipakai 2x untuk photo shoot. Kondisi 98% seperti baru. Comes with original box and tags.",
    seller: { name: "Limited Kicks", rating: 4.9, verified: true },
    views: 891,
    posted: "12 jam lalu"
  },
  {
    id: "13",
    image: productPhone,
    title: "Xiaomi Mi 11 Ultra",
    brand: "Xiaomi",
    price: 5500000,
    location: "Jakarta Barat",
    condition: "Baik",
    category: "Elektronik",
    description: "Xiaomi Mi 11 Ultra 256GB, kondisi fisik dan fungsi 90%. Lengkap dengan charger 67W original. Kamera flagship dengan sensor Samsung GN2 50MP.",
    seller: { name: "Mi Store", rating: 4.5, verified: true },
    views: 345,
    posted: "2 hari lalu"
  },
  {
    id: "14",
    image: productBag,
    title: "Tas Selempang Kanvas",
    brand: "Herschel",
    price: 450000,
    location: "Bogor",
    condition: "Baik",
    category: "Fashion",
    description: "Tas selempang Herschel model classic, bahan kanvas tahan lama. Kondisi 85%, bekas pemakaian normal. Cocok untuk daily use.",
    seller: { name: "Daily Bags", rating: 4.3, verified: false },
    views: 123,
    posted: "4 hari lalu"
  },
  {
    id: "15",
    image: productCamera,
    title: "Fujifilm X-T4 Mirrorless",
    brand: "Fujifilm",
    price: 15500000,
    location: "Jakarta Utara",
    condition: "Seperti Baru",
    category: "Elektronik",
    description: "Fujifilm X-T4 body only, shutter count 3000. In-body stabilization 5-axis, 4K 60fps video. Kondisi mulus seperti baru, fullset dengan box.",
    seller: { name: "Fuji Store", rating: 4.8, verified: true },
    views: 456,
    posted: "1 hari lalu"
  },
  {
    id: "16",
    image: productShoes,
    title: "Sepatu Futsal Specs Accelerator",
    brand: "Specs",
    price: 350000,
    location: "Malang",
    condition: "Baik",
    category: "Olahraga",
    description: "Sepatu futsal Specs Accelerator size 42, kondisi 80%. Masih layak pakai, sol masih bagus. Cocok untuk latihan atau main santai.",
    seller: { name: "Sports Gear", rating: 4.2, verified: false },
    views: 89,
    posted: "6 hari lalu"
  }
];

export const categories = [
  { name: "Elektronik", icon: "Smartphone", count: "2.4k+" },
  { name: "Fashion", icon: "ShoppingBag", count: "3.8k+" },
  { name: "Furniture", icon: "Sofa", count: "1.2k+" },
  { name: "Kendaraan", icon: "Car", count: "890+" },
  { name: "Hobi", icon: "Gamepad2", count: "1.5k+" },
  { name: "Rumah Tangga", icon: "Home", count: "2.1k+" },
  { name: "Olahraga", icon: "Dumbbell", count: "760+" },
  { name: "Lainnya", icon: "MoreHorizontal", count: "950+" },
];
