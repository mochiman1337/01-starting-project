//import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept';

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
            {
              ///CORE_CONCEPTS.map((concept)=><CoreConcept {...concept}/>)
            }
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
..."NAME[i}"  This is a Spread operator
Line 76: CORE_CONCEPTS.map  Does same thing but in single line. Advanced
*/