import '../Styles/cadastroseventos.css'

import { useState } from 'react'

export const EventosCadastrados = ({id, nome, descricao}) => {
  const [sendEmail, setSendEmail] = useState(false)

  return (
    <div className='container_cadastros' id={id}><div><h1>{nome}</h1> <p>{descricao}</p></div> <div><button>Emitir Certificado</button><p>{sendEmail}<input type='checkbox' value={sendEmail} checked={sendEmail} onChange={(prev) => setSendEmail(!sendEmail)}/> Receber notificação por E-mail?</p></div> </div>
  )
}
