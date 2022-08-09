import { useAppSelector } from 'store/store';
import { AvatarInnerImg } from './AvatarImg.style';

interface AvatarImgProps {}

const AvatarImg = ({}: AvatarImgProps) => {
  const { userInfo } = useAppSelector(state => state.user);
  // const { characrter1, characrter2 } = useAppSelector(
  //   state => state.user.avatar,
  // );

  // const avatarSetting = () => {
  //   const myBudget = userInfo.budget;
  //   const myTotalExpense = userInfo.totalExpense;
  //   if (myBudget > myTotalExpense) {
  //     return good;
  //   }
  //   if (myBudget < myTotalExpense) {
  //     return bad;
  //   }
  //   return soso;
  // };
  return <></>;
  // return <AvatarInnerImg styleBg={avatarSetting()}></AvatarInnerImg>;
};

export default AvatarImg;
