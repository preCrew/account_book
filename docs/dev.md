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