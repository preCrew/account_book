import Flex from 'components/Common/Flex';
import React, { forwardRef } from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import { SelectDateButton, StyledSelectDateBox } from './CheckList.style';

interface SelectDateButtonProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  selectCondition: boolean;
  children: React.ReactNode;
}

const SelectDateBox = forwardRef(
  (
    { onClick, selectCondition, children }: SelectDateButtonProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      // 현재 조건이 맞을경우 ref를 부모에게 넘겨줌.
      <StyledSelectDateBox
        ref={selectCondition ? ref : null}
        onClick={onClick}
      >
        <SelectDateButton
          justifyContent="flex-start"
          beSmall
        >
          {children}
        </SelectDateButton>

        {/* 조건에 부합하다면 체크박스를 생성함 */}
        {selectCondition && (
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
