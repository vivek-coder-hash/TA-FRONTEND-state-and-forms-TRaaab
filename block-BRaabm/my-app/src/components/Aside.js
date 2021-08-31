import React from 'react';

class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHide: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      // console.log(prevState);
      return {
        isHide: !prevState.isHide,
      };
    });
  };

  handleView = (userstatus) => {
    if (userstatus) {
      return <Article />;
    } else {
      return <Hidden />;
    }
  };

  render() {
    return (
      <>
        <main className="container flex padding">
          <aside class="sidebar">
            <nav class="sidebar-nav">
              <a href="#">
                <img src="assets/icons/dashboard.svg" />
                <span>Home</span>
              </a>

              <a href="#">
                <img src="assets/icons/article.svg" />
                <span>Contact</span>
              </a>

              <a href="#">
                <img src="assets/icons/analytics.svg" />
                <span>About</span>
              </a>
            </nav>

            <button onClick={this.handleClick} class="logout-btn">
              <img src="assets/icons/log-out.svg" />
              <span>{this.state.isHide ? 'Show' : 'Hide 🥖🥖'}</span>
            </button>
          </aside>

          {this.handleView(this.state.isHide)}
        </main>
      </>
    );
  }
}

function Article(props) {
  return (
    <article class="article">
      <img src="assets/01.png" alt="image not loading" />
      <h1 class="heading">Why we are doing Altcampus?</h1>
      <p class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias provident
        ipsa similique laboriosam autem earum minima totam porro, incidunt quasi
        ut. Officiis hic neque incidunt dolorem possimus corrupti enim dolor.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        repellendus non sequi sapiente consequatur explicabo tempore recusandae
        quisquam, quos, cumque praesentium et quo dolorum nisi iste unde omnis
        minima consectetur!
      </p>

      <p class="text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
        repellendus ea aspernatur perspiciatis! Odio, possimus dignissimos
        assumenda accusantium id molestias. Eius autem itaque corrupti animi
        ducimus quos, enim cumque accusamus.
      </p>
      <a class="btn" href="#">
        Read More
      </a>
    </article>
  );
}

function Hidden() {
  return <h1>Content is hidden</h1>;
}

export default Aside;
