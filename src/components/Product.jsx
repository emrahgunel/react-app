
import styled from 'styled-components'
import {mobile} from "../responsive"
import {tablet} from "../responsive"

const Container = styled.div`
        flex: 1;
        margin: 5px;
       
`;

const Image = styled.img`
        width: 100%;
        object-fit: cover;
        margin-bottom:0;
        
      
`;

const Info = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
`;

const ProductTitle = styled.h5`
        padding-top: 15px;
        padding-bottom: 10px;
        font-size: 22px;
        ${mobile({  fontSize: "8px" })}
        ${tablet({  fontSize: "22px" })}

`;
const ProductCategory = styled.p`
        font-size: 14px;
        padding-bottom: 10px;
        font-size: 16px;
`;
const ProductPrice = styled.h5`
        font-family: 'Dancing Script', cursive;
        font-size: 26px;
        ${mobile({  fontSize: "12px" })}
        ${tablet({  fontSize: "22px" })}
`;


export const Product = ({item}) => {
    return (
        <Container>

                <Info>
                    <Image src={item.img}/>
                    <ProductTitle>{item.productTitle}</ProductTitle>
                    <ProductCategory>{item.productCategory}</ProductCategory>
                    <ProductPrice>{item.price}</ProductPrice>

                </Info>

        </Container>
    )
}

export default Product