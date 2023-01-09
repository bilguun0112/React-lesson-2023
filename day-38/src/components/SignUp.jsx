export default function SingUp() {
    return(
        <form onSubmit={(e) => 
        {e.preventDefault()
        alert('Submitung!')}}>


            <input type="text" />
            <button>Send</button>
        </form>
    )
}