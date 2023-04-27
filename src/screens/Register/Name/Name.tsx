import {SafeView} from '../../../GlobalStyle';
import {Container, Error, Input} from './style';
import {NextButton} from '@components/Button/NextButton';
import {Title} from '@components/Title';
import {Formik, FormikHelpers} from 'formik';
import {validationName} from '@validations';
import {BackButton} from '@components/Button/BackButton';
import {atomName} from '@context';
import {useAtom} from 'jotai';

interface Values {
  name: string;
}

export const Name = ({navigation}: any) => {
  const [name, setName] = useAtom(atomName);

  const initialValues = {
    name: name,
  };

  const onSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
    setName(values.name)
    helpers.resetForm();
    navigation.navigate('Gender');
  };

  return (
    <SafeView>
      <BackButton back={navigation} />
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
