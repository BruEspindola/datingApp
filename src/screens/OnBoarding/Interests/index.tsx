import {SafeView} from '@style';
import {Title} from '@components/Title';
import {Container, ContainerPill, TitlePill} from './style';
import {useEffect, useState} from 'react';
import {BackButton} from '../../../components/Button/BackButton';
import {GradientButton} from '@components/Button/GradientButton';

const listInterest = [
  {id: 1, name: '90s Kid'},
  {id: 2, name: 'Harry Potter'},
  {id: 3, name: 'SoundCloud'},
  {id: 4, name: 'Spa'},
  {id: 5, name: 'Self Care'},
  {id: 6, name: 'Heavy Metal'},
  {id: 7, name: 'House Parties'},
  {id: 8, name: 'Gin Tonic'},
  {id: 9, name: 'Gymnastics'},
  {id: 10, name: 'Hapkido'},
  {id: 11, name: 'Hot Yoga'},
  {id: 12, name: 'Meditation'},
  {id: 13, name: 'Spotify'},
  {id: 14, name: 'Sushi'},
  {id: 15, name: 'Hockey'},
  {id: 16, name: 'Basketball'},
  {id: 17, name: 'Slam Poetry'},
  {id: 18, name: 'Home Workout'},
  {id: 19, name: 'Aquarium'},
  {id: 20, name: 'Sneakers'},
  {id: 21, name: 'Instagram'},
  {id: 22, name: 'Walking'},
  {id: 23, name: 'Hot Springs'},
  {id: 24, name: 'Running'},
  {id: 25, name: 'Travel'},
];

type ItemProps = {
  id: number;
  name: string;
};

export const Interests = ({navigation}: any) => {
  const [selectId, setSelectId] = useState<number[]>([]);
  const [hasMaxSelections, setHasMaxSelections] = useState(false);

  useEffect(() => {
    if (selectId.length >= 5) {
      setHasMaxSelections(true);
    } else {
      setHasMaxSelections(false);
    }
  });

  const handleItemPress = (id: number) => {
    const isSelected = selectId.includes(id);
    if (isSelected) {
      setSelectId(selectId.filter(selectId => selectId !== id));
    } else if (!hasMaxSelections) {
      setSelectId([...selectId, id]);
    }
  };

  const RenderItem = ({item}: {item: ItemProps}) => {
    const isSelected = selectId.includes(item.id);
    return (
      <ContainerPill
        onPress={() => handleItemPress(item.id)}
        isSelected={isSelected}>
        <TitlePill isSelected={isSelected}>{item.name}</TitlePill>
      </ContainerPill>
    );
  };

  return (
    <>
      <SafeView>
        <BackButton back={navigation} />
        <Title title="Interests" />
        <Container>
          {listInterest.map(item => (
            <RenderItem key={item.id} item={item} />
          ))}
        </Container>
        <GradientButton
          onPress={() => navigation.push('Welcome')}
          Text={`CONTINUE ${selectId.length.toString()}/5`}
          disabled={!hasMaxSelections}
        />
      </SafeView>
    </>
  );
};
