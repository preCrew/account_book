import { atom } from 'recoil';

interface ModalAtom {
  name: string;
  isOpen: boolean;
  willUnmount: boolean;
}

const modalAtom = atom<ModalAtom[]>({
  key: 'modalAtom',
  default: [],
});

export default modalAtom;
