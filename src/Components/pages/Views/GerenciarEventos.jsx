import { Event_API } from "../../Hooks/Event_API"
import { LinkButton } from "../Layout/LinkButton"
import { EventosCriados } from "../Serviços/EventosCriados"
import "./eventos.css"

import { useState, useEffect } from "react"

export const GerenciarEventos = () => {

  const [myEvents, setMyEvents] = useState([])

  useEffect(() => {
    Event_API.getEvents().then((data) => {
        console.log(data);
        setMyEvents(data);
    });
}, []);

  return (
    <div className="container">
      <div className="title"><h1>Eventos Criados</h1>      <LinkButton text='Criar novo evento?'/> <div className="search"><input type="text" placeholder="Buscar Eventos"/> <button><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.25 19.25L15.2625 15.2625M17.4167 10.0833C17.4167 14.1334 14.1334 17.4167 10.0833 17.4167C6.03325 17.4167 2.75 14.1334 2.75 10.0833C2.75 6.03325 6.03325 2.75 10.0833 2.75C14.1334 2.75 17.4167 6.03325 17.4167 10.0833Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</button> </div> </div>
      <div className="event_list">
        {myEvents.map((event) =>(
          <>
            <EventosCriados key={event.id} id={event.id} name={event.name}/>
          </>
        ))
        }
      </div>

    </div>
  )
}
