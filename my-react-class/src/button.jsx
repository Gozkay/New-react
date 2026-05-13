
function Button() {
    const styles= {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
}
// const handleClick = () => console.log("OUCH!")
// const handleClick2 = (name) => console.log(`Ouch again, ${name}!`)
let count = 0
const handleClick =  (name) => {
    if(count < 3){
        count++;
        console.log(`${name} you clicked me ${count} time/s`);
    }
    else {
        console.log(`${name} stop clicking me!`)
    }
}

    return(
        <button style={styles} onClick={() => handleClick('John')}>Click me</button>
    )
}
export default Button