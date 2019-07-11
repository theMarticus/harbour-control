import React, {Component} from 'react'
import styled from 'styled-components'
import DockBlock from "./dock-div"
import HarbourBlock from "./harbour-div"
import BayBlock from "./bay-div"

/**
 * MainHarbour style using styled components 
 * Grid chosen as it is quick and easy.
 */
const MainHarbour = styled.main`
    display: grid;
    grid-template-columns: .25fr .5fr 1fr;
    grid-template-rows: 1fr;
    height: calc(100vh);
    position: relative;
`
    /** 
     * Main handles the logic of the Application.
     * All State information is stored here and this is where we would add the info to a Database if time allowed.
     * 
    */
class Main extends Component {

    /**
     * Simple constructor with state
     * BayList: Has an array of all of the boat in the bay.
     * HarbourWaitingList holds the id's of the items waiting to enter the harbour.
     * harbourBoat is an array to keep it the same data type BayList to handle boats
     * It should hold only one value at any one time.
     */
    constructor() {
        super()
        this.state = {
            BayList: [],
            HarbourWaitingList:[],
            harbourBoat: []
        }
    }
    

    /**
     * CompontDidmount part of the React Life Cycle sets the timer for us. 
     * 
     * I set it to once per second to stop over refreshes
     */

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    /**
     * componentWillUnmount another lifecycle method for clean up.
     */

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    /**
     * tick()
     * used for the movement every Second 
     * It handles the spawn boat timings and the harbour control.
     */

    tick() {
        if (Math.floor(Math.random() * Math.floor(10)) < 1) {
            this.spawnBoat()
        }
        this.moveBayBoats()
        this.harbourControl()
        this.moveHarbourBoats()
    }

     /**
     * harbourControl()
     * Harbour control is set to take the first item from the HarbourWaitingList array and move it to the harbour.
     * item is set to the first item as there should only be one item in the array at any time. 
     */
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

    /**
     * moveHarbourBoats() moves the boast in the harbour, this is only a logic value as time wouldn't allow me to set it to the boats animation
     * Currently logic and graphics are slightly out but close enough.
     */
    moveHarbourBoats(){
        this.setState(prevState => {
            prevState.harbourBoat.forEach((boat) => {
                if (boat.left - boat.speed <= 0) {
                        this.setState({harbourBoat: []})
                }
                 else {
                    boat.left -= boat.speed
                }
            })
        })
    }
    
    /**
     * spawnBoat() adds a boat to the BayList, this is called once every 10 time every second 
     */
    spawnBoat() {
        let type = this.BoatReturn()
        this.setState(prevState => ({
            BayList: [...prevState.BayList, type]
        }))
    }

    /**
     * BoatReturn() creates a boat for spawnBoat() it adds a random id to every boat for tracking.
     * this is sort of my odd database tracking without the database
     */

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

     /**
     * moveBayBoats()moves "the boat in the bay, and watches the time roll away"
     * Also adds the boats to the HarbourWaitingList when the reach the Harbour
     */

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
      
    /**
     * Render adds the 3 items to the page
     * DockBlock a fake dock
     * HarbourBlock for the one boat at a time
     * BayBlock for all the other boats as they spawn.
     */
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