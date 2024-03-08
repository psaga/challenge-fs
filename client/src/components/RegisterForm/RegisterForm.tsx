import styles from './component.module.css';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { UserForm } from '../../types';
import { useState } from 'react';

export const RegisterForm = () => {
  const [succeeded, setSucceeded] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<UserForm>();
  const createUser = async (userData: UserForm) => {
    try {
      const response = await fetch('api/users', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        const errorMessage = JSON.parse(data.message);
        if (errorMessage.field) {
          setError(errorMessage.field, {
            type: 'custom',
            message: errorMessage.message,
          });
        }
      } else {
        setSucceeded(true);
      }
    } catch (error) {
      console.error('Hubo un problema con la operación fetch:', error);
    }
  };
  return (
    <>
      {!succeeded ? (
        <form className={styles.form} onSubmit={handleSubmit((userData) => createUser(userData))}>
          <div>
            <label className={styles.fieldName}>Email</label>
            <input
              className={styles.formField}
              type="email"
              aria-label="Email"
              {...register('email', { required: 'Email es requerido' })}
            />
            <ErrorMessage as={<span className={styles.errorMessage} />} errors={errors} name="email" />
          </div>
          <div>
            <label className={styles.fieldName}>Nombre Completo</label>
            <input
              className={styles.formField}
              type="text"
              aria-label="Nombre Completo"
              {...register('fullName', {
                required: 'Nombre completo es requerido',
                pattern: {
                  value: /^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+$/,
                  message: 'El nombre solo puede contener letras y espacios.',
                },
              })}
            />
            <ErrorMessage as={<span className={styles.errorMessage} />} errors={errors} name="fullName" />
          </div>
          <div>
            <label className={styles.fieldName}>Edad</label>
            <input
              className={styles.formField}
              type="number"
              aria-label="Edad"
              {...register('age', {
                required: 'Edad es requerida',
                valueAsNumber: true,
              })}
            />
            <ErrorMessage as={<span className={styles.errorMessage} />} errors={errors} name="age" />
          </div>
          <div>
            <label className={styles.fieldName}>Nombre de usuario</label>
            <input
              className={styles.formField}
              type="text"
              aria-label="Nombre de usuario"
              {...register('username', {
                required: 'Nombre de usuario es requerido',
              })}
            />
            <ErrorMessage as={<span className={styles.errorMessage} />} errors={errors} name="username" />
          </div>
          <div>
            <label className={styles.fieldName}>País</label>
            <input
              className={styles.formField}
              type="text"
              aria-label="País"
              {...register('country', { required: 'País es requerido' })}
            />
            <ErrorMessage as={<span className={styles.errorMessage} />} errors={errors} name="country" />
          </div>
          <button type="submit" className={styles.submit} aria-label="Registrarse">
            Registrarse
          </button>
        </form>
      ) : (
        <div className={styles.welcome}>
          Bienvenido a Deli, te hemos enviado un email de confirmación a tu casilla de correo.
        </div>
      )}
    </>
  );
};
