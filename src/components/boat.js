import React, {Component} from 'react'
import styled, {keyframes} from 'styled-components'
/**
 * 
 * Boat renders the correct boat at the correct speed all boats created on screen are 
 * handled here. We use react props for different boats and main adds the location for this to be placed on the page. 
 */

/**
 * left handles keyframe animation for all boats
 */
const left = keyframes`
  from {
    left: 90%;
  }

  to {
    left: 0%
  }
`;

/**
 * BoatBase styled component takes props information for creating the containers that the boats live in.
 */

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
/**
 * SpeedBoat adds the correct image for speed boats and alters size slightly
 */
const SpeedBoat = styled.div`
    background: url("${process.env.PUBLIC_URL}/img/speedboat.png") no-repeat center;
    background-size: cover;
    height: 50px;
    width: 100px;
`
/**
 * SailBoat adds the correct image for Sail boats and alters size slightly
 */
const SailBoat = styled.div`
    background: url("${process.env.PUBLIC_URL}/img/sailboat.png") no-repeat center;
    background-size:cover;
    height: 100px;
    width: 100px;
`
/**
 * CargoBoat adds the correct image for Cargo boats and alters size slightly
 */
const CargoBoat = styled.div`
    background: url("${process.env.PUBLIC_URL}/img/cargo.png") no-repeat  center;
    background-size:cover;
    height: 75px;
    width: 150px;
`

/**
 * Boat React Class
 * creates the correct boat from props passed to it from Harbour-div and bay-div
 */
class Boat extends Component {

    /**
     * Separated out which boat is needed during render 
     * */    
    item() {
        if (this.props.boatType.type === "speedBoat"){
            return <SpeedBoat></SpeedBoat>
        }else if(this.props.boatType.type === "sailBoat"){
            return <SailBoat></SailBoat>
        } else {
            return <CargoBoat></CargoBoat>
        } 
    }
    /**
     * Render add the object to the page
     */
    render() {
        return (
            <BoatBase boatType={this.props.boatType.type} top={this.props.boatType.top} left={this.props.boatType.left}>
                {this.item()}
            </BoatBase>
        )
    }
} 

export default Boat