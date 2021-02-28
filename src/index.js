import React from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './components/PeopleList';
import AddPersonForm from './components/AddPersonForm';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './style.css';
import reportWebVitals from './reportWebVitals';

const initialState = {
  contacts : ["Matthew Bellamy", "Dominic Howard", "Chris Wolstenhome"]
};

function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return {...state,
        contacts: [...state.contacts, action.data]}
    default:
      return state;
  }
}

const store = createStore(reducer);

/* function ContactManager(props) {
  const[contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
} */

ReactDOM.render(<Provider store={store}>
  <AddPersonForm />
  <PeopleList />
</Provider>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
