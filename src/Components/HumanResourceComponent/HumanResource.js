import Frame1 from '../Assets/Frame1.png';
import Frame2 from '../Assets/Frame2.png';
import Frame3 from '../Assets/Frame3.png';
import LastFrame from '../Assets/LastBigFrame.png';
import './HumanResource.css';

const HumanResource = () => {
    return (
      <div className="human-resource">
        <div className="container">
          <div className="humanresource-text">
            <h2>Human Resources</h2>
            <p>
              Onboard new employees, manage the employee lifecycle and measure
              employee performance.
            </p>
          </div>
          <div className="humanresource-card">
            <div className="card">
              <img src={Frame1} />
            </div>
            <div className="card">
              <img src={Frame2} />
            </div>
            <div className="card">
              <img src={Frame3} />
            </div>
            </div>
         <div className='Employeeboard'>
            <img src={ LastFrame} />
        </div>
        </div>
      </div>
    );
}
export default HumanResource;