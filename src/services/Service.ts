import axios from "axios"

const api = axios.create({ //instância do Axios chamada api
    baseURL: "https://blog-pessoal-projeto-bavd.onrender.com"
})


/*
url = endpoint da API que queremos acessar
dados = objeto com os dados que queremos enviar para a API e persistir no banco de dados
setDados = função que atualiza o estado do usuário criado no Componente Cadastro
Após a requisião ser concluída, a resposta da API é armazena na variável resposta
*/
export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
    
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

