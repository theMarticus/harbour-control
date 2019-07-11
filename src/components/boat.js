import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'

const left = keyframes`
  from {
    left: 90%;
  }

  to {
    left: 0%
  }
`;

const BoatBase = styled.div`
    top: ${props => `${props.top}px`} ;
    left: 90%;
    position: absolute;
    animation: ${left} ${props => {
        if(props.boatType === "speedBoat") {
            return "1s"
        } else if (props.boatType === "sailBoat"){
           return "4s"
        } else if (props.boatType === "cargoBoat") {
           return "16s"
        }
    }} linear 1;
    animation-fill-mode: forwards;
    display: inline;
    z-index:2;
`

const SpeedBoat = styled.div`
    background: url("${process.env.PUBLIC_URL}/img/speedboat.png") no-repeat center;
    background-size: cover;
    height: 50px;
    width: 100px;
`

const SailBoat = styled.div`
    background: url("${process.env.PUBLIC_URL}/img/sailboat.png") no-repeat center;
    background-size:cover;
    height: 100px;
    width: 100px;
`

const CargoBoat = styled.div`
    background: url("${process.env.PUBLIC_URL}/img/cargo.png") no-repeat  center;
    background-size:cover;
    height: 100px;
    width: 200px;
`


class Boat extends Component {

    item() {
        if (this.props.boatType.type === "speedBoat"){
            return <SpeedBoat></SpeedBoat>
        }else if(this.props.boatType.type === "sailBoat"){
            return <SailBoat></SailBoat>
        } else {
            return <CargoBoat></CargoBoat>
        } 
    }

    render() {
        return (
            <BoatBase boatType={this.props.boatType.type} top={this.props.boatType.top} left={this.props.boatType.left}>
                {this.item()}
            </BoatBase>
        )
    }
} 

export default Boat