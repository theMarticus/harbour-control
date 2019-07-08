import React, {Component} from 'react'
import styled from 'styled-components'
import DockBlock from "./dockDiv"

const ROWS = 9
const COLS = 9

const MainHarbour = styled.main`
    display: grid;
    grid-template-columns: repeat(${COLS}, 1fr);
    grid-template-rows: repeat(${ROWS} , 100px);
    height: calc(100vh - 10px);
`

const HarbourBlock = styled.div`
    background-color: lightblue;
`

const BayBlock = styled.div`
    background-color: darkblue;
`

const setupGrid = () => {
    let gridItems = []

    for (let i = 1; i <= ROWS; i++) {
        gridItems.push(<DockBlock/>)
        gridItems.push(<DockBlock/>)
        gridItems.push(<HarbourBlock></HarbourBlock>)
        gridItems.push(<HarbourBlock></HarbourBlock>)
        gridItems.push(<HarbourBlock></HarbourBlock>)
        gridItems.push(<BayBlock></BayBlock>)
        gridItems.push(<BayBlock></BayBlock>)
        gridItems.push(<BayBlock></BayBlock>)
        gridItems.push(<BayBlock></BayBlock>)
    }
    return gridItems
}


class Main extends Component {
    constructor() {
        super()
        this.state = {harbourControl:[]}
    } 

    render() {
        return (
            <MainHarbour>
                {setupGrid()}
            </MainHarbour>
        )
    }
} 

export default Main