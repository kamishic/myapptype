import * as React from 'react';
import styled from "styled-components";
import Grid from '@material-ui/core/Grid';

const Wraper = styled.header`
  background-color:skyblue;
  text-align: center;
  color: white;
`;
const MyGrid = styled(Grid)`
  border:solid 1px white;
  background-color:lavender;
  color: blue;
`;

const Header = () => {
  return(
    <Wraper>
        <Grid container>
          <Grid item xs={8}>React+Redux+TypeScript+Amplify+material UI +css in js(styled-components)の練習アプリ</Grid>
          <Grid item xs={4}>material ui デフォルトのGrid 8:4</Grid>
        </Grid>
        <MyGrid container>
          <MyGrid item xs={3}>left</MyGrid>
          <MyGrid item xs={4}>myGrid 3:4:5</MyGrid>
          <MyGrid item xs={5}>right</MyGrid>
        </MyGrid>
    </Wraper>
  )
}

export default Header