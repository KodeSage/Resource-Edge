import './Form.css';

const Form = (props) => {
const form = "form " + props.className;
    return <form className={form}>
        {props.children}
    </form>;
}

export default Form;