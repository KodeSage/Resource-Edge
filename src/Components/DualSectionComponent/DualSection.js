import travellog from '../Assets/travel-log.svg';
import assert from '../Assets/assert-management.svg';
import vouchers from '../Assets/re-vouchers.svg';
import payroll from '../Assets/payroll.svg';
import PayrollDashboard from '../Assets/Payroll-Dashboard.svg';
import adminDashboard from '../Assets/admin-Dashboard.svg';
import './DualSection.css'
import Container from '../CommonStyles/Container';

const DualSection = () => {
    return (
      <div className="dual-section">
        <Container>
          <div className="admin-logistics">
            <div className="admin-text">
              <h2>Admin & Logistics</h2>
              <p>
                Manage and track company assets as well as logistics for
                travelling employees
              </p>
            </div>
            <div className="travel-log">
              <img src={travellog} alt="travellog" />
            </div>
            <div className="Assert-management">
              <img src={assert} alt="assert-management" />
            </div>
          </div>
          <div className="Admin-Dashboard-Image">
            <img src={adminDashboard} alt="Admin-Dashboard" />
          </div>
          <div className="finance">
            <div className="finance-text">
              <h2>Finance</h2>
              <p>
                Generate invoices, track expenditure, and manage complex
                payrolls for multiple teams and companies
              </p>
            </div>
            <div className="re-vouchers">
              <img src={vouchers} alt="vouchers" />
            </div>
            <div className="payroll">
              <img src={payroll} alt="payroll" />
            </div>
          </div>
          <div className="Payroll-Dashboard-Image">
            <img src={PayrollDashboard} alt="Payroll-Dashboard" />
                </div>
        </Container>
        </div>
        
    );
}
export default DualSection;