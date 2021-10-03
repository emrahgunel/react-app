
import { Email } from "@material-ui/icons";
import styled from "styled-components"
import {mobile} from "../responsive"
import {tablet} from "../responsive"





const Container = styled.div`
        height: 200px;
        background-color: #10504F;
        ${mobile({  height: "300px" })}
        ${tablet({  height: "325px" })}

`;

const SignUpText = styled.div`
        color: #ffffff;
        display: flex;
        justify-content: center;
        padding-top: 40px;
        


`;

const SignUpTitle = styled.p`
        padding-left: 15px;
        font-family: 'Dancing Script', cursive;
        font-size: 28px;
        ${mobile({ fontSize: "20px"})}
`;


const SignUpInput = styled.div`
        padding-top: 30px;
        display: flex;
        
        ${mobile({  flexDirection:"column" })}
        ${tablet({  flexDirection:"column" })}
        
        
`;



const SignUpInputText = styled.div`
        display: flex;
        flex: 1;
        color: #ffffff;
        width: 40%;
        padding-left: 50px;
        ${mobile({ paddingBottom: "15px", paddingLeft: "20px" , textAlign: "center", width:"90%" , fontSize: "16px" })}
        ${tablet({ paddingBottom: "15px", textAlign: "center", width:"90%" })}
       
`;

const SearchContainer = styled.div`
        border: 1px solid #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 40px 10px 40px;
        background-color: #ffffff;
        margin-right: 10px;
        ${mobile({ padding: "10px 10px 10px 10px", alignItems: "center" , width: "120px"  })}
        ${tablet({ marginBottom:"20px", paddingBottom: "15px", textAlign: "center", width:"60%" })}
       
        


`;
const SearchContainerButton = styled.div`
        border: 1px solid #ffffff;
        display: flex;
   
        
        padding: 10px;
        color: #ffffff;
        margin-right: 80px;
       
        ${mobile({ marginRight:"40px"  })}
        ${tablet({ width:"30%", justifyContent: "center" })}

`;

const Input = styled.input`
        border: none; 
             
`;

const SignUpArea = styled.div`
        display: flex;
        flex: 1;
        justify-content: flex-end;
        ${mobile({ flexDirection: "column"  })}
        ${tablet({ flexDirection: "column", alignItems: "center"  })}


`;


const Signup = () => {
    return (
        <Container>
            <SignUpText>
                <Email style={{ fontSize: 36 }} />
                <SignUpTitle>Sign Up & Stay Connected</SignUpTitle>
            </SignUpText>

            <SignUpInput>
               
                <SignUpInputText>
                    Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!
                </SignUpInputText>
                <SignUpArea>
                <SearchContainer>
                    <Input placeholder="Enter Your Email Address"/>
                </SearchContainer>
                <SearchContainerButton>
                    Subscribe
                </SearchContainerButton>
                </SignUpArea>
            </SignUpInput>
        </Container>
    )
}

export default Signup