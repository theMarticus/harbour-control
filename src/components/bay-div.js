import React, {Component} from 'react'
import styled from 'styled-components'
import Boat from "./boat"

/**
 * BayBlock styled component. Nice default dark blue to represent the bay.
 * Plan to update this to make the water look nicer
 */

const BayBlock = styled.div`
    background-color: Darkblue;
    height: calc(100vh);
    max-height: calc(100vh);
    position: relative;
`

/**
 * BayDiv React Class for handling all of the boats in the Bay.
 * it uses the BayList from Main through props to handle them all 
 */
class BayDiv extends Component {

    render() {
        return (
            <BayBlock>
               {this.props.boatList.map((item, i ) => <Boat boatType={item} key={i} />)}
            </BayBlock>
        )
    }
} 

export default BayDiv