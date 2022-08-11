import { BsPersonCircle } from 'react-icons/bs';

interface AvatarUserIconProps {
  size: string;
}
const AvatarUserIcon = ({ size }: AvatarUserIconProps) => {
  return (
    <BsPersonCircle
      fontSize={size}
      color="gray"
    />
  );
};

export default AvatarUserIcon;
