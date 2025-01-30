import { useState } from "react";
import "../Styles/adicionar.css";
import { useForm } from "react-hook-form";
import { useEventosMutate } from "./hooks/useMutateEventos";
import { useNavigate } from "react-router-dom";

export const CriarEvento = () => {
	const { mutate } = useEventosMutate();
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [file, setFile] = useState(null);

	const onSubmit = (data) => {
		mutate(
			{ values: data },
			{
				onSuccess: ({ data }) => {
					navigate(`/eventos/${data.id}/palestras`);
				},
				onError: (erro) => {
					console.log(erro);
				},
			}
		);
	};
	return (
		<form className='container_adicionar' onSubmit={handleSubmit(onSubmit)}>
			<div className='area_form'>
				<div className='container_input'>
					<div className='date_input'>
						<div className='date'>
							<label>Data do início do evento:</label>
							<input
								type='datetime-local'
								placeholder='Digite uma data'
								{...register("dataInicioEvento", {
									required: true,
								})}
							/>
							{errors.local && <span>Campo Obrigatório!</span>}
						</div>
						<div className='date'>
							<label>Data do término do evento:</label>
							<input
								type='datetime-local'
								placeholder='Digite uma data'
								{...register("dataFimEvento", {
									required: true,
								})}
							/>
							{errors.local && <span>Campo Obrigatório!</span>}
						</div>
					</div>
					<div className='input_container_form'>
						<label>Título do evento (obrigatório):</label>
						<input
							placeholder='Adicone um título que descreve o conteúdo do evento'
							{...register("tituloEvento", { required: true })}
						/>
						{errors.nome && <span>Campo Obrigatório!</span>}
					</div>
					<div className='input_container_form'>
						<label>Descrição (obrigatória):</label>
						<input
							placeholder='Descreva sobre o evento para todos os usuários'
							{...register("descricaoEvento", {
								required: false,
							})}
						/>
					</div>
					<div className='input_container_form'>
						<label>Local do evento (obrigatório):</label>
						<input
							placeholder='Descreva sobre o local do evento para todos os usuários'
							{...register("localEvento", { required: true })}
						/>
						{errors.local && <span>Campo Obrigatório!</span>}
					</div>
					{/* errors will return when field validation fails  */}
				</div>
			</div>
			<div className='area_image'>
				<div className='file_form'>

					<img
						src={file}
						
					/>

					<input
						type='file'
						accept='image/*'
						onChange={(e) => {
							binaryData.push(e.target.files[0]);
							setFile(e.target.files[0]);
						}}
						{...register("iconeEvento", { required: false })}
					/>
				</div>

				<input
					type='submit'
					className='button_form'
					value='CRIAR EVENTO'
				/>
			</div>
		</form>
	);
};
