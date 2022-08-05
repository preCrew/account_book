# eslint options

- `react/react-in-jsx-scope`: off,  
  - import React를 하지 않아도 jsx 사용가능
- `react/jsx-filename-extension`: ["error",{"extensions": [".ts",".tsx"]}]  
  - jsx 문법을 쓰는 파일의 확장자는 ts 혹은 tsx
- `getter-return`: error
  - getter 사용시 return값 필수
- `react/hook-use-state`: error
  - useState 사용시 [value, setValue] = useState() 형식으로 사용해야함
- `react/jsx-boolean-value`: ["error", "never"]
  - prop 으로 boolean값을 넣을시 true를 넣어줄 필요가 없음