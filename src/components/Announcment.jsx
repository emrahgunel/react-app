import styled from "styled-components"
import {mobile} from "../responsive"
import {tablet} from "../responsive"


const Container = styled.div`
    height: 30px;
    background-color: #000000;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10px;
    padding-bottom: 10px
    ${mobile({ fontSize: "10px"})}
    ${tablet({ fontSize: "14px"  })}


`;

const Announcment = () => {
    return (
        <Container>
            FREE SHIPPING ON ALL ORDERS OVER $75
        </Container>
         
    )
}

export default Announcment
