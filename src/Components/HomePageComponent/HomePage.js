import RelaxImage from "../Assets/Relax-img.svg";
import './HomePage.css'
const Homepage = () => { 

    return (
      <div className="homepage">
        <div className="home-brand container">
          <div className="home-text">
            <h1>Throw paperwork into the trash where it belongs.</h1>
            <p>
              Eliminate all the hassle involved in managing people operations by
              automating it.
            </p>
          </div>
          <div className="home-image">
            <img src={RelaxImage} alt="relaximage" />
          </div>
        </div>
      </div>
    );
}
export default Homepage;