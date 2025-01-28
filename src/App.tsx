import React from "react";
import { Header } from "@organisms/Header/Header";
import { ProductList } from "@pages/ProductsList";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ProductList />
    </div>
  );
};

export default App;