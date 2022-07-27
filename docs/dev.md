# vscode extention 설치
1. [eslint]
2. [prettier]
3. [stylelint]




[eslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[stylelint]: https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint

# code snappet
## 컴포넌트 생성
```javascript
"Create React File": {
  "prefix": ">crf",
  "description": ">CreateReactFile",
  "body": [
    "import React from 'react';",
    "import './${TM_FILENAME_BASE}.style.ts';",
    "",
    "interface ${TM_FILENAME_BASE}Props {",
    "	",
    "}",
    "",
    "const ${TM_FILENAME_BASE} = ({",
    "	",
    "}: ${TM_FILENAME_BASE}Props) => {",
    "	return (",
    "		<>",
    "			${1}"
    "		</>"
    "	);"
    "}",
    "",
    "export default ${TM_FILENAME_BASE};"
  ]
},
```
## index 파일 생성
```javascript
"Create React Index": {
  "prefix": ">cri",
  "description": ">CreateReactIndex",
  "body": [
    "export { default } from './${1:${TM_DIRECTORY/^.+\\/(.*)$/$1/}}';",
    ""
  ]
},
```

# eslint options

- `react/react-in-jsx-scope`: off,  
  - import React를 하지 않아도 jsx 사용가능
- `react/jsx-filename-extension`: ["error",{"extensions": [".ts",".tsx"]}]  
  - jsx 문법을 쓰는 파일의 확장자는 ts 혹은 tsx
- `getter-return`: error
  - getter 사용시 return값 필수
# prettier options
- `useTabs`: false 
  - tab 사용하지 않음  
- `trailingComma`: all
  - 가능하면 콤마 붙이기  
- `endOfLine`:` lf 
  - eol el로 설정  
- `printWidth`:` 80 
  - 길이 80 넘으면 줄넘김  
- `tabWidth`:` 2  
  - tab = 스페이스 2칸  
- `singleQuote`:` true  
  - 작은따옴표만 사용가능  
- `jsxSingleQuote`:` false  
  - jsx문법의 속성은 큰따옴표만 가능  
- `semi`:` true  
  - 세미콜론 필수  
- `singleAttributePerLine`:` true  
  - jsx 속성은 한줄에 하나만 입력  
- `arrowParens`:` avoid 
  - 가능하면 함수 인자에 () 생략
