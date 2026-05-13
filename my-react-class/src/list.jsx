function List(props) {
    const catergory = props.catergory;
    const beans = props.items;
    beans.sort((a, b) => a.carlories - b.carlories); 
    const lowercalories = beans.filter((fruit) => fruit.carlories < 100);  
    const listItems = lowercalories.map((fruit) => <li key={fruit.id}>{fruit.name}: &nbsp; - <b>{fruit.carlories}</b> calories</li>);

    return(<><h3>{catergory}</h3><ol>{listItems}</ol></>);
}
export default List