import logo from './logo.svg';
import './App.css';


/* <p id="title">Title</p>
<Person name="Ruble" naika="Moushumi"></Person>
<Person name="Baaparaj" naika="cheka"></Person>
<Person></Person>
<Person></Person>
<Person></Person> */

/* <Friend phone="1945" address="Noakhaili"></Friend>
<Friend phone="985085" address="Dhaka"></Friend>
<Friend phone="94778" address="Rongpur"></Friend> */

function App() {
  const nayoks = ['Ruble', 'Aomorshani', 'Bapparaj', 'rajak', 'riyaj'];

  const cinemas = [
    { nayok: 'Koober', nayika: 'kopila' },
    { nayok: 'Rubel', nayika: 'Moushumi' },
    { nayok: 'Razzak', nayika: 'Shabana' },
    { nayok: 'Jashim', nayika: 'Suchorita' },

  ]
  return (
    <div className="App">
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
      </ul>

      {/* <Cinema nayok="J Bond" nayika="Cat W"></Cinema>
      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}></Cinema>)
      } */}
      <Person name={nayoks[0]} nayika="Moushumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person></Person>
    </div >
  );
}


function Person(props) {
  console.log(props);
  const person = {
    backgroundColor: 'aquamarine',
    borderRadius: '20px',
    border: '3px solid blue',
    margin: '20px'
  }
  return (
    <div style={person}>
      <h2>Name : {props.name}</h2>
      <p>Hero of : {props.naika}</p>
    </div>
  );
}

function Friend(props) {
  console.log(props);
  return (
    <div className="person">
      <h3>Phone :{props.phone} </h3>
      <h4>Address :{props.address} </h4>
    </div>
  );
}

export default App;
