import { useEffect, useState } from "react";
import { Container } from "./styles";
import { ProductsCard } from "../../components/ProductsCard";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Cart } from "../../components/Cart";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const api = import.meta.env.VITE_API_MKS;

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, [api]);

  return (
    <Container>
      <Cart />
      <div className="page">
        <div className="card-container">
          {loading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div key={index}>
                  <Skeleton height={200} />
                  <Skeleton />
                  <Skeleton width="80%" />
                </div>
              ))
            : products.map((product) => (
                <ProductsCard
                  id={product.id}
                  key={product.id}
                  brand={product.photo}
                  name={product.name}
                  price={Number(product.price)}
                  description={product.description}
                />
              ))}
        </div>
      </div>
    </Container>
  );
}
