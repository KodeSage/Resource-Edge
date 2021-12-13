import './Container.css';

const Container = (props) => {
    const container = 'container ' + props.className;
    return (
        <div className={container}> {props.children}</div>
    );
 }
export default Container;