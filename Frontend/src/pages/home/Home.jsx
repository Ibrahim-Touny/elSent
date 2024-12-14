import { CategorySlider, Hero, ProductList,Process,Trust, TopCollection, ProductListFront } from "../../routes";
import { Footer } from "../../components/common/Footer";
export const Home =() => {
    return ( <>
        <Hero/>
        <CategorySlider/>
        {/*<ProductList/>*/}
        <ProductListFront/>
        <Process/>
        <Trust/>
        <TopCollection/>
        <Footer/>
    </>
    );
};