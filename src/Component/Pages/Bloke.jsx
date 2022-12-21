import styled from "styled-components";
import {bloke} from "../Data"
import Product from "../Extra/Product";



const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Happy = () => {
  return (
    
    <Container>
      {bloke.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Happy;
