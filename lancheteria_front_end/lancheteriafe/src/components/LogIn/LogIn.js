import { IMaskInput } from "react-imask";

export default function LogIn(){
    return(
        <div>
            <form id="formulario">
            <h1>
                Login:
            </h1>
            <br/>
                <label>
                    Email:
                </label>
                <IMaskInput
                id='input'
                type='email'
                placeholder='seu@email.com'
                />
                <br/>
                <label>
                    Senha:
                </label>
                <IMaskInput
                id='input'
                type='password'
                placeholder='**********'
                />
                <br/>
                <center>

                <button className="btn" type="submit">Login</button>
                </center>
                
            </form>
        </div>
    )
}