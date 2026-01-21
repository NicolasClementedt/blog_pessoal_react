import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import type UsuarioLogin from "../../models/UsuarioLogin";
import { ClipLoader } from "react-spinners";



        function Login() {

            const navigate = useNavigate(); //constante navigate com hook useNavigate, permite redirecionar para outra rota

            const { usuario, handleLogin, isLoading } = useContext(AuthContext) //desestruturando o AuthContext para obter o usuario e o handleLogin usando o AuthContext

            const [UsuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
                {} as UsuarioLogin //criando um estado para armazenar os dados do formulario
            )

            useEffect(() => { //observa mudancas no estado usuario
                if (usuario.token !== '') { //se o token do usuario for diferente de vazio é sucesso
                    navigate('/home') //redireciona para a rota home
                }
            }, [usuario]) //observa mudancas no estado usuario

            function atualizarEstado(e: ChangeEvent<HTMLInputElement>) { //funcao para atualizar o estado usuarioLogin conforme os dados são digitados no formulario
                setUsuarioLogin({ //funcao que atualiza o estado usuarioLogin
                    ...UsuarioLogin, //spread operator para copiar os dados do estado anterior
                    [e.target.name]: e.target.value //atualiza o campo correspondente ao nome do input
                }) 

                /*
                    e = evento, target = é o elemento HTML que disparou o evento, name = nome do input e value = valor do input
                */
            }

            function login (e: FormEvent<HTMLFormElement>) {
                e.preventDefault()
                handleLogin(UsuarioLogin)
            }

            /*
                e = evento, FormEvent = envio do formulario, e.preventDefault() = previne o comportamento padrao do formulario que é recarregar a página
                handleLogin() = funcao disponibilizada pelo AuthContext e que faz a autenticacao
            */

                    return (
                        <>
                        <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold ">


                        <form className="flex justify-center items-center flex-col w-1/2 gap-4" 
                        onSubmit={login}>

                        <h2 className="text-slate-900 text-5x1 ">Entrar</h2>

                        <div className="flex flex-col w-full">

                        <label htmlFor="usuario">Usuário</label>


                        <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Usuario"
                        className="border-2 border-slate-700 rounded p-2"
                        value = {UsuarioLogin.usuario} //garante que o valor do input seja atualizado conforme o usuario digita
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                            />

                        </div>


                        <div className="flex flex-col w-full">
                        <label htmlFor="senha">Senha</label>
                        <input
                        type="password"
                        id="senha"
                        name="senha"
                        placeholder="Senha"
                        className="border-2 border-slate-700 rounded p-2"
                        value = {UsuarioLogin.senha} // garante que o valor do input seja atualizado conforme o usuario digita
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        />
                        </div>


                        <button
                        type='submit'
                        className="rounded bg-indigo-400 flex justify-center hover:bg-indigo-900 text-white w-1/2 py-2">
                            {isLoading ?
                            <ClipLoader
                            color="#ffffff"
                            size= {24}
                        /> :
                        <span>Entrar</span>
                            }
                        </button>


                        <hr className="border-slate-800 w-full" />

                        <p>
                        Ainda não tem uma conta?{''}
                        <Link to="/cadastro" className="text-indigo-800 hover:underline">
                        Cadastre-se
                        </Link>
                        </p>
                        </form>


                        <div className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] lg:block hidden bg-no-repeat w-full min-h-screen bg-cover bg-center">
                        </div>
</div>

</>

)

}



export default Login;