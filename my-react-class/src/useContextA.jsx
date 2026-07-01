import {useState, createContext} from 'react';
import UseContextB from './useContextB';



    
export const UserContext = createContext();

function UseContextA() {
  const [user, setUser] = useState('Gozie')

  return(
    <div className="box">
    <h2>UseContextA</h2>
    <h2>{`Welcome, ${user}!`}</h2>
    <UserContext.Provider value={user}>
      <UseContextB user={user}/>
    </UserContext.Provider>
    </div>
  )

}
export default UseContextA;