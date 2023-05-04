import {SafeView} from '@style';
import {Image} from 'react-native';
import {Character, getAllCharacter} from '@services';
import {useEffect, useState} from 'react';
import {Card} from '@components/Card';
import {TinderButton} from '@components/Button/TinderButton';
import Swiper from 'react-native-deck-swiper';

export const Home = () => {
  const [characters, setCharacter] = useState<[] | Character[]>([]);

  useEffect(() => {
    (async () => {
      const character = await getAllCharacter();
      setCharacter(character);
    })();
  }, []);

  return (
    <SafeView>
      <Image
        style={{alignSelf: 'center', top: 50}}
        source={require('@images/HomeLogo.png')}
      />

      <Swiper
        backgroundColor="transparent"
        cardVerticalMargin={80}
        stackSize={3}
        stackSeparation={15}
        overlayLabels={{
          left: {
            title: 'NOPE',
            style: {
              label: {
                backgroundColor: 'transparent',
                color: '#f1606a',
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 150,
                marginLeft: -20,
              },
            },
          },
          right: {
            title: 'LIKE',
            style: {
              label: {
                backgroundColor: 'transparent',
                color: '#73ECDD',
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 150,
                marginLeft: 30,
              },
            },
          },
          top: {
            title: 'SUPER LIKE',
            style: {
              label: {
                backgroundColor: 'transparent',
                color: '#62BAF3',
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              },
            },
          },
        }}
        cards={characters}
        renderCard={card => {
          return (
            <>
              <Card Character={card} />
              <TinderButton />
            </>
          );
        }}
      />
    </SafeView>
  );
};
