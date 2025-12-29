import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './Contact.module.css';

// Esquema de segurança: Impede campos vazios e formatos de e-mail inválidos
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Nome muito curto')
    .max(50, 'Nome muito longo')
    .required('Obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('Obrigatório'),
  message: Yup.string()
    .min(10, 'A mensagem deve ter pelo menos 10 caracteres')
    .required('Obrigatório'),
});

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const formik = useFormik({
    initialValues: { name: '', email: '', service: '', message: '' },
    validationSchema: ContactSchema,
    onSubmit: async (values) => {
      setStatus('sending');
      try {
        // Exemplo usando Formspree (Seguro, gratuito e oculta seu e-mail real)
        const response = await fetch("https://formspree.io/f/SEU_ID_AQUI", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setStatus('success');
          formik.resetForm();
        } else {
          setStatus('error');
        }
      } catch (error) {
        setStatus('error');
      }
    },
  });

  return (
    <motion.div 
      className={styles.contactPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Contato</h1>
          <p>Vamos criar algo incrível juntos.</p>
        </div>

        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              {...formik.getFieldProps('name')}
              className={formik.touched.name && formik.errors.name ? styles.inputError : ''}
            />
            {formik.touched.name && formik.errors.name && <span className={styles.error}>{formik.errors.name}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="email"
              {...formik.getFieldProps('email')}
              className={formik.touched.email && formik.errors.email ? styles.inputError : ''}
            />
            {formik.touched.email && formik.errors.email && <span className={styles.error}>{formik.errors.email}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              rows={5}
              {...formik.getFieldProps('message')}
              className={formik.touched.message && formik.errors.message ? styles.inputError : ''}
            />
            {formik.touched.message && formik.errors.message && <span className={styles.error}>{formik.errors.message}</span>}
          </div>
          <div className={styles.field}>
            <label htmlFor="service">Interesse</label>
            <select
              id="service"
              {...formik.getFieldProps('service')}
              className={styles.selectField}
            >
              <option value="" disabled>Selecione um serviço</option>
              <option value="retratos">Retratos</option>
              <option value="paisagens">Fine Art / Paisagens</option>
              <option value="evento">Eventos</option>
              <option value="outros">Outros</option>
            </select>
          </div>

          <button type="submit" disabled={status === 'sending'} className={styles.submitBtn}>
            {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR MENSAGEM'}
          </button>

          {status === 'success' && <p className={styles.successMsg}>Mensagem enviada com sucesso!</p>}
          {status === 'error' && <p className={styles.errorMsg}>Ocorreu um erro. Tente novamente.</p>}
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;