export default function Greetings() {
    const dateObject = new Date();
    const currentTime = dateObject.toLocaleTimeString()
    // const currentHour = dateObject.getHours()
    const currentHour = 22;

    function message(hour) {
        //this ternary returns a message based on the hour of the day
        return hour <= 12 ? { greeting: "Good Morning", style: { color: "red" } } : (hour <= 18 ? { greeting: "Good Afternoon", style: { color: "green" } }
            : { greeting: "Good Evening", style: { color: "blue" } })

    }

    return (
        <>
            <h1 style={message(currentHour).style}> {message(currentHour).greeting}!</h1>
        </>)
}




// function daytimeChecker(hour) {
//     //this ternary returns an object of greeting and style based on the hour of the day
//     return (hour <= 12 ? { greeting: "Good Morning", style: { color: "red" } }
//         : (hour <= 18 ? { greeting: "Good Afternoon", style: { color: "green" } }
//             : { greeting: "Good Evening", style: { color: "blue" } }))

// }


// return (
//     <>
//         <h1 style={daytimeChecker(currentHour).style}> {daytimeChecker(currentHour).greeting}!</h1>
//     </>)
// }