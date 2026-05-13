
// function UserGreeting(props) {
//     const isLoggedIn = props.isLogged;
// //     if (isLoggedIn) {
//         return <h1>Welcome back! {props.userName}</h1>;
//     }
//     return <h1>Please sign up.</h1>;
// }
// export default UserGreeting
function UserGreeting({userName="Student", isLogged=true}) {
    // return (props.isLogged) ? <h1 className="welcome-mess">Welcome back! {props.userName}</h1> : <h1 className="login-prompt">Please sign up.</h1>;
    const welcomeMessage = <h2 className="welcome-mess">Welcome back! {userName}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please sign up.</h2>;
    return (isLogged) ? welcomeMessage : loginPrompt;
}
export default UserGreeting