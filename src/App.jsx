import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>JSX</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>
          </menu>
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
Introduced TabButton Component, and relevant paths and code.
*/