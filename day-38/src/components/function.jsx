export default function Button() {
    function handleClick() {
        alert('You clicked me !');
    }
    return (
            <button onClick={handleClick}>
                Click me
            </button> 

            // <button onClick={() => {
            //     alert('You clicked me');
            // }}> clock me </button>
    )
}
