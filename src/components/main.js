import React, {Component} from 'react'
import styled from 'styled-components'
import DockBlock from "./dock-div"
import HarbourBlock from "./harbour-div"
import BayBlock from "./bay-div"


const MainHarbour = styled.main`
    display: grid;
    grid-template-columns: .25fr .5fr 1fr;
    grid-template-rows: 1fr;
    height: calc(100vh);
    position: relative;
`

class Main extends Component {
    constructor() {
        super()
        this.state = {
            BayList: [],
            HarbourWaitingList:[],
            harbourBoat: []
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
        this.moveBayBoats()
        this.harbourControl()
        this.moveHarbourBoats()
    }

    harbourControl() {
        if(this.state.HarbourWaitingList.length > 0 && this.state.harbourBoat.length <= 0) {
            let id = this.state.HarbourWaitingList.shift()
            let item = [this.state.BayList.find(boat => boat.guid === id )]
            this.setState(prevState=> ({BayList: prevState.BayList.filter(boat => boat.guid !== id)}))
            console.log(item)
            item[0].left = 90
            item[0].waiting = false
            this.setState({harbourBoat: item})
        }
    }

    moveHarbourBoats(){
        this.setState(prevState => {
            prevState.harbourBoat.forEach((boat) => {
                if (boat.left - boat.speed <= 0) {
                    if (!boat.waiting){
                        boat.left = 0
                        this.setState({harbourBoat: []})
                    } else {

                    }
                } else {
                    boat.left -= boat.speed
                }
            })
        })
    }

    spawnBoat() {
        let type = this.BoatReturn()
        this.setState(prevState => ({
            BayList: [...prevState.BayList, type]
        }))
    }

    BoatReturn() {
        let top = Math.floor(Math.random() * Math.floor(850))
        let chance = Math.floor(Math.random() * Math.floor(3))
        let guid = () => {
            let S4 = () => {
               return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            };
            return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        }
        if (chance === 0) {
            return {guid: guid(), type: "speedBoat", top: top, left: 90, speed: 30, waiting:false}
        } else if (chance === 1) {
            return {guid: guid(),type: "sailBoat", top: top, left: 90, speed: 15, waiting:false}
        } else {
            return {guid: guid(), type: "cargoBoat", top: top, left: 90, speed: 5, waiting:false}
        }
    }

    moveBayBoats() {
        this.setState(prevState => {
            prevState.BayList.forEach((boat, index) => {
                if (boat.left - boat.speed <= 0) {
                    if (!boat.waiting){
                        boat.left = 0
                        this.state.HarbourWaitingList.push(boat.guid)
                        boat.waiting = true
                    }

                } else {
                    boat.left -= boat.speed
                }
            })
        })
    }
      

    render() {
        return (
            <MainHarbour>
                <DockBlock/>
                <HarbourBlock boatList={this.state.harbourBoat}/>
                <BayBlock boatList={this.state.BayList} />
            </MainHarbour>
        )
    }
} 

export default Main