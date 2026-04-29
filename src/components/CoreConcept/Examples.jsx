import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton"; // Adjusted path to find TabButton

export default function Examples({ selectedTopic, onSelect }) {
    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={selectedTopic==="components"} onClick={() => onSelect("components")}>Components</TabButton>// Forwarding Added?
                <TabButton isSelected={selectedTopic==="jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic==="props"} onSelect={() => handleSelect("props")}>Props</TabButton>
                <TabButton isSelected={selectedTopic==="state"} onSelect={() => handleSelect("state")}>State</TabButton>
            </menu>
        </section>
    );
}