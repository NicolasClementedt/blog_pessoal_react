import axios from "axios"

const api = axios.create({ //instância do Axios chamada api
    baseURL: "https://blog-pessoal-projeto-2.onrender.com"
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


export const buscar = async (url: string, setDados: Function, header: Object) => {
    const resposta = await api.get(url, header)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await api.put(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async (url: string, header: Object) => {
    await api.delete(url, header)
}