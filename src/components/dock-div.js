import React, {Component} from 'react'
import styled from 'styled-components'


/**
 * 
 * Simple place holder Dock for Dock type things..... don't judge me on the use of bisque
 */
const DockBlock = styled.div`
    background-color: bisque;
`

/**
 * Dock React class for rendering.... not much else to say for now.
 */
class DockDiv extends Component {
    render() {
        return (
            <DockBlock></DockBlock>
        )
    }
} 

export default DockDiv