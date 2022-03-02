# modal-react

[github](https://github.com/imane-R/modal-react.git)

## Installation

```sh
npm i react-modal-ib
import { Modal } from 'react-modal-ib';
```
## Example

how to use react-modal-ib 

```js
import React, { useState } from "react";
import { Modal } from "react-modal-ib";

export const App = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return (
        <div>
            <button onClick={toggle}>Open Model</button>
            <Modal isShowing={isShowing} modalMessage="Employee Created!" toggle={toggle}/>
        </div>
       
    );
};
```
there is also a custom style

```js
const customStyle = {
  overlay: {
    backgroundColor: "red",
  },
  content: {
    borderRadius: "10px",
  },
  close: {
    margin: "5px 17px",
   fontSize: "14px",
  },
};

<Modal Showing={isShowing} modalMessage="Employee Created!" toggle={toggle}  style={customStyle} />;
