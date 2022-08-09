import Flex from 'components/Common/Flex';
import { forwardRef, useMemo } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { TYearMonth } from 'store/reducers/accoutBook-Slice';
import { useAppSelector } from 'store/store';
import { SelectDateButton, StyledSelectDateBox } from './SelectDateBox.style';

interface SelectDateButtonProps {
  date: TYearMonth;
  onClick: (date: TYearMonth) => void;
}

const SelectDateBox = forwardRef(
  (
    { date, onClick }: SelectDateButtonProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const selectDate = useAppSelector(state => state.accountBook.selectDate);
    const isSelectDate = useMemo(
      () => selectDate.month === date.month && selectDate.year === date.year,
      [date.month, date.year, selectDate.month, selectDate.year],
    );

    const handleClickButton = () => {
      onClick(date);
    };

    return (
      // 현재 선택한 년, 월이 맞을경우 ref를 부모에게 넘겨줌.
      <StyledSelectDateBox
        ref={isSelectDate ? ref : null}
        onClick={handleClickButton}
      >
        <SelectDateButton
          justifyContent="flex-start"
          beSmall
        >
          {date.year}년 {date.month}월
        </SelectDateButton>

        {isSelectDate && (
          <Flex
            justifyContents="center"
            alignItems="center"
          >
            <AiOutlineCheck strokeWidth={30} />
          </Flex>
        )}
      </StyledSelectDateBox>
    );
  },
);
SelectDateBox.displayName = 'SelectDateBox';

export default SelectDateBox;
