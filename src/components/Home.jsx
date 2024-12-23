import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import CategoriesSection from "./CategoriesSection";
import CraftItemsSection from "./CraftItemsSection";
import CustomerReview from "./CustomerReview";
import WhyChoose from "./WhyChoose";


const Home = () => {

    const crafts = useLoaderData();

    return (
        <div className="-mt-24">
            <Banner></Banner>
            <CraftItemsSection crafts={crafts}></CraftItemsSection>
            <CategoriesSection></CategoriesSection>
            <CustomerReview></CustomerReview>
            <WhyChoose></WhyChoose>
        </div>
    );
};

export default Home;