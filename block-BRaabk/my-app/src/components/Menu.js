function Menu(props) {
  return (
    <div className="container flex wrap justify-between">
      {props.everyone.map((person) => {
        return (
          <article className="flex-30">
            <div className="flex justify-between align-center">
              <img src={person.image} alt={person.name} />
              <p>{person.name}</p>
            </div>
            <h2>{person.description}</h2>
            <button className="btn">Learn More!</button>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
