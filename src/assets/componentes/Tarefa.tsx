import type { TarefaProps } from "../../types"

export default function Tarefa({ titulo, setor, descricao }: TarefaProps) {

    return (
        <div className="tarefa">
            <button onClick={()=> remove (titulo)}>x</button>
            <h2>{titulo}</h2>
            <p>Para: {setor}</p>
            <p>Fazer: {descricao}</p>
        </div>
    )

}