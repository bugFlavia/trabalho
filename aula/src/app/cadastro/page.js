'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '../componentes/navbar';


export default function Cadastro() {

    const router = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();


    const cadastrar = (e) => {
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ router.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='cadastro'>
            <form action='' onSubmit={cadastrar}>
                <h1 id='titulo'>
                    Cadastrar aluno
                </h1>
                <input id="campo" placeholder='NOME DO ALUNO' nome="nome" type="text"
                    onChange={e => setNome(e.target.value)}></input><br/>

                <input id="campo" placeholder='CURSO DO ALUNO' nome="curso" type="text"
                    onChange={e => setCurso(e.target.value)}></input><br/>

                <input id="campo" placeholder='Nº DE INSCRIÇÃO/MATRÍCULA' nome="num_inscricao" type="number"
                    onChange={e => setNum_inscricao(e.target.value)}></input><br/>
                <button type='submit' id="cadastrar">CADASTRAR</button>
            </form>
            </div>
        </div>

    );

}