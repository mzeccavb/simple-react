import React from 'react';
import { Formik, Field, Form } from 'formik';

export function TestForm({ user }) {
    return (
      <div>
        <h1>Edit User</h1>
        <Formik
          initialValues={user /** { email, social } */}
          onSubmit={(values, actions) => {
            console.log("SUBMITTING->" + JSON.stringify(values));
            actions.setSubmitting(false);
          }}
          render={({ errors, touched, isSubmitting }) => (
            <Form>
              <Field type="email" name="email" />
              {errors.email && touched.social.email && <div>{errors.email}</div>}
              <Field type="text" name="social.facebook" />
              {errors.social && errors.social.facebook && touched.social.facebook && <div>{errors.social.facebook}</div>}
              <Field type="text" name="social.twitter" />
              {errors.social && errors.social.twitter && touched.social.twitter && <div>{errors.social.twitter}</div>}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        /> {/* end of Formik */}
      </div>
    );
  }