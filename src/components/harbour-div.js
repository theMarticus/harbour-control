import React, {Component} from 'react'
import styled from 'styled-components'
import Boat from './boat'


/**
 * HarbourBlock with a soothing light blue to represent the harbour 
 * More water effects to be added later
 */
const HarbourBlock = styled.div`
    background-color: lightblue;
    height: calc(100vh);
    max-height: calc(100vh);
    position: relative;
`

/**
 * HarbourDiv react class to handle the one boat with permission to enter the harbour
 * takes the information from the harbourBoat state in Main
 */
class HarbourDiv extends Component {
    render() {
        return (
            <HarbourBlock>
                 {this.props.boatList.map((item, i ) => <Boat boatType={item} key={i} />)}
            </HarbourBlock>
        )
    }
} 

export default HarbourDiv