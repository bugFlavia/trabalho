"use client"
import { useRouter } from 'next/navigation';
import Navbar from './componentes/navbar';
import Link from 'next/link';

export default async function Home() {
  const router = useRouter();
  const req = await fetch("http://localhost:3003/alunos", {
    cache: "no-cache"
  });
  const alunos = await req.json();
 

  const remover = async (id) => {
    try {
      await fetch("http://localhost:3003/alunos/" + id, {
        method: "DELETE"
      })
      router.refresh()
    } catch {
      alert.arguments("Não foi possivél remover!")
    }
  }
  return (
    <main>
      <Navbar></Navbar>
      <div className='pessoas'>
      <h1 id="titulo">Alunos:</h1>
      {alunos.map(aluno => (
        <div key={aluno.id} class="exibicao">
          <p>{aluno.nome}- {aluno.curso}</p><br/>
          <button id='remover' onClick={e => e.preventDefault(remover(aluno.id))}>REMOVER</button>
        </div>
      ))}
      <Link href="/cadastro" id="cadastrar">CADASTRAR</Link>
      </div>
    </main>
  )
}
