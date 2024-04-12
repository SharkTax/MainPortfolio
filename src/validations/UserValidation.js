import * as yup from "yup"

export const userSchema = yup.object().shape({
    name: yup.string().required("write your name"),
    email: yup.string().email().required("write an valid email"),
    text: yup.string().required()
})
