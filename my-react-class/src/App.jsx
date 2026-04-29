import Header from "./header"
import Footer from "./footer"
import Food from "./food"
import Card from "./card"
import Button from "./button"
import Student from "./student"
import UserGreeting from "./userGreeting"

function App() {
  return (<>
    <Header />
    <p>This is my app.</p>
    <UserGreeting isLogged={true} userName="Gozie" />
    <Food />  
    <Card />
    <Card />
    <Card />
    <Button />
    <Student name="SpongeBob" age={27} isStudent={true} />
    <Student name="Patrick" age={28} isStudent={false} />
    <Student name="Squidward" age={30} isStudent={false} />
    <Student name="Sandy" age={29} isStudent={true} />
    <Student />
    <Footer />
          
  </>
  )
}
 


export default App
