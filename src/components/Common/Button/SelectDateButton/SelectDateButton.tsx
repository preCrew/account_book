import Button from 'components/Common/Button';
import { TLoadDate } from 'store/accoutBook-Slice';

interface SelectDateButtonProps {
  date: TLoadDate;
  onClick: (date: TLoadDate) => void;
}

const SelectDateButton = ({ date, onClick }: SelectDateButtonProps) => {
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
    </>
  );
};

export default SelectDateButton;
