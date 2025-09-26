
import { useState } from "react";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import products from "./data/products";

export default function App() {
  const [selectedProductId, setSelectedProductId] = useState(null);

  const selectedProduct = products.find((p) => p.id === selectedProductId);

  return selectedProduct ? (
    <ProductDetails
      product={selectedProduct}
      onBack={() => setSelectedProductId(null)}
    />
  ) : (
    <Home onSelectProduct={setSelectedProductId} />
  );
}
