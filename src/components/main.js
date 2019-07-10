import React, {Component} from 'react'
import styled from 'styled-components'
import DockBlock from "./dock-div"
import HarbourBlock from "./harbour-div"
import BayBlock from "./bay-div"
import Boat from "./boat"


const MainHarbour = styled.main`
    display: grid;
    grid-template-columns: .5fr .5fr 1fr;
    grid-template-rows: 1fr;
    height: calc(100vh);
    position: relative;
`

class Main extends Component {
    constructor() {
        super()
        this.state = {
            BoatList: []
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        if (Math.floor(Math.random() * Math.floor(10)) < 1) {
            this.spawnBoat()
        }

        this.moveBoats()
    }

    spawnBoat() {

        let top = Math.floor(Math.random() * Math.floor(850))
        let item = { type: "speedBoat", top: top }
        this.setState(prevState => ({
            BoatList: [...prevState.BoatList, item]
        }))
    }

    moveBoats() {

    }
      

    render() {
        return (
            <MainHarbour>
                <DockBlock/>
                <HarbourBlock/>
                <BayBlock/>
                {this.state.BoatList.map((item, i ) => <Boat boatType={item} key={i} />)}
            </MainHarbour>
        )
    }
} 

export default Main