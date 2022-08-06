import Button from '../Button';

interface ArrowButtonProps {
  onClick: () => void;
  direction: 'left' | 'right';
}

const ArrowButton = ({ onClick, direction }: ArrowButtonProps) => {
  return (
    <Button onClick={onClick}>{direction === 'left' ? '◀︎' : '▶︎'}</Button>
  );
};

export default ArrowButton;
