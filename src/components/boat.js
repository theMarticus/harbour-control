import React, {Component} from 'react'
import styled from 'styled-components'

const BoatBase = styled.div`
    top: ${props => `${props.position}px`} ;
    right: 20px;
    position: absolute;
`

const SpeedBoat = styled.div`
    background-color: red;
    height: 100px;
    width: 100px;
`

class Boat extends Component {

    render() {
        return (
            <BoatBase position={this.props.boatType.top}>
                {this.props.boatType.type === "speedBoat" ? <SpeedBoat></SpeedBoat> : <div></div>}
            </BoatBase>
        )
    }
} 

export default Boat