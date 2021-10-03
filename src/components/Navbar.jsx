import { Person, Search, ShoppingCart } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive"
import {tablet} from "../responsive"


const Container = styled.div`
     height: 90px;
     background: #10504F;
`;
const Wrapper = styled.div `
     padding: 10px 20px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     color: #fff;

`;
const Left = styled.div `
     flex: 1;
`;

const Logo = styled.span`
        font-size: 46px;
        cursor: pointer;
        font-family: 'Dancing Script', cursive;
        ${mobile({ fontSize: "36px" })}

`;

const Center = styled.div `
     flex: 2;
     display: flex;  
     align-items: center;
     justify-content: center;
     ${mobile({ display: "none" })}
    
     
`;

const NavItem = styled.div `
     margin-left: 30px;
    

`;

const Right = styled.div `
     flex: 1;
     display: flex;  
     align-items: center;
     justify-content: flex-end;
`;

const RightMenuItem = styled.div`
        cursor: pointer;
        margin-left: 25px;
        ${mobile({ marginLeft: "10px" })}

`;
const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>logo</Logo>
                </Left>
                <Center>
                    <NavItem>MEN'S</NavItem>
                    <NavItem>WOMEN'S</NavItem>
                    <NavItem>ACCESSORIES</NavItem>
                    <NavItem>SALE!</NavItem>

                </Center>
                <Right>
                    <RightMenuItem><Search/></RightMenuItem>
                    <RightMenuItem><Person/></RightMenuItem>
                    <RightMenuItem><ShoppingCart/></RightMenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
