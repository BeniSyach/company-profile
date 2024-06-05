"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import ProductModal from "./productModal";
import ImageSkeleton from "./imageSekeleton";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

export default function Product() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [images, setImages] = useState<{ [id: string]: string }>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://www.giovankov.com/api/product.json"
        );
        const productsData: Product[] = response.data.data.filter(
          (product: any) => product.name
        ); // Filter out null names
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://www.giovankov.com/api/image.json"
        );
        const imagesData = response.data.data.reduce((acc: any, item: any) => {
          item.id.forEach((id: string) => {
            acc[id] = item.image;
          });
          return acc;
        }, {});
        setImages(imagesData);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchProducts();
    fetchImages();
  }, []);

  const openModal = (product: Product, images: string) => {
    const productWithImage = {
      ...product,
      imageUrl: images,
    };
    setSelectedProduct(productWithImage);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col px-4 py-5 mt-4 w-full max-w-[960px] max-md:max-w-full">
      <div className="text-4xl font-black tracking-tighter text-neutral-900 max-md:max-w-full">
        Featured products
      </div>
      <div className="flex flex-col p-4 mt-3 w-full max-w-[960px] max-md:max-w-full">
        <div className="grid gap-3 leading-[150%] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-[repeat(auto-fit, minmax(300px, 1fr))]">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col flex-1 pb-3 mx-10 cursor-pointer"
              onClick={() => openModal(product, images[product.id])}
            >
              {/* {isLoading && <ImageSkeleton />} */}
              {/* {!isLoading && ( */}
              <Image
                src={
                  images[product.id]
                    ? images[product.id]
                    : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F3586230-no-photo-sign-sticker-with-text-inscription-on-isolated-background&psig=AOvVaw1wpDQd5zjsNH9kyNG5GMHa&ust=1717608286064000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPjUldG7woYDFQAAAAAdAAAAABAE"
                }
                alt={product.name}
                width={300}
                height={300}
                loading="lazy"
                onLoad={handleImageLoad}
                className="aspect-square"
              />
              {/* )} */}
              <div className="mt-3 text-base font-medium text-neutral-900 text-center">
                {product.id}: {product.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}
