import {SafeView} from '../../../GlobalStyle';
import {NextButton} from '../../../components/Button/NextButton';
import {Title} from '../../../components/Title/Title';
import {Container, ContainerPill, TitlePill} from './style';
import {useEffect, useState} from 'react';
import { BackButton } from '../../../components/Button/BackButton';

const listInterest = [
  {
    id: 1,
    name: 'Gaming',
  },
  {
    id: 2,
    name: 'Dancing',
  },
  {
    id: 3,
    name: 'Language',
  },
  {
    id: 4,
    name: 'Music',
  },
  {
    id: 5,
    name: 'Movie',
  },
  {
    id: 6,
    name: 'Photography',
  },
  {
    id: 7,
    name: 'Archtecture',
  },
  {
    id: 8,
    name: 'Fashion',
  },
  {
    id: 9,
    name: 'Book',
  },
  {
    id: 10,
    name: 'Writing',
  },
  {
    id: 11,
    name: 'Nature',
  },
  {
    id: 12,
    name: 'Painting',
  },
  {
    id: 13,
    name: 'Football',
  },
  {
    id: 14,
    name: 'People',
  },
  {
    id: 15,
    name: 'Animals',
  },
  {
    id: 16,
    name: 'Gym & Fitness',
  },
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
  }, []);

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
        <BackButton back={navigation}/>
        <Title title="Select up to 5 interests" />
        <Container>
          {listInterest.map(item => (
            <RenderItem key={item.id} item={item} />
          ))}
        </Container>
        <NextButton onPress={() => navigation.navigate('First')} />
      </SafeView>
    </>
  );
};
