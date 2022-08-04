import Button from 'components/Common/Button';
import Flex from 'components/Common/Flex';
import { AiOutlineCheck } from 'react-icons/ai';
import { TLoadDate } from 'store/accoutBook-Slice';
import { useAppSelector } from 'store/store';

interface SelectDateButtonProps {
  date: TLoadDate;
  onClick: (date: TLoadDate) => void;
}

const SelectDateBox = ({ date, onClick }: SelectDateButtonProps) => {
  const selectDate = useAppSelector(state => state.accountBook.selectDate);

  const handleClickButton = () => {
    onClick(date);
  };

  return (
    <>
      <Button
        onClick={handleClickButton}
        beSmall
      >
        {date.year}년 {date.month}월
      </Button>
      {selectDate.month === date.month && selectDate.year === date.year && (
        <Flex
          justifyContents="center"
          alignItems="center"
        >
          <AiOutlineCheck strokeWidth={30} />
        </Flex>
      )}
    </>
  );
};

export default SelectDateBox;
