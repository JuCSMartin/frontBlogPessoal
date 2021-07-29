import { Postagem } from "./Postagem"

export class Tema {
    public id: number
    public descricao: string
    public qtdTema: number
    public postagem: Postagem[]
}