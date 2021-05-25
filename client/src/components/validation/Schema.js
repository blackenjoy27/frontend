import * as yup from 'yup'

export default yup.object().shape({
    eventName: yup
        .string(),
    date: yup
        .string(),
    time: yup
        .string(),
    state: yup
        .string(),
    city: yup
        .string(),
    streetAddress: yup
        .string(),
    zip: yup
        .string(),
    maxAttendee: yup
        .string(),
})