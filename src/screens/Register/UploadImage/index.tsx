import {SafeView} from '../../../GlobalStyle';
import {BackButton} from '../../../components/Button/BackButton';
import {Title} from '../../../components/Title/Title';
import {CardUpload} from '../../../components/Card/Upload';
import {BigCard, Container, DownCard, MiniCard} from './style';
import {NextButton} from '../../../components/Button/NextButton';

export const UploadImage = ({navigation}: any) => {
  return (
    <SafeView>
      <BackButton back={navigation} />
      <Title title="Upload your photos" />
      <Container>
        <BigCard>
          <CardUpload index={1} Primary />
          <DownCard>
            <CardUpload index={6} />
            <CardUpload index={5} />
          </DownCard>
        </BigCard>
        <MiniCard>
          <CardUpload index={2} />
          <CardUpload index={3} />
          <CardUpload index={4}/>
        </MiniCard>
      </Container>
      <NextButton onPress={() => navigation.navigate('First')} />
    </SafeView>
  );
};
