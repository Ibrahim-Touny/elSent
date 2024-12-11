import { productlists } from "../../assets/data";
import { ProductCard } from "../../components/cards/ProductCard";
import { Container, Heading } from "../../components/common/Design";

export const ProductList = () => {
  return (
    <>
      <section className="product home">
        <Container>
          <Heading title="Live Auction" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem laborum fugit digni." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-8">
          </div>
        </Container>
      </section>
    </>
  );
};
