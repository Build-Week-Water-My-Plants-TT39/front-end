import * as yup from 'yup'

export default yup.object().shape({
username: yup
.string()
.required('Must have a Username')
.min(5, 'Username must be at least 5 characters'),
password: yup.string()
.required('Password is required.')
.matches(
/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g,
'Password must contain capital, lowercase, number & have a min. length of 8'
)
})
