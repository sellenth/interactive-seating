import React, { ReactElement, useEffect, useState, useCallback } from "react";
import { postRequest } from "utils/APIcalls";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import * as Yup from "yup";
import Col from "react-bootstrap/Col";

/*
export function TestEnv() {
  //const jurors = generateJurors(8);
  //const layout = createLayoutFromJurors(jurors);

  const [ jurors, setJurors ] = useState([]);
  const [ layout, setLayout ] = useState([]);
  useEffect(() => {
    fetchJurors(setJurors, setLayout);
  }, [])


  return (
    <CardView layout={layout} jurors={jurors}/>
  )
}
*/

export default function Seating(): ReactElement {
  const URL = "http://localhost:8000/api/auth/jwt/create";
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [postData, setPostData] = useState(null);

  return (
    <Formik
      validationSchema={Yup.object({
        username: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        password: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
        postRequest(URL, values);
        const storedToken: string | null = localStorage.getItem("accessToken");
        console.log(storedToken);
      }}
      initialValues={{
        username: "",
        password: "",
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                isInvalid={touched.username && !!errors.username}
              />
              <Form.Control.Feedback type="invalid">
                {errors.username}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isInvalid={touched.password && !!errors.password}
              />

              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form.Row>
        </Form>
      )}
    </Formik>
  );
}

/*
  const [
    { data: getData, loading: getLoading, error: getError },
    executeGet,
  ] = useAxios(
    {
      url: "http://localhost:8000/api/jurors/ex-case",
      method: "GET",
    },
    { manual: true }
  );

  if (postData !== undefined && working === false) {
    setWorking(true);
    console.log(postData);
    Axios.defaults.headers.common["Authorization"] = "JWT " + postData.access;
    try {
      executeGet();
    } catch (err) {
      console.log("her");
      console.log(err);
      console.log(getError);
    }
  }
  */
