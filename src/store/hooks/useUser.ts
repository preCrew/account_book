/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { chageCaracterAction } from 'store/reducers/user-Slice';
import { useAppDispatch } from 'store/store';

const useAccountBook = () => {
  const dispatch = useAppDispatch();

  const chageCaracter = useCallback((characterNumber: number) => {
    dispatch(chageCaracterAction(characterNumber));
  }, []);

  return {
    chageCaracter,
  };
};

export default useAccountBook;
