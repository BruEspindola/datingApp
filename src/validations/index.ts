import * as Yup from 'yup';

export const validationName = Yup.object().shape({
  name: Yup.string().required('Name is required').label('name')
});