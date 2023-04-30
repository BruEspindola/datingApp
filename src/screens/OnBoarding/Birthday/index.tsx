import {BackButton} from '@components/Button/BackButton';
import {Title} from '@components/Title';
import {SafeView} from '@style';
import {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {GradientButton} from '@components/Button/GradientButton';
import { Container, Input, Subtitle } from './style';

export const Birthday = ({navigation}: any) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <SafeView>
      <BackButton back={navigation} />
      <Title title="My birthday is" />
      <Container>
        <Input
          value={date.toDateString()}
          onPressIn={() => setOpen(true)}
        />
        <DatePicker
          mode="date"
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Subtitle>
          Your age will be public
        </Subtitle>
        <GradientButton
          Text="CONTINUE"
          onPress={() => navigation.push('Gender')}
        />
      </Container>
    </SafeView>
  );
};
