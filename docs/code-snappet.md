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