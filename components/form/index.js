import React, { useContext } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import HomeContext from "../../context/home/HomeContext";
import { phoneRegExp } from "../../utils";

import styles from "./form.module.scss";
import LightBox from "../lightbox";

/**
 * Desc: Send data to backend api
 * Schema validation
 */

const Form = () => {
  const homeContext = useContext(HomeContext);
  const { success, registerUser } = homeContext;

  const formik = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      numero: "",
      age: ""
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("El nombre es obligatorio"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es obligatorio"),
      numero: Yup.string()
        .matches(phoneRegExp, "El numero de telefono no es válido")
        .required("El numero es obligatorio")
        .min(8, "El numero debe contener al menos 8 caracteres"),
      age: Yup.number()
        .required("Indique su edad")
        .typeError("Debes especificar un numero válido")
        .min(18, "Debes tener como minimo 18 años")
        .max(100, "Debes tener como maximo 100 años")
    }),
    onSubmit: (values, formikHelpers) => {
      registerUser(values);
      formikHelpers.resetForm();
    }
  });

  return (
    <div className={styles.form}>
      {success && <LightBox />}
      <form
        className=""
        onSubmit={formik.handleSubmit}
        className={styles.formContent}
      >
        <div className="mb-4">
          <label htmlFor="nombre" className="">
            Nombre:
          </label>
          <input
            id="nombre"
            placeholder="Nombre de usuario"
            type="text"
            className=""
            value={formik.values.nombre}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.nombre && formik.errors.nombre ? (
          <div className={styles.container}>
            <p className={styles.errors}>Error</p>
            <p className={styles.errors}> {formik.errors.nombre} </p>
          </div>
        ) : null}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-black text-sm font-bold mb-2"
          >
            Email:
          </label>
          <input
            id="email"
            placeholder="Email de usuario"
            type="email"
            className=""
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className={styles.container}>
            <p className={styles.errors}>Error</p>
            <p className={styles.errors}> {formik.errors.email} </p>
          </div>
        ) : null}
        <div className="">
          <label htmlFor="numero" className="">
            Numero Teléfono:
          </label>
          <input
            id="numero"
            placeholder="Numero de usuario"
            type="text"
            className=""
            value={formik.values.numero}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.numero && formik.errors.numero ? (
          <div className={styles.container}>
            <p className={styles.errors}>Error</p>
            <p className={styles.errors}> {formik.errors.numero} </p>
          </div>
        ) : null}

        <div className="">
          <label htmlFor="age" className="">
            Edad:
          </label>
          <input
            id="age"
            placeholder="Edad de usuario"
            type="text"
            className=""
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.age && formik.errors.age ? (
          <div className={styles.container}>
            <p className={styles.errors}>Error</p>
            <p className={styles.errors}> {formik.errors.age} </p>
          </div>
        ) : null}

        <input
          type="submit"
          className={styles.buttonForm}
          value="Crear cuenta"
          disabled={formik.isSubmitting || formik.isValidating}
        />
      </form>
    </div>
  );
};

export default Form;
