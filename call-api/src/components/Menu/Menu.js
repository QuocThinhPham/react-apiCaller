import React from 'react';
import { Route, Link  } from 'react-router-dom';

const menus = [
  {
    label : 'Trang Chủ',
    to : '/',
    activeOnlyWhenExact : true
  },
  {
    label : 'Sản Phẩm',
    to : '/product',
    activeOnlyWhenExact : false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => {
        var active = match ? 'active' : '';
        return (
          <li className={`nav-item ${active}`}>
            <Link to={to} className="nav-link">{label}</Link>
          </li>
        );
      }}
    />
  );
  
}

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <span className="navbar-brand">Call API</span>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            { this.showMenuLink(menus) }
          </ul>
        </div>
      </nav>
    );
  }

  showMenuLink = (menus) => {
    var result = null;
    if(menus.length > 0) {
      result = menus.map((link, index) => {
        return  <MenuLink
                  key={index}
                  label={link.label}
                  to={link.to}
                  activeOnlyWhenExact={link.activeOnlyWhenExact}
                />
      })
    }
    return result;
  }

}

export default Menu;