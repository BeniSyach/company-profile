import ProductModal from "./component/productModal";
import Image from "next/image";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Hero from "./component/hero";
import Profile from "./component/profile";
import Product from "./component/product";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center bg-white">
      <div className="flex flex-col items-center w-full bg-slate-50 max-md:max-w-full">
        <Navbar />
        <Hero />
        <Profile />
        <Product />
        {/* <section className="py-8 px-4">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div key={product.id} className="border p-4">
                <h3 className="font-bold">
                  {product.id}: {product.name}
                </h3>
                <div
                  className="cursor-pointer"
                  onClick={() => openModal(product, images[product.id])}
                >
                  <Image
                    src={images[product.id]}
                    alt={product.name}
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            ))}
          </div>
        </section> */}
        <Footer />
      </div>
    </div>
  );
}
