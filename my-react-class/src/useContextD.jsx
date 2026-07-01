import {useContext} from 'react';
import { UserContext } from './useContextA';
function UseContextD() {
    const user = useContext(UserContext);
    return (
        <div className="box">
            <h2>UseContextD</h2>
            <h2>{`Bye bye, ${user}!`}</h2>
        </div>
    )
}
export default UseContextD;