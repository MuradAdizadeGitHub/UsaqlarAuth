import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
function Register() {
  const navigate = useNavigate()
  return (
    <>
    <section>
        <div className="logingeneral">
          <div className="leftlogin">
            <div>
              <p>Register</p>
            </div>

            <div>
              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={Yup.object({
                  email: Yup.string()
                    .email("Invalid email address")
                    .required("Required"),
                  password: Yup.string().required("Required"),
                })}
                onSubmit={(values) => {
                  fetch("http://localhost:3000/register/", {
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(values),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      navigate('/login')
                    
                    })
                    .catch(function (res) {
                      console.log(res);
                    });
                }}
              >
                <Form>
                  <label htmlFor="email">Email Address</label>
                  <Field name="email" type="email" />
                  <ErrorMessage name="email" />

                  <label htmlFor="password">Password</label>
                  <Field name="password" type="password" />
                  <ErrorMessage name="password" />

                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            </div>
            <div>
              <p>Do you already have an account?</p>
              <Link to={"/login"}>Login</Link>
            </div>
          </div>

          <div className="rightlogin"></div>
        </div>
      </section>
    </>
  )
}

export default Register
