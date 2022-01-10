import React, { useState } from "react";
import { Stack, Container, Form, Button } from "react-bootstrap";
import './Scss/Logueo.scss'
import firebaseApp from "../credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Logueo = () => {
  const [estaRegistrandose, setEstaRegistrandose] = useState(false);

  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const contra = e.target.formBasicPassword.value;

    if (estaRegistrandose) {
      //si se registra
      // eslint-disable-next-line no-unused-vars
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      );
    } else {
      // si está iniciando sesión
      signInWithEmailAndPassword(auth, correo, contra);
    }
  }

  return (
    <Container className="container">
      <Stack gap={3}>
        <h1 className="titulo" >{estaRegistrandose ? "Regístrate" : "Iniciar sesión como Docente-Administrador"}</h1>
        <Form  onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo Electrónico:</Form.Label>
            <Form.Control  type="email" placeholder="Ingrese su correo" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" />
          </Form.Group>

          <Button id="btn1" variant="dark" type="submit">
            {estaRegistrandose ? "Regístrate" : "Iniciar sesión"}
          </Button>
        </Form>
        <Button id="btn2"
          variant="primary"
          type="submit"
          onClick={() => signInWithRedirect(auth, googleProvider)}
        >
          Acceder con Google
        </Button>
    
        <Button id="btn1"
          variant="secondary"
          onClick={() => setEstaRegistrandose(!estaRegistrandose)}
        >
          {estaRegistrandose
            ? "¿Ya tienes cuenta? Inicia sesión"
            : "¿No tienes cuenta? Regístrate"}
        </Button>
      </Stack>
    </Container>
  );
};

export default Logueo;
