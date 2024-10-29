adoimport React from "react"
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';


const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading]= useState (false)

    const [form, setForm] = useState({

        Nombre:'',
        Correo:'',
        Mensaje:''
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'JavaScript Mastery',
          from_email: form.email,
          to_email: 'sujata@jsmastery.pro',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };
    return (

        <section className="c-space my-20">
            <div className="relative min-h-screen flex
            items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal
                background" className="absolute inset-0 min-h-screen"></img>
                <div className="contact-container"> 
                <h3 className="head-text">Contáctanos</h3>
                <p className="text-lg text-white-600
                mt-3"> Necesitas soluciones tecnológicas en tu empresa,
                o quieres estar a la vanguardia de los nuevos avances,
                contáctanos estamos para ayudarte.</p>

                <form ref={formRef} onSubmit={handleSubmit}
                className="mt-12 flex flex-col space-y-7"> 
                <label className="space-y-3">
                    <span className="field-label"> Full name 
                        </span>

                        <input

                         type="text"
                         name="name"
                         value={form.name}
                         onChange={handleChange}
                         required
                         className="field-input"
                         placeholder="Botopia"
                         >
                        </input>
                        </label>

                        <label className="space-y-3">
                    <span className="field-label"> Email
                        </span>

                        <input

                         type="email"
                         name="email"
                         value={form.email}
                         onChange={handleChange}
                         required
                         className="field-input"
                         placeholder="Botopia.sas@gmail.com"
                         >
                        </input>
                        </label>

                        <label className="space-y-3">
                    <span className="field-label"> Tu mensaje 
                        </span>

                        <textarea
                         name="mensaje"
                         value={form.message}
                         onChange={handleChange}
                         required
                         rows={5}
                         className="field-input"
                         placeholder="Hola, estoy interesado en..."
                         >
                  
                        </textarea>
                        </label>

                        <button className="field-btn" type="submit"
                        disabled={loading}>

                            {loading ? 'enviando...' : 'mensaje enviado'}

                            <img src="/assets/arrow-up.png" alt= "arrow-up" 
                            className="filed-btn_arrow" > 
                            
                            </img>

                        </button>
                </form>
                </div>
            </div>

        
            
            </section>
    )
}

export default Contact
