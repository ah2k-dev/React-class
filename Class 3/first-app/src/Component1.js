import React from "react";
import Component2 from "./Component2";
const Component1 = (props) => {
    // console.log(props);
    return (
        <div>
            <h1>{props.count}</h1>
            {/* Hello {props.name} */}
            {/* <Component2 name={props.name}/> */}
        </div>
    )
}

export default Component1