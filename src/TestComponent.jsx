export default function TestComponent({ brother }) {
    console.log("this is the value of prop:" + brother)

    return (
        <h1>This is a component {brother}</h1>

    )
}