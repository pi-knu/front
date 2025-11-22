import { ShieldCheck, Zap, Users } from "lucide-react";

export default function WhyChooseUs() {
    return (
        <section className="py-20 px-6 text-center">

            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <p className="text-gray-500 mt-2">
                Experience the future of luxury commerce with our cutting-edge platform
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

                <div className="p-8 border rounded-xl bg-white shadow-sm">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShieldCheck className="w-6 h-6 text-gray-500" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2">Secure & Trusted</h3>
                    <p className="text-gray-500 text-sm">
                        Advanced security measures and verified sellers ensure safe transactions
                    </p>
                </div>

                <div className="p-8 border rounded-xl bg-white shadow-sm">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Zap className="w-6 h-6 text-gray-500" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2">Real-Time Bidding</h3>
                    <p className="text-gray-500 text-sm">
                        Lightning-fast auction system with instant bid updates and notifications
                    </p>
                </div>

                <div className="p-8 border rounded-xl bg-white shadow-sm">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="w-6 h-6 text-gray-500" />
                    </div>

                    <h3 className="text-lg font-semibold mb-2">Global Community</h3>
                    <p className="text-gray-500 text-sm">
                        Connect with collectors and enthusiasts from around the world
                    </p>
                </div>

            </div>
        </section>
    );
}
