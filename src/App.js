import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
function App() {
  //we will toggle the modal component and the sidebar component
   // we can make a state value so that to toggle the modal so we can do that as we did before by making state value false and then if it is true then we can toggle throw the classes 
  // but we can't do that because we can't open the modal from the modal because the button in the home component
 // اصلا ال هوم فيها زرارين واح لل مدل والتاني لل سايد بار وبالتالي عشان نمرر اي بروب لل مودل او لل سايد بار لازم نممرهم الاول للهوم وكدا هيكون كتير فهنستخدم الكونتكست
  return (
    <>
      <Home />
      <Modal />
      <Sidebar />
    </>
  )
}

export default App
