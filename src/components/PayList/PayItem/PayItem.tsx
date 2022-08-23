import { TReceipt } from 'store/reducers/accoutBook-Slice';
import {
  ListItemBox,
  ListContent,
  ListBottom,
  ListDate,
} from './PayItem.style';

interface PayItemProps {
  receipts: TReceipt;
}

const PayItem = ({ receipts }: PayItemProps) => {
  return (
    <>
      <ListItemBox>
        <ListDate>{receipts.timeDate.date}일</ListDate>
        <ul>
          <li>
            <ListContent>
              <p>{receipts.account}</p>
              <span>{receipts.spending}원</span>
            </ListContent>
            <ListBottom>{receipts.category}</ListBottom>
          </li>
        </ul>
      </ListItemBox>
    </>
  );
};

export default PayItem;
