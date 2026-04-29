import { CORE_CONCEPTS } from "../../data"
import CoreConcept from "./CoreConcept"

export default function CoreConcepts() {//Always start with this
  <section id="core-concepts">
    <h2>Time to get started!</h2>
    <ul>
      {
        //I have an array of JS objects but i need a Array of HTML elements
        [
          CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} />)
        ]
      }
    </ul>
  </section>

}