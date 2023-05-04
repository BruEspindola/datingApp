import {BackButton} from '@components/Button/BackButton';
import {GradientButton} from '@components/Button/GradientButton';
import {Title} from '@components/Title';
import {atomName} from '@context';
import {SafeView} from '@style';
import {validationName} from '@validations';
import {Formik, FormikHelpers} from 'formik';
import {useAtom} from 'jotai';
import {View} from 'react-native';
import {ContainerButton, Error, Input, Subtitle} from './style';
import { firebase } from '@react-native-firebase/auth';

interface Values {
  name: string;
}

export const Fourth = ({navigation}: any) => {
  const [name, setName] = useAtom(atomName);

  const initialValues = {
    name: '',
  };

  const onSubmit = async (values: Values, helpers: FormikHelpers<Values>) => {
    setName(values.name);

    await firebase.auth().currentUser?.updateProfile({displayName: name})
   
    navigation.navigate('Birthday');
  };

  return (
    <SafeView>
      <BackButton back={navigation} />
      <Title title="My first name is" />
      <View>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationName}>
          {({handleChange, errors, touched, handleSubmit, values}) => (
            <>
              <Input onChangeText={handleChange('name')} />
              {errors.name && touched.name && <Error>{errors.name}</Error>}

              <Subtitle>
                This is how it will appear in Tinder and you will not be able to
                change it
              </Subtitle>
              <ContainerButton>
                <GradientButton Text="CONTINUE" onPress={handleSubmit} />
              </ContainerButton>
            </>
          )}
        </Formik>
      </View>
    </SafeView>
  );
};
