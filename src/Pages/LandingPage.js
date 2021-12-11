import DualSection from "../Components/DualSectionComponent/DualSection";
import Footer from "../Components/Footer/Footer";
import Homepage from "../Components/HomePageComponent/HomePage";
import HumanResource from "../Components/HumanResourceComponent/HumanResource";
import NavBar from "../Components/NavBarComponent/NavBar";
import Sponsor from "../Components/SponsorComponent/Sponsor";

const LandingPage = () => {
    return(
        <div>
            <NavBar />
            <Homepage />
            <HumanResource />
            <DualSection />
            <Sponsor/>
            <Footer />
        </div>
    );
}
export default LandingPage;