import ProductList from "./components/ProductList/ProductList";

function App() {
  const products = [
    { id: 1, image: "../public/assets/15.jpg", title: "Product One" },
    { id: 2, image: "../public/assets/053(20).jpg", title: "Product Two" },
    { id: 3, image: "../public/assets/Lake.jpg", title: "Product Three" },
    { id: 4, image: "../public/assets/mag.jpg", title: "Product Four" },
  ];

  return <ProductList products={products} />;
}

export default App;
