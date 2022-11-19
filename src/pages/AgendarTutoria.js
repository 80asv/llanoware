import React, { useState } from 'react'
import { helpHttp } from '../helpers/helpHttp';
import './AgendarTutoria.css'

const initialForm = {
	nombre: "",
	correo: "",
	fechaCita: "",
	horaCita: "",
	duracion: "",
	detalles: "",
}

const AgendarTutoria = () => {

	const [form, setForm] = useState(initialForm);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("hola");
		setForm(initialForm);
	}

	const handlerChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


	return (
		<main>
			<div className='container-form'>
				<h2>Agendemos una Tutoria</h2>
				<p>Diligencia el siguiente formulario en el que nos daras todos los detalles y para qué quieres la tutoria</p>
				<br />
				<form onSubmit={handleSubmit}>
					<div className='form-datos-personales'>
						<h3>Tus datos</h3>
						<input type="text" id='nombre' name='nombre' placeholder='Nombre' required value={form.nombre} onChange={handlerChange}/>
						<input type="email" id='correo' name="correo" placeholder='Correo'required value={form.correo} onChange={handlerChange}/>
					</div>
					<div className='form-fecha'>
						<h3>Detalles de la tutoria</h3>
						<label htmlFor="fechaCita">Día de la Cita</label>
						<input type="date" id='fechaCita' name="fechaCita" value={form.fechaCita} onChange={handlerChange}/>
						<label htmlFor="horaCita">Hora de la cita</label>
						<input type="time" id='horaCita' name="horaCita" value={form.horaCita} onChange={handlerChange}/>
						<label htmlFor="duracion">Duración de sesion</label>
						<div><input type="number" id='duracion' name="duracion" value={form.duracion} onChange={handlerChange}/><p>Min</p></div>
						<label htmlFor="detalles">Describe brevemente tu problema</label>
						<textarea name="detalles" id="detalles" cols="30" rows="10" value={form.detalles} onChange={handlerChange}></textarea>
					</div>
					<input type="submit" value="Agendar mi cita" id='agendar'/>
				</form>
			</div>
		</main>
	)
}

export default AgendarTutoria