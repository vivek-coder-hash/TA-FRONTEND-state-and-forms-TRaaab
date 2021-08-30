import React from 'react';
import data from '../data.json';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: '',
    };
  }

  render() {
    let menuNames = data.map((menu) => menu.category);
    let everyMenu;
    if (!this.state.activeMenu) {
      everyMenu = data.reduce((acc, menu) => {
        acc = acc.concat(menu.category);
        return acc;
      }, []);
    } else {
      everyMenu = data.find(
        (menu) => menu.category === this.state.activeMenu
      ).category;
    }

    return (
      <>
        <div className="peopleName flex justify-between wrap">
          {menuNames.map((menu) => (
            <a
              onClick={() => this.handleClick(menu)}
              className=""
              key={menu.id}
            ></a>
          ))}
        </div>

        <Menu everyone={everyone} />
      </>
    );
  }
}

export default Tags;
