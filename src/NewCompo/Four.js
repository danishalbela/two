import React from "react";
import Five from "./Five";

class Four extends React.Component{
constructor (props)
{
    super(props)
    // console.log(this.props)

    this.state={stateData:this.props.sendAge}
}

  newData(para)
  {
    this.setState({stateData:para})
  }


    render(){ 
        return(
            <div>
            <h3>Four Component says {this.props.sendAge}</h3>
            <Five data={this.props.sendAge}
            newData={this.newData}/>
          </div>
        )     
    }
}
export default Four;