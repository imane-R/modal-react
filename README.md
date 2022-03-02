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
  const [showModel, setShowModel] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
         {showModel && <Modal modalmessage="Employee Created!"  toggleModal={toggleModal} backgroundColor={white}/>}
    </>
  );
};
```
