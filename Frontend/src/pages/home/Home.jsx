import { CategorySlider, Hero, ProductList,Process,Trust, TopCollection } from "../../routes";
import { Footer } from "../../components/common/Footer";
export const Home =() => {
    return ( <>
        <Hero/>
        <CategorySlider/>
        <ProductList/>
        <Process/>
        <Trust/>
        <TopCollection/>
        <Footer/>
    </>
    );
};