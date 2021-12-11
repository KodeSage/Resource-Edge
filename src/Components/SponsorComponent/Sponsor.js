import Unnlogo from '../Assets/unn.svg';
import Tenece from '../Assets/tenece.svg';
import privateestates from '../Assets/private-estates.svg';
import genesys from '../Assets/genesys.svg';
import './Sponsor.css'
    
const Sponsor = () => {
    return (
      <div className="sponsor">
        <div className="container">
          <div className="flex">
            <div className="sponsor-image">
              <img src={Unnlogo} alt="unnlogo" />
              <img src={Tenece} alt="tenece" />
              <img src={privateestates} alt="private-estate" />
              <img src={genesys} alt="genesys" />
            </div>
          </div>
        </div>
      </div>
    );
}
export default Sponsor;