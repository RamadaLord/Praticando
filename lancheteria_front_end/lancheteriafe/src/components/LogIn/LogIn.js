import { useState } from "react";
import { IMaskInput } from "react-imask";
import { toast } from "react-toastify";
import apiBack from "../../services/api";
import { useNavigate } from 'react-router-dom'


export default function LogIn(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] =   useState('')
    const navigate = useNavigate()

    async function EnviarDados(e){
        e.preventDefault()
        if(!email||!senha){
            toast.warn('Existem campos em braco')
            return
        }
       try{
        await apiBack.post('/AuthLogIn',{
            email,
            senha
        })
        navigate('/ListarUsuarios')
        toast.error(Response.data.dados)
        console.log(email, senha)
       }catch(err){
        toast.error(err.Response.data.dados)

       }
    }

    return(
        <div  id="formulario">
            <form onSubmit={EnviarDados} >
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
                value={senha}
                placeholder='**********'
                onChange={(e)=> setSenha(e.target.value)}
                />
                <br/>
                <center>

                <button className="btn" type="submit">Login</button>
                </center>
                
            </form>
        </div>
    )
}