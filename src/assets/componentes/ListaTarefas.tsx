import type { TarefaProps } from "../../types"
import React, { useState } from "react"
import Tarefa from "./Tarefa"
import FormTarefas from "./FromTarefas"

export default function ListaTarefas() {

    const [tarefas, setTarefas] = useState<TarefaProps[]>([])

    const [tarefa, setTarefa] = useState<TarefaProps>({ titulo: '', setor: '', descricao: '' })

    const addTarefa = () => {
        setTarefas([...tarefas, tarefa])
        setTarefa({ titulo: '', setor: '', descricao: '' })
    }

    const captura = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setTarefa({ ...tarefa, [name]: value })
    }

    const removeTarefa = (tit: string) => {
        const novaTarefa = tarefas.filter((t) => t.titulo !== tit)
        setTarefas(novaTarefa)
    }

    return (
        <div className="lista-tarefa">
            <FormTarefas {...tarefa} add={addTarefa} digit={captura} />
            {tarefas.map((t, i) => (<Tarefa remove = {removeTarefa} {...t} />))}
        </div>
    )
}