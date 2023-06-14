import React, { useState } from 'react'
import styled from 'styled-components'
import {GoSearch} from "react-icons/go"
import {BsFillCloudLightningRainFill} from "react-icons/bs"
import {BiMessage} from "react-icons/bi"
import {CiMenuKebab} from "react-icons/ci"
import {MdKeyboardArrowDown,MdPhoneIphone} from "react-icons/md"
import pics from "./assets/night.jpg"
import pics1 from "./assets/MostlyClearNight.svg"
import pics2 from "./assets/temp-new-v1.gif"



const App = () => {
  const [props,setProps] = useState([
    {text: "Lagos", Number: 86},
    {text: "Abuja", Number: 90},

  ])
  return (
    <div>
      <Container>
        <Main>
        <Upside>
          <InputHolder>
          <Input placeholder='Search for Location'/>
          <Icon/>

          </InputHolder>
         
          {
            props.map((prop)=>(
              <StateHolder>
              <Text>{prop.text}</Text>
              <Div>
              <Icon1/>
              <Number>{prop.Number}</Number>
              </Div>
             
              <Icon2/>
            </StateHolder>
            ))
          }
        
         <Div2>
          <SmallText>F</SmallText>
          </Div2>
        </Upside>
     
        </Main>
        <LowSIde>
          <State>Lagos/Lagos Nigeria <Icon3/> </State>
          <State><Icon4/> Weather App </State>
        </LowSIde>

        <RealImageHolder>
          <Details>
            <Image src={pics}/>

            <Holder>
              <Weather>
                <Text>Current Weather</Text>
                <div style={{color:"white"}}>3:55pm</div>

              </Weather>
              <Button>
                <BiMessage style={{marginTop:"5px", marginRight: "5px"}} size={20}/>
                <span >Seeing Different weather?</span>
              </Button>

            </Holder>
         


            <Holder2>
            <Image1 src={pics1}/>
            <Text style={{fontSize: "80px", marginLeft: "10px"}}>80</Text>
<span style={{fontSize: "40px", color: "white"}}>°F</span>
          <div style={{ marginLeft: "60px",color:"white"}} >
        <Up>Mostly clear</Up>
        <Down>Feels like 81°</Down>
        </div>
            

            </Holder2>
            <Text style={{position: "absolute",top: "50%",fontSize: "15px",
          padding:" 20px"}}>The skies will be mostly cloudy. The high will be 87° on this very humid day.</Text>
            <Cloud>
              <Up>Air Quality</Up>
              <Down><Circle/>51</Down>
            </Cloud>


          </Details>
          <Location>
            <Image1 src={pics2}/>

          </Location>

        </RealImageHolder>

        

      </Container>
     
      
    </div>
  )
}

export default App
const Button= styled.div`
width: 230px;
height: 35px;
display: flex;
align-items: center;
justify-content: center;
color: white;
border-radius: 5px;
background-color: rgba(255,255,255,0.3);
`
const Weather= styled.div``
const Circle= styled.div`
background-color: yellow;
border-radius: 50%;
width: 10px;
height: 10px;
margin-right: 5px;

`
const Down= styled.div`
font-size: 12px;
font-weight: 100;
color: white;
display: flex;
align-items: center;
`
const Up= styled.div`
font-size: 15px;
font-weight: 500;
color: white;
`
const Cloud= styled.div`
position: absolute;
bottom: 10%;
left: 20px;
margin-right: 10px;
`
const Holder2= styled.div`
position: absolute;
top: 18%;
padding: 0px 20px;
display: flex;
align-items: center;
`
const Holder= styled.div`
position: absolute;
top: 0;
display: flex;
width:500px;
padding: 10px 20px;
justify-content: space-between;

`
const Location= styled.div`
position: absolute;
`
  
const Image1 = styled.img`
width:80px;
`
const Image = styled.img`
width:550px;
height: 280px;
object-fit: cover;
border-radius: 10px;
`
  
const Details= styled.div`
  
`
const RealImageHolder= styled.div`
margin-top: 10px;
width: 95%;
position: relative;
display: flex;
  
`
const Icon4 = styled(MdPhoneIphone)`
font-size: 20px;
margin-right: 5px;
cursor: pointer;
`
const Icon3 = styled(MdKeyboardArrowDown)`
font-size: 20px;

`
const State = styled.div`
font-size: 15px;
font-weight: 500;
color: white;
display: flex;
align-items: center;
cursor: pointer;
`
const LowSIde = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 95%;
margin-top: 10px;
`
const SmallText = styled.div`
width: 30px;
height: 80%;
background-color: rgba(225,225,225,0.5);
display: flex;
align-items: center;
justify-content: center;
color: white;
cursor: pointer;

`
const Div2 = styled.div`
width: 500px;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
`
const Div = styled.div`
margin-left: 20px;
display: flex;
align-items: center;
`
const Icon2 = styled(CiMenuKebab)`
color: white;
padding:5px;
border-radius: 2px;
cursor: pointer;
:hover{
  background-color: rgba(225,225,225,0.5);
}
`
const Number = styled.div`
margin: 0 5px;
color: white;
font-size: 15px;
`
const Icon1 = styled(BsFillCloudLightningRainFill)`
margin-top: 5px;
color: white;
font-size: 20px;
`
const Text = styled.div`
color: white;
font-size: 400;

`
const StateHolder = styled.div`
/* margin-left: 10px; */
display: flex;
align-items: center;
justify-content: space-between;
width: 200px;
cursor: pointer;
height: 100%;
border-right: 1px solid silver;
padding: 0px 20px;

:hover{
  background-color: rgba(0,0,0,0.3);
}
`
const Icon = styled(GoSearch)`
margin-left: -30px;
cursor: pointer;
`
const Input = styled.input`
width: 270px;
height: 60%;
border-radius: 15px;
outline: none;
border: none;
:active{
  outline: none;
}

`
const InputHolder = styled.div`
width: 300px;
height: 80%;
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border-radius: 20px;
margin-right: 15px;

`
const Upside = styled.div`
height: 40px;
display: flex;
align-items: center;
padding: 0 30px;
justify-content: space-around;


`
const Main = styled.div`
width: 100%;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5px );
-webkit-backdrop-filter: blur( 5px );
`
const Container = styled.div`
width:100% ;
height: 400px;
background-color: #225191;
display: flex;
/* justify-content: center; */
align-items: center;
flex-direction: column;
`

