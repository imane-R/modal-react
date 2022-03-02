import React, { useState } from "react";
import { Modal } from "./lib/modal"
import ReactDOM from "react-dom";

export const App = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return (
        <div>
            <button onClick={toggle}>Open Model</button>
            <Modal isShowing={isShowing} modalMessage="Employee Created!"  toggle={toggle}  />
        </div>
       
    );
};
ReactDOM.render(
    <App />,
    document.getElementById("root"));