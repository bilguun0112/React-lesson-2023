export default function Childbutton({onClick, children}){
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}