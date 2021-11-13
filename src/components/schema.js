import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("You must have a name !")
    .min(2, "Name must be at least 2 characters"),
  type: yup.string().required("You gotta choose a pizza."),
  size: yup
    .string()
    .oneOf(["12-inch", "8-inch", "4-inch"], "Size is required!!!"),
});

export default formSchema;
