import type Postagem from "./Postagem";

export default interface Usuario {
    id: number;
    nome: string;
    usuario: string;
    foto: string;
    senha: string;
    postagem?: Postagem[] | null; //Operador de Encademaneto Opcional (?) mostra que prencher esse campo é opcional.


}