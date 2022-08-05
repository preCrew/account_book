# 커스텀 훅 목록
- [useModal](#usemodal): 최상단에 모달창을 띄움


# useModal
```tsx
type Keyframse = (alias) function keyframes(strings: TemplateStringsArray | CSSKeyframes, ...interpolations: SimpleInterpolation[]): Keyframes

const useModal = (
  openAnime?: Keyframes,
  closeAnime?: Keyframes,
  animeTimeMs = 300
) => {
  Modal: JSX.Element,
  showModal: () => void,
  closeModal: () => void
};
```

- **작성일자**: 2022.08.22 / 17:37
- **작성자**: 송민형  
- **기능**  
  - 화면 제일 상단에 모달을 띄우는 커스텀 훅

- **Args**  
  - openAnime: 모달이 열릴때 실핼될 애니메이션
  - closeAnime: 모달이 닫힐때 실행될 애니메이션
  - animeTimeMs: 애니메이션의 실행시간
    - 기본값: 300ms

- **Returns**
  - Modal: Modal의 children으로 넣는 ReactNode를 모달로 띄워줌
  - showModal: 해당 함수를 호출하면 모달창이 열림
  - closeModal: 해당 함수를 호출하면 모달창이 닫힘

- **Example**
```tsx
const openAnime = keyframes`
  0% {bottom: -100%; }
  100% {bottom: 0; }
`;
const closeAnime = keyframes`
  0% {bottom: 0%; }
  100% {bottom: -100%; }
`;
```
```tsx
const App = () => {
  const { Modal, showModal, closeModal} = useModal(openAnime,closeAnime, 1000);

  return (
    <>
      <button onClick={showModal}>OpenModal</button>
      <Modal>
        <div>
          testModal
          <button onClick={closeModal}>CloseModal</button>
        </div>
      </Modal>
    </>
  );
}
```

