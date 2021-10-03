import  styled from "styled-components"
import {mobile} from "../responsive"
import {tablet} from "../responsive"

const Container = styled.div`
        flex: 1;
        margin: 5px;

`;

const Image = styled.img`
        width: 100%;
        height: 60vh;
        
        margin-bottom:0;
        ${mobile({ height: "60vh" })}
        ${tablet({ height: "60vh"})}
        
        
      
`;

const Info = styled.div`
        background-color: #10504F;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

`;

const Title= styled.h3`
        color: #ffffff;
        padding-top: 10px;
        padding-bottom: 10px;
        font-family: 'Dancing Script', cursive;
        font-size: 40px;
`;

const CategoryItem = ({item}) => {
    return (
        <Container>
            
            <Info>
            <Image src={item.img}/>
            <Title>{item.title}</Title>
            </Info>
        </Container>
    )
}

export default CategoryItem
