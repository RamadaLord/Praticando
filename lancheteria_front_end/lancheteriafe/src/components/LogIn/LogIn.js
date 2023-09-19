import { IMaskInput } from "react-imask";

export default function LogIn(){
    return(
        <div>
            <h1>
                Login
            </h1>
            <br/>
            <form id="formulario">
                <label>
                    Email:
                </label>
                <IMaskInput
                id='input'
                />
                <br/>
                <label>
                    Senha:
                </label>
                <IMaskInput
                id='input'
                />
                <br/>
                <center>

                <button className="btn" type="submit">Login</button>
                </center>
                
            </form>
        </div>
    )
}