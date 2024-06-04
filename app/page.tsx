// app/page.tsx
"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductModal from './component/productModal';
import Image from 'next/image';

export interface Product {
  id: number;
  name: string;
  imageUrl : string
}


export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [images, setImages] = useState<{ [id: string]: string }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://www.giovankov.com/api/product.json');
        const productsData: Product[] = response.data.data.filter((product: any) => product.name); // Filter out null names
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    const fetchImages = async () => {
      try {
        const response = await axios.get('https://www.giovankov.com/api/image.json');
        const imagesData = response.data.data.reduce((acc: any, item: any) => {
          item.id.forEach((id: string) => {
            acc[id] = item.image;
          });
          return acc;
        }, {});
        setImages(imagesData);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchProducts();
    fetchImages();
  }, []);

  const openModal = (product: Product, images : string) => {
    const productWithImage= {
      ...product,
      imageUrl: images
    };
    setSelectedProduct(productWithImage);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <section className="py-8 px-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Company</h1>
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
        </p>
      </section>

      <section className="py-8 px-4">
        <h2 className="text-3xl font-bold mb-4">Our Products</h2>
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map(product => (
            <div key={product.id} className="border p-4">
              <h3 className="font-bold">{product.id}: {product.name}</h3>
              <div className="cursor-pointer" onClick={() => openModal(product, images[product.id])}>
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
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={closeModal} />
      )}
    </div>
  );
}
