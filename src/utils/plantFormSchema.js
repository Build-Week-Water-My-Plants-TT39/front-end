import * as yup from 'yup';

export default yup.object().shape({
  nickname: yup.string().required('nickname required').min(2),
  species: yup
    .string()
    .required('species required')
    .matches(/[a-zA-Z]/, 'Species can only contain letters'),
  h2oFrequency: yup.string().required('every plant needs water!'),
});
