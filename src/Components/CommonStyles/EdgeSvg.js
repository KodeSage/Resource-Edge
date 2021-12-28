import "./EdgeSvg.css";
import edgelogo from '../Assets/edgelogo.svg'
const EdgeSvg = (props) => {
  const edge_bg = "edge-bg " + props.className;
    return (
      <div className={edge_bg}>
            <div className="edge-logo">
                <img src={edgelogo} alt="logo"/>
             </div>
            {props.children}
      </div>
    );
};
export default EdgeSvg;
