import React, { useRef } from "react"
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

export default function SendMessageWithPoints({ pointsForSendMessage }) {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const fields = form.current.elements;
        let isEmptyFrom = false;
        let emptyInput = []

        for (let i = 0; i < fields.length; i++) {
            if (fields[i].required && fields[i].value.trim() === '') {
                emptyInput = fields[i].name
                isEmptyFrom = true;
                break;
            }
        }

        if (isEmptyFrom) {
            toast.error(`Por favor, complete el campo ${emptyInput}.`, {
                style: {
                    border: '1px solid #FF281E',
                    background: '#1C1C1F',
                    color: '#FF281E',

                }
            })
        } else {
            emailjs.sendForm('service_s60tec4', 'template_0ptnvc5', form.current, 'EXk2MfHy2c0xW9iu0')
                .then((result) => {
                    console.log(result.text);
                    toast.success('Mensaje Enviado exitosamente.', {
                        style: {
                            border: '1px solid #7fffd4',
                            background: '#1C1C1F',
                            color: '#7fffd4'
                        },
                    })
                }, (error) => {
                    toast.error('Su mensaje no se envio.')
                    console.log(error.text);
                });

        }

    };

    return (
        <div className="w-full h-full flex flex-col align-center bg-slate-300 border border-emerald-400">
            <h1 className="text-2xl font-bold mb-4 text-center py-6">Send-me message with Your Score:</h1>

            <div className="flex flex-row justify-center gap-2 px-2">
                <form className='w-3/4 h-fullflex flex flex-col justify-center align-center gap-2' ref={form}>
                    <div className=''>
                        <div className='flex flex-col p-2'>
                            <label className='px-1' data-tooltip='Campo requerido' >Name ID:</label>
                            <input className="p-1" type="text" name="name_id" placeholder='Your name ID' required />
                        </div>

                        <div className='flex flex-col p-2'>
                            <label className='px-1' data-tooltip='Campo requerido' >Your Message: </label>
                            <textarea className="w-full h-40 p-4 resize-y border rounded-md p-1" value={pointsForSendMessage.toString()}  name="Mensaje" placeholder='Write a short text explaining how long you can last without spending your resources.' required />
                        </div>
                    </div>
                    <div className="flex justify-center align-center py-4">
                        <button className="text-center p-1 border border-black rounded-xl" onClick={sendEmail} > Enviar mensaje </button>
                    </div>
                </form>
            </div>
        </div>
    )
}