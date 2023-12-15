import ProductCard from "../../components/ProductCard";
import Styles from "./index.module.css";

function Home() {
  const products = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664201890402-6886a989796f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Iphone 10",
      id: "T-1",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664201890402-6886a989796f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Iphone 11",
      id: "T-2",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664201890402-6886a989796f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Iphone 10",
      id: "T-5",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1664201890402-6886a989796f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Iphone 14",
      id: "T-2",
    },
  ];

  return (
    <div className={Styles.container}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          id={product.id}
        />
      ))}
    </div>
  );
}

export default Home;
