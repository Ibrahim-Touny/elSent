import { categorylists } from "../../assets/data";
import { CategoryCard } from "../../components/cards/CategoryCard";
import {Container, Heading } from "../../components/common/Design";

export const CategorySlider = () => {
  return (
    <>
      <section className="catgeory-slider pb-16">
        <Container>
          <Heading title="Browse the catgeorys" subtitle="Most viewed and all-time top-selling category" />

          <div className="grid grid-cols-2 md:grid-cols-7 gap-5 my-8">
            {categorylists.map((item) => (
              <CategoryCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};