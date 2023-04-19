import {SafeView} from '../../../GlobalStyle';
import {Container, Error, Input} from './style';
import {NextButton} from '../../../components/Button/NextButton';
import {Title} from '../../../components/Title/Title';
import {Formik, FormikHelpers} from 'formik';
import {validationName} from '../../../validations';
import { BackButton } from '../../../components/Button/BackButton';

interface Values {
  name: string;
}

export const Name = ({navigation}: any) => {
  const initialValues: Values = {
    name: '',
  };

  const onSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
    helpers.resetForm();
    navigation.navigate('Gender');
  };

  return (
    <SafeView>
     <BackButton back={navigation}/> 
      <Container>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationName}>
          {({handleChange, errors, touched, handleSubmit, values}) => (
            <>
              <Title title="What's your name?" />
              <Input value={values.name} onChangeText={handleChange('name')} />
              {errors.name && touched.name && <Error>{errors.name}</Error>}

              <NextButton onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </Container>
    </SafeView>
  );
};
