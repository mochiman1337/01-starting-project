import './TabButton.css';

//Functions are a special type of variable, They are first class citizens
export default function TabButton({ children }) {
    function handleClick() {
        console.log('Hello World');
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}
/*
Cyclomatic complexity: Within a scope you have more scopes, nesting
More importantly "closure"
*/