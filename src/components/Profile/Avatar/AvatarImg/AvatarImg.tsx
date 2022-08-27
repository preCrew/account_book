import { useAppSelector } from 'store/store';
import { AvatarInnerImg } from './AvatarImg.style';
import AvatarUserIcon from '../AvatarUserIcon';
import { avatarData } from './data';

interface AvatarImgProps {
  size: string;
}

const AvatarImg = ({ size }: AvatarImgProps) => {
  const { userInfo } = useAppSelector(state => state.user);
  const myAvatar = avatarData[userInfo.character as number];

  //기본:0 외국인:1 루피:2
  const avatarSetting = () => {
    const myBudget = userInfo.budget;
    const myTotalExpense = 0;

    if (myBudget > myTotalExpense) {
      return myAvatar.good;
    }
    if (myBudget < myTotalExpense) {
      return myAvatar.bad;
    }
    return myAvatar.soso;
  };

  return (
    <>
      {userInfo.character === 0 ? (
        <AvatarUserIcon size={size} />
      ) : (
        <AvatarInnerImg styleBg={avatarSetting()}></AvatarInnerImg>
      )}
    </>
  );
};

export default AvatarImg;
