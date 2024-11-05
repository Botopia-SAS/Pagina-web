<<<<<<< HEAD
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  //service_5h93uqj

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_5h93uqj',
        'template_v8xt1a4',
        {
          from_name: form.name,
          to_name: 'Botopia',
          from_email: form.email,
          to_email: 'botopia.sas@gmail.com',
          message: form.message,
        },
        'W6EZWFENOrmXlCRcx',
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Gracias por tu mensaje 😃',
            type: 'succes',
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
            text: "No recibí tu mensaje 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img src="/assets/terminal.png" alt="terminal-bg" className="absolute inset-0 min-h-screen" />

        <div className="contact-container">
          <h3 className="head-text">Contáctanos</h3>
          <p className="text-lg text-white-600 mt-3">
          Necesitas soluciones tecnológicas en tu empresa, o quieres estar a la vanguardia de los nuevos avances, contáctanos estamos para ayudarte.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
            <label className="space-y-3">
              <span className="field-label">Nombre</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ejm., Botopia SAS"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Correo</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ejm., botopia.sas@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Mensaje</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Me gustaría hacer mi sueño realidad..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar'}

              <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
=======
import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

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
                from_name: form.from_name,
                to_name: 'JavaScript Mastery',
                from_email: form.from_email,
                to_email: 'botopia.sas@gmail.com',
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(
            () => {
                setLoading(false);
                alert('Thank you for your message 😃');
                setForm({
                    from_name: '',
                    from_email: '',
                    message: '',
                });
            },
            (error) => {
                setLoading(false);
                console.error(error);
                alert("I didn't receive your message 😢");
            }
        );
    };

    return (
        <section className="c-space my-20">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
                <div className="contact-container"> 
                    <h3 className="head-text">Contáctanos</h3>
                    <p className="text-lg text-white-600 mt-3">
                        Necesitas soluciones tecnológicas en tu empresa, o quieres estar a la vanguardia de los nuevos avances, contáctanos estamos para ayudarte.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7"> 
                        <label className="space-y-3">
                            <span className="field-label">Full name</span>
                            <input
                                type="text"
                                name="from_name"
                                value={form.from_name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Botopia"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input
                                type="email"
                                name="from_email"
                                value={form.from_email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Botopia@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Tu mensaje</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hola, estoy interesado en..."
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Enviando...' : 'Enviar'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="filed-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
>>>>>>> 45f1fe10da991ada229add5db4636508827a2d10
