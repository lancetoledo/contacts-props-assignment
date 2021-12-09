import './App.css';
import Contactslist from './components/Contactslist';
import Sidebar from './components/Sidebar';

/* 

Here we have a contacts app! The basic front end is built for you! Your job is to create the functionality and dynamically create 5 DIFFERENT CONTACTS using props.

TODO: Create an array of objects that contain the necessary properties you need to pass down to the Contact

Hint: Create the array and pass the props here then take the props you need from the object in the Contact.jsx
*/


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Contactslist />
    </div>
  );
}

export default App;
