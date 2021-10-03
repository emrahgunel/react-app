
import styled from "styled-components"


const Container = styled.div`

        width: 100%;
        height: auto;
        display: flex;
        overflow: hidden;
        
       
`;


const Info = styled.div`
        position: relative;
        top: 0;
        left:0;
        width: 100%;
        height: 100%
`;
const Title = styled.h2`

        color: #ffffff;
        font-family: 'Dancing Script', cursive;
        padding-bottom: 10px;
        font-size: 60px;
`;
const Desc = styled.p`
        color: #ffffff;
        font-size: 26px;
        padding-bottom: 10px;
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

const Wrapper = styled.div`
        display: flex;
       
`;

const ImgContainer = styled.div`
        height: auto;
        flex: 1;
        
`;

const Image = styled.img`
       height: auto; 
       width: 100%;
       
`;

const Slide = styled.div`
       
        width: 100vw;
        height: auto;

`;

export const Promo = () => {
    return (
        <Container>
 
           <Wrapper>
            <Slide>   
            <ImgContainer>
              <Image src="https://cdn.shopify.com/s/files/1/0478/4504/8482/files/Hero_Image_2_1.png?v=1633048782" />
            </ImgContainer>


           </Slide>    

          </Wrapper> 
    
        </Container>


    )
}

export default Promo
