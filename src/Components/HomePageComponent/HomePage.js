import RelaxImage from "../Assets/Relax-img.svg";
import './HomePage.css';
import Container from "../CommonStyles/Container";
const Homepage = () => { 

    return (
      <div className="homepage">
        <Container className="home-brand">
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
        </Container>
      </div>
    );
}
export default Homepage;