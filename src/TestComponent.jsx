export default function TestComponent({ prop }) {
    console.log("this is the value of prop:" + prop)

    return (

        <ul>This is a component {prop.map(item => <li>{item}</li>)}</ul>

    )
}