import { ShoppingCart } from "lucide-react";

type ProductItem = {
    id: number;
    title: string;
    image: string;
    price: number;
    oldPrice?: number;
    category: string;
    seller: string;
    description: string;
};

export default function FeaturedProducts() {
    const products: ProductItem[] = [
        {
            id: 1,
            title: "MacBook Pro 16'' M3 Max",
            image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
            price: 3499,
            oldPrice: 3999,
            category: "Electronics",
            seller: "Tech Store Pro",
            description: "High-performance laptop with the M3 Max chip, ideal for professionals.",
        },
        {
            id: 2,
            title: "Dyson Supersonic Hair Dryer",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1zgNtJSm6KugpahtdoYCwn5ajNT9umfKC-Q&s",
            price: 429,
            oldPrice: 499,
            category: "Beauty & Personal Care",
            seller: "Dyson Official",
            description: "Powerful fast-drying hair dryer with intelligent heat control and premium design.",
        }
    ];

    return (
        <section className="py-16 px-6">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    Featured Products
                </h2>

                <button
                    className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition flex items-center gap-2 bg-white"
                >
                    View Marketplace →
                </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 rounded-xl bg-white shadow-sm border flex flex-col h-full"
                    >
                        <div className="relative h-60 bg-gray-100 rounded-lg overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="object-cover w-full h-full"
                            />

                            <span className="absolute top-3 left-3 bg-black text-white px-3 py-1 rounded-full text-xs shadow">
                                Buy Now
                            </span>
                        </div>

                        <div className="mt-4 flex items-center justify-between text-xs text-gray-600">
                            <span className="bg-gray-100 px-2 py-1 rounded-full">
                                {item.category}
                            </span>
                            <span className="ml-2">by {item.seller}</span>
                        </div>

                        {/* TITLE */}
                        <h3 className="font-semibold text-lg mt-2">{item.title}</h3>

                        {/* DESCRIPTION */}
                        <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                            {item.description}
                        </p>

                        <div className="mt-4">
                            <p className="text-gray-600 text-sm">Price</p>
                            <p className="text-2xl font-bold">${item.price.toLocaleString()}</p>

                            {item.oldPrice && (
                                <div className="flex justify-between items-center text-xs text-gray-500 mt-1">
                                    <span>Old Price</span>
                                    <span className="line-through">
                                        ${item.oldPrice.toLocaleString()}
                                    </span>
                                </div>
                            )}
                        </div>

                        <button
                            className="mt-auto w-full bg-black text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition"
                        >
                            <ShoppingCart className="w-4 h-4" />
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
