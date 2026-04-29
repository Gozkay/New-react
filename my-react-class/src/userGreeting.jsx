
// function UserGreeting(props) {
//     const isLoggedIn = props.isLogged;
// //     if (isLoggedIn) {
//         return <h1>Welcome back! {props.userName}</h1>;
//     }
//     return <h1>Please sign up.</h1>;
// }
// export default UserGreeting
function UserGreeting(props) {
    return (props.isLogged) ? <h1 className="welcome-mess">Welcome back! {props.userName}</h1> : <h1 className="login-prompt">Please sign up.</h1>;
}
export default UserGreeting