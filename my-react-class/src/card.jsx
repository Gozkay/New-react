import Picture from "./assets/nude.jpg"

function Card() {
    return (
    <div className="card">
        <img src={Picture} alt="Card Image" />
        <h2>Card Title</h2>
        <p>This is a card description.</p> 
     
    </div>  
    ) 
}
export default Card