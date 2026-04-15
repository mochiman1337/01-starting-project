import reactImg from './assets/react-core-concepts.png';
//import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';

/*
function UserData(){
  const user = {first:"George", last:"Salayka", age:"40"}
  return (
    <div>
      <h2>Name: {user.last}, {user.first}</h2>
      <h3>Age: {user.age}</h3>
    </div>
  )
}
*/

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function Header() {
  const reactDescriptions = ('Fundamental', 'Crucial', 'Core');
  function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
//We too <header> from below and replaced it with <Header /> to reference this new function Header() we made


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              {
              ...CORE_CONCEPTS[0]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[1]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[2]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[3]
              }
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

/*
Notes:
!! Shortcut: Shift + Option + F
<UserData /> was removed from App() after </main>. This is required to run the UserData function
Create CoreConcepts(), Then created specialized ver. passing {props.???}, Make sure you import assest
Downloaded data.js and placed into src folder.
!! Shortcut: Cmd + D while hove over a repeated element selects every dupe after per shorcut. Fast replace!
*/