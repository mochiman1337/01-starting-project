import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept/CoreConcept';
import TabButton from './components/TabButton/TabButton';
import { useState } from 'react';//Hook
import CoreConcepts from './components/CoreConcept/CoreConcepts';// We need to add this for coreconcepts to work
import Examples from "./components/CoreConcept/Examples.jsx";//Added for Examples section

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  console.log("Appe is rendered");
  let tabContent = <p>"Please select a topic"</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].title}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].title}
          </code>
        </pre>
      </div>
    )
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic)
  }
  //You must have at least ONE PARENT element, like <div> to work. Changed to <> shorthand
  return (
    <>
      <Header />
      <main>
        <CORE_CONCEPTS />
        <Examples />
      </main>
    </>
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

Function that calls a function = callback
()=> function() = anonymous function

Pay attention to <sections> tags. This is a nice way to break up your webpage when designing components
*/