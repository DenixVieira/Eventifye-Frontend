import './cadastroseventos.css'

export const CadastrosEventos = ({id, nome, descricao}) => {

  return (
    <div className='container_cadastros' id={id}><div><h1>{nome}</h1> <p>{descricao}</p></div> <div><button>Emitir Certificado</button></div> </div>
  )
}
