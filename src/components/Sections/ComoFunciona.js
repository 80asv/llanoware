import React from 'react'
import TimelineItem from '../TimelineItem/TimelineItem'

const ComoFunciona = () => {
  return (
    <section className='como-funciona'>
        <h2>¿Cómo Funciona?</h2>
        <div className='timeline-items'>
            <TimelineItem transition="fade-up" number="1" description="Agenda una tutoría personalizada con nosotros"/>
            <TimelineItem transition="fade-up" number="2" description="Al momento de agendar, debes dar una breve explicación de por qué requieres una tutoría y el problema o duda solucionar"/>
            <TimelineItem transition="fade-up" number="3" description="Al poco tiempo te llegará un correo en el que se te notificará que tu cita a sido asignada"/>
            <TimelineItem transition="fade-up" number="4" description="En la tutoría, dispondremos del tiempo estipulado para resolver tu duda o problema de programación"/>
        </div>
    </section>
  )
}

export default ComoFunciona