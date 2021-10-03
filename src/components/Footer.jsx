import { Facebook, Instagram } from "@material-ui/icons";
import styled from "styled-components"
import {mobile} from "../responsive"
import {tablet} from "../responsive"


const Container = styled.div`
        background: #000000;
        height: 250px;
        
        ${mobile({  height: "500px" })}
        ${tablet({  height: "500px" })}

`;

const Wrapper = styled.div`
        padding: 30px 20px;
        display: flex;
        ${mobile({  flexDirection:"column" })}
        ${tablet({  flexDirection:"column" })}
        
       


`;
const Left = styled.div`
        color: #ffffff;
        flex: 1;
`;
const Center = styled.div`
        color: #ffffff;
        padding-right: 350px;
        flex: 1;
        justify-content: flex-start;
        ${mobile({  paddingTop: "15px"})}
        ${tablet({  paddingTop: "15px"})}

`;
const Right = styled.div`
        color: #ffffff;
        display: flex;
        justify-content: flex-end;
        flex: 1;
        ${mobile({  paddingTop: "15px", justifyContent:"flex-start" })}
        ${tablet({  paddingTop: "15px", justifyContent:"flex-start" })}


`;

const Follow = styled.h5`
        font-family: 'Dancing Script', cursive;
        font-size: 26px;

`;

const Icons = styled.div`
        display: flex;
        padding-top: 10px;
        cursor: pointer;
        


        
`;

const Menutitle = styled.h5`
        font-family: 'Dancing Script', cursive;
        padding-bottom: 10px;
        font-size: 22px;
`;

const Menuitems = styled.p`
        font-size: 14px;
        padding-bottom: 5px;

`;

const Social = styled.div`
        display: flex;
        flex-direction: column;
        padding-right: 25px;
        
        
`;




const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Menutitle>Customer Service</Menutitle>
                    <Menuitems>Accessibility</Menuitems>
                    <Menuitems>Contact Us</Menuitems>
                    <Menuitems>Return Policy</Menuitems>
                    <Menuitems>FAQ</Menuitems>
                    <Menuitems>Gift Certificates</Menuitems>
                    <Menuitems>Wishlist</Menuitems>
                </Left>
                <Center>
                    <Menutitle>Company</Menutitle>
                    <Menuitems>About Us</Menuitems>
                    <Menuitems>Careers</Menuitems>
                    <Menuitems>Press</Menuitems>
                    <Menuitems>Affiliates</Menuitems>
                </Center>
                <Right>
                   <Social>
                    <Follow>Follow Us</Follow>
                    <Icons>
                        <Facebook/>
                        <Instagram/>
                    </Icons>
                 </Social> 
                </Right>


            </Wrapper>
        </Container>
    )
}

export default Footer