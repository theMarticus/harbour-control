import React, {Component} from 'react'
import styled from 'styled-components'
import Boat from "./boat"

const BayBlock = styled.div`
    background-color: Darkblue;
    height: calc(100vh);
    max-height: calc(100vh);
    position: relative;
`


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