import { useAppSelector } from 'store/store';
import { AvatarInnerImg } from './AvatarImg.style';
import AvatarUserIcon from '../AvatarUserIcon';
import { avatarData } from './data';
import { useEffect } from 'react';

interface AvatarImgProps {
  size: string;
}

const AvatarImg = ({ size }: AvatarImgProps) => {
  const { userInfo } = useAppSelector(state => state.user);
  const myAvatar = avatarData[userInfo.character as number];
  const { receipts } = useAppSelector(state => state.accountBook);
  const MonthSpending =
    receipts &&
    receipts
      .map(receipt => receipt.spending)
      .reduce((acc, current) => acc! + current!, 0);

  //기본:0 외국인:1 루피:2
  const avatarSetting = () => {
    const myBudget = userInfo.budget;
    // 1. 마이너스 상태 2. 예산의 반보다 덜쓴 상태 3. 예산의 반 보다 더쓴 상태
    if (0 > myBudget + MonthSpending!) {
      return myAvatar.bad;
    }
    if (myBudget / 2 < myBudget + MonthSpending!) {
      return myAvatar.good;
    }
    if (myBudget / 2 > myBudget + MonthSpending!) {
      return myAvatar.soso;
    }
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
