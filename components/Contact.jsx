import React from 'react'
import { useForm } from "react-hook-form";
import contactStyles from '../styles/Contact.module.scss'

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            fetch('https://formspree.io/f/mrgranee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((r) => {
                return r.json()
            })
            .then((response) => {
                console.log(response)
                window.location.href = "https://formspree.io/thanks?language=en";       
            }).catch(e => {
                console.log(e)
            });

        } catch (e) {
            console.log(e)
        }
      };

    return (
        <div className={contactStyles.contactContainer}>
            <div className={contactStyles.formContainer} id="contact">
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div className={contactStyles.formTitle}>
                        <div className={contactStyles.title}><h1>Get In Touch</h1></div>
                        <div className={contactStyles.subtitle}><h2>Tell me about your project or drop me a line. I&apos;d love to hear from you</h2></div> 
                    </div>
                    <div className={contactStyles.inputsContainer}>
                        <div className={contactStyles.inputContainer}>
                            <div className={contactStyles.inputErrorContainer}>
                                <label htmlFor="inputName">Name</label>
                                <input type="text" name="name" id="inputName" className={contactStyles.input} placeholder="Name" 
                                {...register('name', { required: true, minLength: 3 })} />
                                    {errors.name &&
                                    errors.name.type === "required" && (
                                        <p className={contactStyles.error}>This field is required!</p>
                                    )}
                                    {errors.name &&
                                    errors.name.type === "minLength" && (
                                        <p className={contactStyles.error}>
                                        This field requires minimum length of 3 characters!
                                        </p>
                                    )}
                            </div>
                        </div>
                        <div className={contactStyles.inputContainer}>
                            <div className={contactStyles.inputErrorContainer}>
                                <label htmlFor="inputEmail">Email</label>
                                <input type="text" name="_replyto" id="inputEmail" className={contactStyles.input} placeholder="E-Mail"
                                {...register('_replyto', { required: true,  pattern: /\S+@\S+\.\S+/ })} />
                                    {errors._replyto &&
                                    errors._replyto.type === "required" && (
                                        <p className={contactStyles.error}>This field is required!</p>
                                    )}
                                    {errors._replyto &&
                                    errors._replyto.type === "pattern" && (
                                        <p className={contactStyles.error}>
                                        You have typed an invalid email, please try it again!
                                        </p>
                                    )}            
                            </div>                
                        </div>
                        <div className={contactStyles.textareaContainer}>
                            <div className={contactStyles.inputErrorContainer}>
                                <textarea name="message" id="textMessage" className={contactStyles.textarea} placeholder="Message" 
                                {...register('message', { required: true, minLength: 3, maxLength: 1200 })} ></textarea>
                                    {errors.message &&
                                    errors.message.type === "required" && (
                                        <p className={contactStyles.error}>This field is required!</p>
                                    )}
                                    {errors.message &&
                                    errors.message.type === "minLength" && (
                                        <p className={contactStyles.error}>
                                        This field requires minimum length of 3 characters!
                                        </p>
                                    )}
                                    {errors.message &&
                                    errors.message.type === "maxLength" && (
                                        <p className={contactStyles.error}>
                                        This field requires maximum length of 1200 characters!
                                        </p>
                                    )}             
                            </div>        
                        </div>
                    </div>
                    <div className={contactStyles.buttonContainer}><button className={contactStyles.contactButton}>Submit</button></div>
                </form>
            </div>
        </div>
        
    )
}

export default Contact
