export default function Register(){
    return(
        <div>
            <h1>Its is register page</h1>
            <label For="email"> Email :</label>
            <input type="email" name="email" />
            <br />
            <label For="firstname"> Firstname :</label>
            <input type="firstname" name="firstname" />
            <br />
            <label For="lastname"> Lastname :</label>
            <input type="lastname" name="lastname" />
            <br />
            <label For="password"> Password :</label>
            <input type="password" name="password" />
            <br />
            <label For="password"> Confirm Password :</label>
            <input type="password" name="password" />
            <br />
            <button>Register</button>
        </div>
    )
}