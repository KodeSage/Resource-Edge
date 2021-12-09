import DualSection from "../Components/DualSectionComponent/DualSection";
import Footer from "../Components/Footer/Footer";
import Homepage from "../Components/HomePageComponent/HomePage";
import HumanResource from "../Components/HumanResourceComponent/HumanResource";
import NavBar from "../Components/NavBarComponent/NavBar";


const LandingPage = () => {
    return(
        <div>
            <NavBar />
            <Homepage />
            <HumanResource />
            <DualSection />
            <Footer />
        </div>
    );
}
export default LandingPage;