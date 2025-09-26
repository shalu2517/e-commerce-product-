import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home({ onSelectProduct }) {
  const [filters, setFilters] = useState({
    category: "All",
    price: 200,
    search: "",
  });

  const filteredProducts = products.filter((p) => {
    return (
      (filters.category === "All" || p.category === filters.category) &&
      p.price <= filters.price &&
      p.name.toLowerCase().includes(filters.search.toLowerCase())
    );
  });

  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {/* Filter Sidebar */}
      <aside className="p-4 bg-gray-100 rounded-xl space-y-6">
        <h2 className="text-xl font-semibold">Filters</h2>

        {/* Category Filter */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            value={filters.category}
            onChange={(e) =>
              setFilters({ ...filters, category: e.target.value })
            }
            className="w-full p-2 border rounded"
          >
            <option value="All">All</option>
            <option value="Clothing">Clothing</option>
            <option value="Footwear">Footwear</option>
            <option value="Accessories">Accessories</option>
          </select>
        </div>

        {/* Price Filter */}
        <div>
          <label className="block mb-1 font-medium">
            Max Price: ${filters.price}
          </label>
          <input
            type="range"
            min="0"
            max="200"
            value={filters.price}
            onChange={(e) =>
              setFilters({ ...filters, price: Number(e.target.value) })
            }
            className="w-full"
          />
        </div>
        {/* Search Filter */}
        <div>
          <label className="block mb-1 font-medium">Search</label>
          <input
            type="text"
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) =>
              setFilters({ ...filters, search: e.target.value })
            }
            className="w-full p-2 border rounded"
          />
        </div>
      </aside>

      {/* Product Grid */}
      <main className="col-span-3 grid grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} onClick={onSelectProduct} />
          ))
        ) : (
          <p className="col-span-3 text-gray-500 text-center">
            No products found.
          </p>
        )}
      </main>
    </div>
  );
}
