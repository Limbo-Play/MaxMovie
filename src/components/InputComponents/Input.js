import '../components/styles.scss'
export default function Input(props) {
    return (
        <input className="handleInput" placeholder={props.placeholder} type={props.type} />
    )
}