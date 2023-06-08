import classes from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, schema } from "./config";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className={classes.formInput}>
            <label htmlFor="name">Name</label>
            <Field type="string" name="name" placeholder="Enter your name..." />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={classes.formInput}>
            <label htmlFor="email">Email</label>
            <Field
              type="string"
              name="email"
              placeholder="Enter your email..."
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className={classes.formInput}>
            <label htmlFor="topic">Subject</label>
            <Field
              type="string"
              name="Subject"
              placeholder="Subject"
            />
            <ErrorMessage name="topic" component="div" />
          </div>
          <div className={classes.formInput}>
            <label htmlFor="message">Message</label>
            <Field
              type="string"
              name="message"
              component="textarea"
              placeholder="Tell me what your project or questions is about"
              rows={3}
            />
            <ErrorMessage name="message" component="div" />
          </div>
          <div className={classes.formInput}>
            <button
              type="submit"
              disabled={isSubmitting}
              className={classes.formButton}
            >
              <span>Send it</span>
              <FaArrowRight />
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
