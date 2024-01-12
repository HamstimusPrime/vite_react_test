import PropTypes from "prop-types"

export default function Clicker({ message, buttonText }) {
    function btnClicked() {
        console.log("button clicked")
        window.alert(message)
    }

    return (
        <>
            <button onClick={btnClicked}>{buttonText}</button>
            {/* <h1>{message}</h1> */}

        </>
    )
}

Clicker.propTypes = {
    message: PropTypes.string,
    buttonText: PropTypes.string
}
