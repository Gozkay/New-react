import PropTypes from "prop-types";
Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired
}
function Student(props) {
    return (
        <div className="student">
            <p>Student Name: {props.name}</p>
            <p>Student Age: {props.age}</p>
            <p>Is Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
Student.defaultProps = {
    name: "Unknown",
    age: 0,
    isStudent: false
}
export default Student