import ResponsiveAppBar from "./components/Navbar/Navbar";
import ProductsPage from "./components/productsPage/ProductsPage";
import productsList from "./productsList";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <ProductsPage products={productsList} />
    </div>
  );
}

export default App;
