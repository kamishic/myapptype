import * as React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';

const Wraper = styled.div`
  background-color:skyblue;
  text-align: center;
  color: white;
`;

const MyGrid = styled(Grid)`

`;

const Footer = () => {
  return (
    <Wraper>
      フッターだよ
    </Wraper>
  )
}

export default Footer