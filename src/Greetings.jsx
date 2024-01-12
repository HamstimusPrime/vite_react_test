export default function Greetings() {
    const dateObject = new Date();
    const currentTime = dateObject.toLocaleTimeString()
    const currentHour = dateObject.getHours()
    // const currentHour = 14;

    function message(hour) {
        //this ternary returns a message based on the hour of the day
        return hour <= 12 ? "Good Morning" : (hour <= 18 ? "Good Afternoon" : "Good Evening")

    }

    return (
        <>
            <h1> {message(currentHour)}!</h1>
        </>)
}
