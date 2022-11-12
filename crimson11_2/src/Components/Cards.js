import "./Cards.css";

function Cards({ title, imageURL }) {
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={require("./Sports.png")} alt={imageURL} />
        <div>{title}</div>

        <input type="radio" value="Select" />
      </div>
    </div>
  );
}
export default Cards;
