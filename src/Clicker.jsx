import PropTypes from "prop-types"
import "./Clicker.css"

export default function Clicker({ message, buttonText }) {
    function btnClicked() {
        console.log("button clicked")
        window.alert(message)
    }

    return (
        <>
            <button onClick={btnClicked}>{buttonText}</button>


        </>
    )
}

Clicker.propTypes = {
    message: PropTypes.string,
    buttonText: PropTypes.string
}
