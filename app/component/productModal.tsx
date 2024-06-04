import Image from 'next/image';
import { Product } from '../page';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
        <Image src={`${product.imageUrl}`} alt={product.name} className="mb-4"   width={300}
                  height={300}/>
        <button onClick={onClose} className="bg-blue-500 text-white py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
}
