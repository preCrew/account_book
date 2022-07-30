import MonthSelector from 'components/Common/MonthSelector';
import React from 'react';

import Layout from 'components/Common/Layout/Layout';
import Button from 'components/Common/Button';
import styled from 'styled-components';

const App = () => {
  return (
    <>
      <Layout>
        내역이 들어가요 메인페이지 에요내역이 들어가요 메인페이지 에요
        <Button size="small">이건 버튼이다</Button>
        <Button size="medium">이건 버튼이다</Button>
        <Button size="large">이건 버튼이다</Button>
        <Test>
          <Button size="no">no버튼</Button>
        </Test>
      </Layout>
    </>
  );
};
const Test = styled.div`
  width: 200px;
  height: 100px;
`;
export default App;
