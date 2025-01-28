import '../Styles/adicionar.css'
import { useForm } from 'react-hook-form'

export const CriarEvento = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <form className='container_adicionar' onSubmit={handleSubmit(onSubmit)}>

            <div className='area_form'>
                <div className='container_input'>
                    <div className='date_input'>
                        <div className="input_container_form">
                            <label>Data do início do evento:</label>
                            <input type="datetime-local" placeholder="Digite uma data" {...register("inicio", { required: true })} />
                            {errors.local && <span>Campo Obrigatório!</span>}
                        </div>
                        <div className="input_container_form">
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
                    {(errors.nome || errors.email || errors.area) && <span>Preencha todos os campos!</span>}
                </div>
            </div>
            <div className='area_image'>
                <input type="submit" className="button_form" value='Cadastrar' />
                sadasd
            </div>
        </form>
    )
}
