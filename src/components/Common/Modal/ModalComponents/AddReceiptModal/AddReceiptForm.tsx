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
import { shallowEqual } from 'react-redux';

interface AddReceiptFormProps {
  data: Tdata;
  onClose: () => void;
  update?: boolean;
}

const AddReceiptForm = ({ data, onClose, update }: AddReceiptFormProps) => {
  const { addReceipt, deleteReceipt, updateReceipt } = useAccountBook();
  const { date, month } = useAppSelector(
    state => ({
      date: state.accountBook.selectDate.date,
      month: state.accountBook.selectDate.month,
    }),
    shallowEqual,
  );
  const receipt = useAppSelector(state =>
    state.accountBook.receipts.find(
      receipt => receipt.id === state.accountBook.selectId,
    ),
  );
  const addReceiptCurrentState = useAppSelector(
    state => state.modal.receipt.isUpdate,
  );

  const currentTime = useMemo(() => {
    const time = moment();
    if (!update && !addReceiptCurrentState) {
      time.month((month as number) - 1);
      time.date(date as number);
    }

    return time;
  }, [date, month, update]);

  const [state, setState] = useState({
    amount: update
      ? (receipt?.spending as number) ?? (receipt?.income as number)
      : '',
    account: update ? receipt?.transactionBranch : '',
    group: update ? (receipt?.spending ? 'μ§μΆ' : 'μμ') : data.group[0],
    category: update ? receipt?.category : data.category[0],
    payment: update ? receipt?.paymentMethod : data.payment[0],
    date: update
      ? moment(
          `${receipt?.timeDate.year}-
        ${receipt?.timeDate.month}-
        ${receipt?.timeDate.date}
        ${receipt?.timeDate.hours}:
        ${receipt?.timeDate.minutes}`,
        ).format('YYYY-MM-DD HH:mm:ss')
      : currentTime.format('YYYY-MM-DD HH:mm:ss'),
  });

  const onSubmitReceipt = (e: React.FormEvent) => {
    e.preventDefault();

    if (state.amount === '') {
      return alert('μ§μΆ κΈμ‘μ μλ ₯ν΄μ£ΌμΈμ');
    }
    if (state.account === '') {
      return alert('κ±°λμ²λ₯Ό μλ ₯ν΄μ£ΌμΈμ');
    }

    const currentObj = currentTime.toObject();
    const responseObj: TReceipt = {
      category: state.category as string,
      paymentMethod: state.payment,
      transactionBranch: state.account as string,
      timeDate: {
        year: currentObj.years,
        month: update ? month : currentObj.months + 1,
        date: update ? date : currentObj.date,
        hours: currentObj.hours,
        minutes: currentObj.minutes,
      },
      spending:
        state.group === 'μ§μΆ' ? Math.abs(state.amount as number) * -1 : null,
      income:
        state.group === 'μμ' ? Math.abs(state.amount as number) * 1 : null,
    };

    if (update) {
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
        <span>μ</span>
      </AmountInput>
      <AddReceiptTable>
        <tbody>
          <tr>
            <th>λΆλ₯</th>
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
            <th>μΉ΄νκ³ λ¦¬</th>
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
            <th>κ±°λμ²</th>
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
            <th>λ μ§</th>
            <td>{state.date}</td>
          </tr>
          <tr>
            <th>κ²°μ μλ¨</th>
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
        {update && (
          <AddReceiptModalFooterButton onClick={handleClickDelete}>
            <AiFillDelete />
          </AddReceiptModalFooterButton>
        )}
        <SubmitBtn
          size="full"
          onClick={onSubmitReceipt}
        >
          μ μ₯νκΈ°
        </SubmitBtn>
      </AddReceiptModalFooterContainer>
    </form>
  );
};

export default React.memo(AddReceiptForm);
