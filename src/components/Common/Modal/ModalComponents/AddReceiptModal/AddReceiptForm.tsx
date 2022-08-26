import React, { ChangeEventHandler, useEffect, useMemo, useState } from 'react';
import { AddReceiptTable, AmountInput } from './AddReceiptModal.style';
import SubmitBtn from '../../../Button/Button';
import moment from 'moment';
import { Tdata } from './AddReceiptModal';
import useInput from 'hooks/useInput';
import useSelect from 'hooks/useSelect';
import useAccountBook from 'store/hooks/useAccountBook';
import { TReceipt } from 'store/reducers/accoutBook-Slice';

interface AddReceiptFormProps {
  data: Tdata;
  onClose: () => void;
}

const AddReceiptForm = ({ data, onClose }: AddReceiptFormProps) => {
  const [amount, setAmount, onChangeAmount] = useInput('');
  const [account, , onChangeAccount] = useInput('');
  const [group, setGroup, onChangeGroup] = useSelect('');
  const [category, setCategory, onChangeCategory] = useSelect('');
  const [payment, setPayment, onChagePayment] = useSelect('');
  const currentTime = useMemo(() => moment(), []);
  const currentObj = currentTime.toObject();

  const { addReceipt } = useAccountBook();

  useEffect(() => {
    setGroup(data.group[0]);
    setCategory(data.category[0]);
    setPayment(data.payment[0]);
  }, []);

  const onSubmitReceipt = (e: React.FormEvent) => {
    e.preventDefault();

    if (amount === '') {
      return alert('지출 금액을 입력해주세요');
    }
    if (account === '') {
      return alert('거래처를 입력해주세요');
    }

    const responseObj: TReceipt = {
      //spending: parseInt(amount),
      //group: group,
      category: category,
      paymentMethod: payment,
      transactionBranch: account as string,
      timeDate: {
        year: currentObj.years,
        month: currentObj.months + 1,
        date: currentObj.date,
        hours: currentObj.hours,
        minutes: currentObj.minutes,
      },
    };

    if (group === '지출') {
      responseObj.spending = (amount as unknown as number) * -1;
    }
    if (group === '수입') {
      responseObj.income = (amount as unknown as number) * 1;
    }

    onClose();
    addReceipt(responseObj);
    // dispatch(
    //   changeReceiptAction({
    //     spending: parseInt(amount),
    //     group: group,
    //     category: category,
    //     paymentMethod: payment,
    //     account: account,
    //     timeDate: {
    //       year: currentObj.years,
    //       month: currentObj.months + 1,
    //       date: currentObj.date,
    //       hours: currentObj.hours,
    //       minutes: currentObj.minutes,
    //     },
    //   }),
    // );
  };

  return (
    <form>
      <AmountInput>
        <input
          type="number"
          value={amount}
          onChange={onChangeAmount}
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
                value={group}
                defaultValue={data.group[0]}
                onChange={onChangeGroup}
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
                value={category as string}
                defaultValue={data.category[0]}
                onChange={onChangeCategory}
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
                type="text"
                value={account}
                onChange={onChangeAccount}
              />
            </td>
          </tr>
          <tr>
            <th>날짜</th>
            <td>{currentTime.format('YYYY-MM-DD HH:mm:ss')}</td>
          </tr>
          <tr>
            <th>결제수단</th>
            <td>
              <select
                value={payment as string}
                defaultValue={data.payment[0]}
                onChange={onChagePayment}
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
      <SubmitBtn
        size="full"
        onClick={onSubmitReceipt}
      >
        저장하기
      </SubmitBtn>
    </form>
  );
};

export default AddReceiptForm;
