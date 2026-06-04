import Header from "./header"
import Footer from "./footer"
import Food from "./food"
import Card from "./card"
import Button from "./button"
import Student from "./student"
import UserGreeting from "./userGreeting"
import List from "./list"
import ProfilePicture from "./profilepic"
import MyComponents from "./myComponents"
import Counter from "./counter"
import OnChange from "./onChange"

function App() {
  const fruits = [{id: 1, name:'Apple', carlories: 95},
            {id: 2, name:'Banana', carlories: 105},
            {id: 3, name:'Cherry', carlories: 50},
            {id: 4, name:'Date', carlories: 20},
            {id: 5, name:'Elderberry', carlories: 70}]
  const vegetable = [{id: 1, name:'Apple', carlories: 95},
            {id: 2, name:'Banana', carlories: 105},
            {id: 3, name:'Cherry', carlories: 50},
            {id: 4, name:'Date', carlories: 20},
            {id: 5, name:'Elderberry', carlories: 70}]
  return (<>
    <Header />
    <p>This is my app.</p>
    <UserGreeting isLogged={true} userName="Gozie" />
    <Counter />
    <UserGreeting />
    <ProfilePicture />
    <OnChange />
    <Food />  
    <Card />
    <Card />
    <Card />
    <Button />
    <MyComponents />
    <Student name="SpongeBob" age={27} isStudent={true} />
    <Student name="Patrick" age={28} isStudent={false} />
    <Student name="Squidward" age={30} isStudent={false} />
    <Student name="Sandy" age={29} isStudent={true} />
    {fruits.length > 0 && <List items={fruits} catergory="Fruits" />}
    {vegetable.length > 0 && <List items={vegetable} catergory="Vegetables" />}
    <Student />
    <Footer />
          
  </>
  )
}
 


export default App
