import * as yup from "yup";

export const initialValues = {
  name: "",
  email: "",
  topic: "",
  message: "",
};

export const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  topic: yup
    .string()
    .min(5, "Topic is too short")
    .max(50, "Topic is too long")
    .required("Topic is required"),
  message: yup
    .string()
    .min(5, "Message is too short")
    .max(1000, "Message is too long")
    .required("Message is required"),
});