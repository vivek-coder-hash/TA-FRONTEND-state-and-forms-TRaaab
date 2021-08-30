function Menu(props) {
  return (
    <div className="container flex wrap justify-between">
      {props.everyMenu.map((menu) => {
        return (
          <article className="flex-30">
            <div className="flex justify-between align-center">
              <img src={menu.image} alt={menu.name} />
              <p>{menu.name}</p>
            </div>
            <h2>{menu.description}</h2>
            <button className="btn">Learn More!</button>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
