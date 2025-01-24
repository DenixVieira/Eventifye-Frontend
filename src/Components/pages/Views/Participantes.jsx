import TableParticipante from '../Serviços/tableparticipante'

export const Participantes = () => {
  return (
    <section className='home_container'>
      <div className='title'>
        <h1>Participantes inscritos:</h1> <button>Exportar Participantes</button>
      </div>
      <TableParticipante/>
    </section>
  )
}
