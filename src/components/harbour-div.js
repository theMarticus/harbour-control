import React, {Component} from 'react'
import styled from 'styled-components'
import Boat from './boat'

const HarbourBlock = styled.div`
    background-color: lightblue;
    height: calc(100vh);
    max-height: calc(100vh);
    position: relative;
`


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