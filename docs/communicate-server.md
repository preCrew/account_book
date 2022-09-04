- [1. User](#1-user)
  - [1.1. createUser](#11-createuser)
  - [1.2. loginUser](#12-loginuser)
  - [1.3. Logout](#13-logout)
- [2. Receipt (영수증)](#2-receipt-영수증)
  - [2.1. addReceipt](#21-addreceipt)
  - [2.3. deleteReceipt](#23-deletereceipt)
  - [2.4. updateReceipt](#24-updatereceipt)
- [3. UserInfo (유저정보)](#3-userinfo-유저정보)
  - [3.1 getUserInfo](#31-getuserinfo)
  - [3.2 updateUserInfo](#32-updateuserinfo)
# 1. User
```tsx
const {createUser, loginUser, logoutUser} = useUser();

// 필요시 사용 ( 현재 서버와 통신 상태 pending, fullfiled, reject)
const { 
  createUser, 
  loginUser, 
  logoutUser
} = useAppSelector(state => state.user.loadingState);
// 로그인중일시 true, 로그인중이 아닐시 false
const isLogin = useAppSelector(state => state.user.isLogin);
```
## 1.1. createUser
- 유저 생성하는 함수
- Args:
  - email: string
  - password: string

```tsx
const handleCreateUser = () => {
  createUser(email, password)
}
```
## 1.2. loginUser
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
## 1.3. Logout
- 로그아웃 하는 함수
- Args: none
```tsx
const handleLogoutUser = () => {
  logoutUser();
}
```

# 2. Receipt (영수증)
```tsx
const { addReceipt, readReceipts, deleteReceipt, updateReceipt} = useAccountBook();
// 필요시 사용 ( 현재 서버와 통신 상태 pending, fullfiled, reject)
const receipts = useAppSelector(state => state.accountBook.receipts);
const {
  create, 
  delete, 
  read, 
  update
} = useAppSelector(state => state.accountBook.loadingState);
```
## 2.1. addReceipt
- receipt를 서버에 추가하는 함수
- Args: 
  - receipt: TReceipt
```tsx
const handleAddReceipt = () => {
  addReceipt(receipt);
}```
  
## 2.2. readReceipts
- receipt를 서버에서 읽어오는 함수
- Args:
  - yearMonth: TYearMonth
    - interface TYearMonth {year: number; month: number;}
```tsx
const handleReadReceipt = () => {
  readReceipts({year: 2022, month: 8});
}
```
## 2.3. deleteReceipt
- receipt를 서버에서 삭제하는 함수
- Args:
  - id: number
```tsx
const handleDeleteReceipt = () => {
  deleteReceipt(168218039);
}
```
## 2.4. updateReceipt
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
```
# 3. UserInfo (유저정보)
```tsx
const {getUserInfo, updateUserInfo} = useUser();
// 필요시 사용 ( 현재 서버와 통신 상태 pending, fullfiled, reject)
const { 
  readUserInfo, 
  updateUserInfo 
} = useAppSelector(state => state.user.loadingState);
```

## 3.1 getUserInfo
- 유저정보 ( 이름, 예산, 프로필 종류)를 서버에서 받아와 `store`에 저장하는 함수
- Args: none

```tsx
const getUserInfoFromServer = () => {
  getUserInfo();
}
```
## 3.2 updateUserInfo
- `store`에 저장된 유저정보를 파이어베이스 서버로 보내 업데이트 하는 함수
- Args: none
```tsx
const updateUserInfoFromStore = () => {
  updateUserInfo();
}
```