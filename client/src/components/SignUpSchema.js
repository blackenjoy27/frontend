import * as yup from 'yup'

const signUpSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required')
        .min(4, 'Username must be 4 characters long'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters long'),
    termsOfService: yup.boolean()
})

export default signUpSchema