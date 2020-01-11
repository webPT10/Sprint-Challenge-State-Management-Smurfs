import React from 'react';
import { withFormik, Form, Field } from 'formik';
import axios from 'axios';

function FormComponent ({ values, errors, touched, isSubmitting }) {
    return (
        <Form>
            <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type='text' name='name' placeholder='name' />
            </div>

            <div>
                {touched.height && errors.height && <p>{errors.heigh}</p>}
                <Field type='text' name='height' placeholder='height' />
            </div>

            <div>
                {touched.age && errors.age && <p>{errors.age}</p>}
                <Field type='number' name='age' placeholder='age' />
            </div>

            <button type='submit' disabled={isSubmitting}>Submit</button>
        </Form>
    );
}

const FormikFormComponent = withFormik ({
    mapPropsToValues({ name, age, height }) {
        return {
            name: name || '',
            height: height || '',
            age: age || ''
        };
    },
    handleSubmit(values, { resetForm, setSubmitting }) {
        console.log('values into post are', values);
        axios
            .post('http://localhost:3333/smurfs', values)
            .then(response => {
                console.log(response);
                resetForm();
                setSubmitting(false);
            })
            .catch(error => {
                console.log(error);
                setSubmitting(false);
            });
        }
})(FormComponent);

export default FormikFormComponent;