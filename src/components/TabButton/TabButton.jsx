import './TabButton.css';

//Functions are a special type of variable, They are first class citizens
export default function TabButton({ children, onSelect, isSelected }) {
    /*
    function handleClick() {
        console.log('Hello World');
    }
    */
    return (
        <li>
            <button className= {isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
        </li>
    )
}
/*
Cyclomatic complexity: Within a scope you have more scopes, nesting
More importantly "closure"

We are now replacing the handleClick with the onSelect function
*/