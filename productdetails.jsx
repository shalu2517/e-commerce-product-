export default function ProductDetails({ product, onBack }) {
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-lg object-cover"
      />
      <div>
        <button
          className="mb-4 text-blue-600 hover:underline"
          onClick={onBack}
        >
          &larr; Back to products
        </button>
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.category}</p>
        <p className="text-2xl font-semibold text-blue-700 mb-4">
          ${product.price}
        </p>
        <p className="mb-6">{product.description}</p>
        <p
          className={`font-semibold ${
            product.inStock ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </p>
        <button
          disabled={!product.inStock}
          className={`mt-6 px-6 py-3 rounded text-white ${
            product.inStock
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

