# User
```tsx
const {createUser, loginUser, logoutUser} = useUser();
// 필요시 사용
const { loading, success, error, errorMsg } = useAppSelector(
    state => state.user.loadingState,
);
// 로그인중일시 true, 로그인중이 아닐시 false
const isLogin = useAppSelector(state => state.user.isLogin);

```
## createUser
- 유저 생성하는 함수
- Args:
  - email: string
  - password: string

```tsx
const handleCreateUser = () => {
  createUser(email, password)
}
```
## loginUser
- 로그인 하는 함수
- Args:
  - type: 'google' | 'idpw'
    - type을 구글로 지정하면 아래의 user는 넣지 않아도 됨.
    - type을 idpw로 지정하면 user의 속성을 넣어줘야함
  - user?: TUserIdPassword
    - interface TUserIdPassword {email: string; password: string;}
```tsx
const handleLoginUserWithGoogle = () => {
  loginUser('google');
}
const handleLoginUserWithIdPw = () => {
  loginUser('idpw', {email: 'song961003@gmail.com', password: 'abcd1234'});
}
```
## Logout
- 로그아웃 하는 함수
- Args: none
```tsx
const handleLogoutUser = () => {
  logoutUser();
}
```

# Receipt (영수증)
```tsx
const { addReceipt, readReceipts, deleteReceipt, updateReceipt} = useAccountBook();
const receipts = useAppSelector(state => state.accountBook.receipts);
```
## addReceipt
- receipt를 서버에 추가하는 함수
- Args: 
  - receipt: TReceipt
```tsx
const handleAddReceipt = () => {
  addReceipt(receipt);
}
// 필요시 사용
const { 
  loading, 
  success, 
  error, 
  errorMsg
} = useAppSelector(state => state.accountBook.loadingState.create);
```
  
## readReceipts
- receipt를 서버에서 읽어오는 함수
- Args:
  - yearMonth: TYearMonth
    - interface TYearMonth {year: number; month: number;}
```tsx
const handleReadReceipt = () => {
  readReceipts({year: 2022, month: 8});
}
// 필요시 사용
const { 
  loading, 
  success, 
  error, 
  errorMsg
} = useAppSelector(state => state.accountBook.loadingState.read);

```
## deleteReceipt
- receipt를 서버에서 삭제하는 함수
- Args:
  - id: number
```tsx
const handleDeleteReceipt = () => {
  deleteReceipt(168218039);
}
// 필요시 사용
const { 
  loading, 
  success, 
  error, 
  errorMsg
} = useAppSelector(state => state.accountBook.loadingState.delete);
```
## updateReceipt
- receipt를 서버에서 업데이트하는 함수
- Args:
  - id: number
  - changeReceipt: TReceipt
```tsx
const handleupdateReceipt = () => {
  updateReceipt(16428912, {
    // receipt에서 바뀌는 내용을 넣어줌
    // ex)
    // income: 1000
    // memo: "test memo"
  });
}
// 필요시 사용
const { 
  loading, 
  success, 
  error, 
  errorMsg
} = useAppSelector(state => state.accountBook.loadingState.update);
```