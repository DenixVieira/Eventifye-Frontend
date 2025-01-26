import React from 'react'
import { data } from 'react-router-dom'

export const Event_API = {
  getEvents: async() => {
    let clients
    await fetch('http://localhost:5000/Events',{
        method: 'GET',
        headers:{
            "Content-type": 'Application/json',
        }
    }).then((resp) => resp.json()).then((data) => {clients = data})
    return clients
  },
  getParticipantes: async() => {
    let Participantes
    await fetch('http://localhost:5000/Participantes',{
        method: 'GET',
        headers:{
            "Content-type": 'Application/json',
        }
    }).then((resp) => resp.json()).then((data) => {Participantes = data})
    return Participantes
  },
}
