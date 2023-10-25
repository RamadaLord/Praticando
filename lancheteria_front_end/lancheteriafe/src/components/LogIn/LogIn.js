import { useContext, useState } from "react";
import { IMaskInput } from "react-imask";
import { toast } from "react-toastify";
import apiBack from "../../services/api";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../context/AuthContext";


export default function LogIn(){

    const [email, setEmail] = useState('')
    const [password, setPassword] =   useState('')
    const navigate = useNavigate()

    const { signIn } = useContext(AuthContext)

    async function AuthLogIn(e){
        e.preventDefault()

        let data = {
            email,
            password
        }

        const resposta = await signIn(data)
        console.log(resposta)

        if(!email||!password){
            toast.warn('Existem campos em braco')
            return
        }
        if(!resposta){
            toast.error("Erro de login")
            return
        }else if(resposta.status === 200){
            const token = resposta.data.token
            localStorage.setItem('@tklogin2023', JSON.stringify(token))
            toast('Login efetuado com sucesso',{
                     position: toast.POSITION.TOP_CENTER,
                     theme: "light"
                    })
            // navigate('/ListarProdutos')
        }

    //    try{
    //      await apiBack.post('/AuthLogIn',{
    //         email,
    //         password
    //     })
    //     toast('Login efetuado com sucesso',{
    //      position: toast.POSITION.TOP_CENTER,
    //      theme: "light"
    //     })
    //     navigate('/ListarUsuarios')
    //     console.log(email, password)
    //    }catch(err){
    //     toast.error(err.response.data.error)

    //    }

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