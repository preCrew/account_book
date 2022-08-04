import Button from 'components/Common/Button';

export interface TMonthYear {
  year: number;
  month: number;
}
interface SelectDateButtonProps {
  date: TMonthYear;
  onClick: (date: TMonthYear) => void;
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
