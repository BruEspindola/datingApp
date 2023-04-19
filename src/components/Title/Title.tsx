import { PrimaryTitle } from './style';
interface Props {
  title: string;
}

const Title = ({title}: Props) => {
  return <PrimaryTitle>{title}</PrimaryTitle>;
};
export {Title};
