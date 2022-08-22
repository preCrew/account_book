import { useAppSelector } from 'store/store';
import { AvatarInnerImg } from './AvatarImg.style';
import AvatarUserIcon from '../AvatarUserIcon';

interface AvatarImgProps {
  size: string;
}

const AvatarImg = ({ size }: AvatarImgProps) => {
  const { userInfo, avatar } = useAppSelector(state => state.user);
  const myAvatar = avatar[userInfo.character as number];
  console.log(avatar);
  //userInfo 0 -> 외국인 1-> 루피
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
      {userInfo.character === null ? (
        <AvatarUserIcon size={size} />
      ) : (
        <AvatarInnerImg styleBg={avatarSetting()}></AvatarInnerImg>
      )}
    </>
  );
};

export default AvatarImg;
