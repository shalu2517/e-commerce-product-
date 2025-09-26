export default function ProductCard({ product, onClick }) {
  return (
    <div
      className="bg-white shadow rounded-xl p-4 cursor-pointer hover:shadow-lg transition"
      onClick={() => onClick(product.id)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg mb-3"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">{product.category}</p>
      <p className="text-blue-600 font-bold">${product.price}</p>
    </div>
  );
}
