import React, { useMemo, useState } from 'react';
import {
  AddReceiptModalFooterButton,
  AddReceiptModalFooterContainer,
  AddReceiptTable,
  AmountInput,
} from './AddReceiptModal.style';
import SubmitBtn from '../../../Button/Button';
import moment from 'moment';
import { Tdata } from './AddReceiptModal';
import useAccountBook from 'store/hooks/useAccountBook';
import { TReceipt } from 'store/reducers/accoutBook-Slice';
import { AiFillDelete } from 'react-icons/ai';
import { useAppSelector } from 'store/store';
interface AddReceiptFormProps {
  data: Tdata;
  onClose: () => void;
  // receipt?: TReceipt;
  date?: {
    month: number;
    date: number;
  };
  update?: boolean;
  // id?: number;
}

const AddReceiptForm = ({
  data,
  onClose,
  date,
  update,
}: AddReceiptFormProps) => {
  console.log('form');
  const { addReceipt, deleteReceipt, updateReceipt } = useAccountBook();
  const receipt = useAppSelector(state =>
    state.accountBook.receipts.find(
      receipt => receipt.id === state.accountBook.selectId,
    ),
  );

  const [state, setState] = useState({
    amount: update
      ? (receipt?.spending as number) ?? (receipt?.income as number)
      : '',
    account: update ? receipt?.transactionBranch : '',
    group: update ? (receipt?.spending ? '지출' : '수입') : data.group[0],
    category: update ? receipt?.category : data.category[0],
    payment: update ? receipt?.paymentMethod : data.payment[0],
  });

  const currentTime = useMemo(() => {
    const time = moment();
    !update && date && time.month((date?.month as number) - 1);
    !update && date && time.date(date?.date as number);
    return time;
  }, [date, update]);

  const onSubmitReceipt = (e: React.FormEvent) => {
    e.preventDefault();

    if (state.amount === '') {
      return alert('지출 금액을 입력해주세요');
    }
    if (state.account === '') {
      return alert('거래처를 입력해주세요');
    }

    const currentObj = currentTime.toObject();
    const responseObj: TReceipt = {
      category: state.category as string,
      paymentMethod: state.payment,
      transactionBranch: state.account as string,
      timeDate: {
        year: currentObj.years,
        month: receipt?.timeDate.month ?? currentObj.months + 1,
        date: receipt?.timeDate.date ?? currentObj.date,
        hours: currentObj.hours,
        minutes: currentObj.minutes,
      },
    };

    if (state.group === '지출') {
      responseObj.spending = Math.abs(state.amount as number) * -1; //(amount as unknown as number) * -1;
      responseObj.income = null;
    }
    if (state.group === '수입') {
      responseObj.spending = null;
      responseObj.income = Math.abs(state.amount as number) * 1; //unknown as number) * 1;
    }

    if (receipt) {
      updateReceipt(receipt?.id as number, responseObj);
    } else {
      addReceipt(responseObj);
    }
    onClose();
  };

  const handleClickDelete = () => {
    deleteReceipt(receipt?.id as number);
    onClose();
  };

  const handleChangeInputOrSelect = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setState(beforeState => ({
      ...beforeState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form>
      <AmountInput>
        <input
          name="amount"
          type="number"
          value={state.amount}
          onChange={handleChangeInputOrSelect}
          autoFocus
        />
        <span>원</span>
      </AmountInput>
      <AddReceiptTable>
        <tbody>
          <tr>
            <th>분류</th>
            <td>
              <select
                name="group"
                value={state.group}
                onChange={handleChangeInputOrSelect}
              >
                {data.group.map(option => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th>카테고리</th>
            <td>
              <select
                name="category"
                value={state.category}
                onChange={handleChangeInputOrSelect}
              >
                {data.category.map(option => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <th>거래처</th>
            <td>
              <input
                name="account"
                type="text"
                value={state.account}
                onChange={handleChangeInputOrSelect}
              />
            </td>
          </tr>
          <tr>
            <th>날짜</th>
            <td>
              {receipt
                ? moment(
                    `${receipt?.timeDate.year}-
                    ${receipt?.timeDate.month}-
                    ${receipt?.timeDate.date}
                    ${receipt?.timeDate.hours}:
                    ${receipt?.timeDate.minutes}`,
                  ).format('YYYY-MM-DD HH:mm:ss')
                : currentTime.format('YYYY-MM-DD HH:mm:ss')}
            </td>
          </tr>
          <tr>
            <th>결제수단</th>
            <td>
              <select
                name="payment"
                value={state.payment as string}
                onChange={handleChangeInputOrSelect}
              >
                {data.payment.map(option => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            </td>
          </tr>
        </tbody>
      </AddReceiptTable>
      <AddReceiptModalFooterContainer>
        {receipt && (
          <AddReceiptModalFooterButton onClick={handleClickDelete}>
            <AiFillDelete />
          </AddReceiptModalFooterButton>
        )}
        <SubmitBtn
          size="full"
          onClick={onSubmitReceipt}
        >
          저장하기
        </SubmitBtn>
      </AddReceiptModalFooterContainer>
    </form>
  );
};

export default React.memo(AddReceiptForm);
