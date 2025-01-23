import './cadastroseventos.css'

export const CadastrosEventos = () => {
  const evento = {
    nome: 'Pedrin',
    descriptio: 'sdkjsjdsd'
  }

  return (
    <div className='container_cadastros'><div><h1>{evento.nome}</h1> <p>heheheh</p></div> <div><button>Emitir Certificado</button></div> </div>
  )
}
