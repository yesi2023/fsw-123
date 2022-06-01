function Card(props) {
  return (
    <div
      className="cards"
      style={{ width: props.width, backgroundColor: props.backgroundColor }}>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <hr />
      <h3>{props.description}</h3>
    </div>
  );
}

export default Card;
