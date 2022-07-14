import React from "react";

export class CountDown extends React.Component{

    constructor(props){
        super(props)
        this.state = {count: 100}
    }

    componentDidMount(){
        this.update()
    }

    update(){
        let currentCount = this.state.count - 1;
        setInterval(
            () => {
                this.setState({count:currentCount})
            }, 1000
        )
        
    }
    // TODO: CHECK WHY COUNT REDUCES BY 2 INSTEAD OF ONE


    render(){
        return(
            <div>
                <center>
                    <h4 className="time-text">{this.state.count}</h4>
                </center>
            </div>
        )
    }

}