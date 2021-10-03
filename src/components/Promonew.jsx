import styled from "styled-components";
import {mobile} from "../responsive"
import {tablet} from "../responsive"




const Container = styled.div`
            width: 100%;
            height: auto;
            position: relative;
            background-color: #10504F
            
`;


const Image = styled.img`
        width: 100%;
        height: 100%;
`;



const Info = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex-wrap: wrap;
        align-content: flex-end;
        justify-content: flex-start;
        padding-top: 50px;
        
     
`;
const Title = styled.h2`

        color: #ffffff;
        font-family: 'Dancing Script', cursive;
        font-size: 60px;
        padding-right: 60px;
        ${mobile({ fontSize: "30px"   })}
`;
const Desc = styled.p`
        color: #ffffff;
        font-size: 26px;
        padding-bottom: 15px;
        ${mobile({ fontSize: "20px"   })}
`;
const Button = styled.button`
        padding: 5px;
        font-size: 16px:
        cursor: pointer;
        background: #10504F;
        border: none;
`;
const ButtonText = styled.span`

        color: #ffffff;
        padding: 10px;
        font-size: 16px;
`;

const Promonew = () => {
    return (
        <Container>

            <Image src="https://cdn.shopify.com/s/files/1/0478/4504/8482/files/Hero_Image_2_1.png?v=1633048782"/>
            <Info>
                <Title>Our Favorite Tees</Title>
                <Desc>Everyday tees you need.</Desc>
                <Button>
                    <ButtonText>SHOP NOW</ButtonText>
                </Button>

            </Info>

        </Container>
    )
};

export default Promonew;
