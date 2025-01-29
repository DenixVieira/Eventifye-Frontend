import { useState } from 'react'
import '../Styles/adicionar.css'
import { useForm } from 'react-hook-form'


export const CriarEvento = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const onSubmit = (data) => console.log(data)
    return (
        <form className='container_adicionar' onSubmit={handleSubmit(onSubmit)}>

            <div className='area_form'>
                <div className='container_input'>
                    <div className='date_input'>
                        <div className='date'>
                            <label>Data do início do evento:</label>
                            <input type="datetime-local" placeholder="Digite uma data" {...register("inicio", { required: true })} />
                            {errors.local && <span>Campo Obrigatório!</span>}
                        </div>
                        <div className='date'>
                            <label>Data do término do evento:</label>
                            <input type="datetime-local" placeholder="Digite uma data" {...register("fim", { required: true })} />
                            {errors.local && <span>Campo Obrigatório!</span>}
                        </div>
                    </div>
                    <div className="input_container_form">
                        <label>Título do evento (obrigatório):</label>
                        <input placeholder="Adicone um título que descreve o conteúdo do evento" {...register("nome", { required: true })} />
                        {errors.nome && <span>Campo Obrigatório!</span>}
                    </div>
                    <div className="input_container_form">
                        <label>Descrição (obrigatória):</label>
                        <input placeholder="Descreva sobre o evento para todos os usuários" {...register("description", { required: false })} />
                    </div>
                    <div className="input_container_form">
                        <label>Local do evento (obrigatório):</label>
                        <input placeholder="Descreva sobre o local do evento para todos os usuários" {...register("local", { required: true })} />
                        {errors.local && <span>Campo Obrigatório!</span>}
                    </div>
                    {/* errors will return when field validation fails  */}

                </div>
            </div>
            <div className='area_image'>
                <div className="file_form">
                    <p>{file}</p>
                    <img src={file} />

                    <input type="file" accept='image/*' onChange={(e) => {setFile(URL.createObjectURL(e.target.files[0]))}} {...register("image", { required: false })} />
                </div>

                <input type="submit"  className="button_form" value='CRIAR EVENTO' />
            </div>
        </form>
    )
}
