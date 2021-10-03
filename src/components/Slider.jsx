import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components"
import { useState } from "react";
import { sliderItems } from "../data";
import {mobile} from "../responsive"
import {tablet} from "../responsive"



const Container = styled.div`
        width: 100%;
        height: auto;
        display: flex;
        position: relative;
        overflow: hidden;

`;

const Wrapper = styled.div`

        height: auto;
        display: flex;
        transition: all 1.5s ease;
        transform: translateX(${(props) => props.slideIndex * -100}vw);

`;

const Arrow = styled.div`
        width: 50px;
        height: 50px;
        background-color: #fff7f7;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: ${props=> props.direction === "left" && "10px"};
        right: ${props=> props.direction === "right" && "10px"};
        margin: auto;
        cursor: pointer;
        opacity: 0.5;
        z-index: 2;

`;

const Slide = styled.div`
        width: 100vw;
        height: 100%;
        position: relative;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        


`;

const Image = styled.img`
        width: 100%;
        height: 100s%;
`;



const InfoDesc = styled.div`
       
        padding-top: 100px;
        padding-left: 60px;
        position: absolute;
        top: 0;
        left: 0;
        ${mobile({paddingTop: "30px"})}

`;


const Title = styled.h1`
        font-family: 'Dancing Script', cursive;
        color: #${(props) => props.bg};
        font-size: 60px;
        ${mobile({ fontSize: "10px"})}
        ${tablet({ fontSize: "32px"  })}
    

`;
const Desc = styled.p`
        font-size: 26px;
        padding-top: 15px;
        padding-bottom: 15px;
        color: #${(props) => props.bg};
        ${mobile({ paddingBottom: "8px" , fontSize: "12px"})}

`;
const Button = styled.button`
       padding: 10px;
       font-size: 36px:
       
       cursor: pointer;
       background: #000000;
       border: none;
       ${mobile({ fontSize: "12px"})}
`;

const ButtonText = styled.span`
        color: #ffffff;
        padding: 10px;
        font-size: 16px;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
        const handleClick = (direction) => {
            if(direction==="left"){
                setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
            } else {
                setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
            }

        }
    
    return (
        <Container>
            <Arrow direction="left" onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    
              <Slide bg={item.bg}  key={item.id}>
                
                <Image src={item.img}/>
                
                  <InfoDesc>

                    <Title bg={item.bg} >{item.title}</Title>
                    <Desc bg={item.bg} >{item.desc}</Desc>
                    <Button>
                        <ButtonText>SHOP NOW</ButtonText>
                    </Button>
                 </InfoDesc>

                
                </Slide>  
            ))}           
            </Wrapper>
          
            <Arrow direction="right" onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider
