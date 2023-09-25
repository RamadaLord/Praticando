import { useState } from "react";
import { IMaskInput } from "react-imask";
import { toast } from "react-toastify";
import apiBack from "../../services/api";
import { useNavigate } from 'react-router-dom'


export default function LogIn(){

    const [email, setEmail] = useState('')
    const [password, setPassword] =   useState('')
    const navigate = useNavigate()

    async function AuthLogIn(e){
        e.preventDefault()
        if(!email||!password){
            toast.warn('Existem campos em braco')
            return
        }
       try{
         await apiBack.post('/AuthLogIn',{
            email,
            password
        })
        toast.success('Login efetuado com sucesso',{
         position: toast.POSITION.TOP_LEFT
        })
        navigate('/ListarUsuarios')
        console.log(email, password)
       }catch(err){
        toast.error(err.response.data.error)

       }

    }

    return(
        <div  id="formulario">
            <form onSubmit={AuthLogIn} >
            <h1>
                Login:
            </h1>
            <br/>
                <label>
                    Email:
                </label>
                <IMaskInput
                id='input'
                type='text'
                value={email}
                placeholder='seu@email.com'
                onChange={(e) => setEmail(e.target.value)}
                />
                <br/>
                <label>
                    Senha:
                </label>
                <IMaskInput
                id='input'
                type='password'
                value={password}
                placeholder='**********'
                onChange={(e)=> setPassword(e.target.value)}
                />
                <br/>
                <center>

                <button className="btn" type="submit">Login</button>
                </center>
                
            </form>
        </div>
    )
}