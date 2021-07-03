import { useState } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { Home, List, Settings, UserPlus, Menu, X } from "react-feather";

import photo from "../assets/images/user-avatar.svg.png";
import { logout } from "../actions/authActions";

function NavBar({ user, logout }) {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => setOpenNav((openNav) => !openNav);
  return (
    <>
      <Menu id="menu-toggler" size={28} onClick={toggleNav} />
      <div className={`sidebar ${!openNav ? `hide-sidebar` : ``}`}>
        <div className="sidebar-header">
          <X id="close-nav" onClick={toggleNav} />
          <Link to="/profile">
            <img src={photo} alt="user_avatar" />
          </Link>
          <Link to="/profile">
            <h3>{user?.username}</h3>
          </Link>
        </div>
        <ul className="sidebar-list">
          <li>
            <Link to="/home">
              <Home />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/list">
              <List />
              <span>List</span>
            </Link>
          </li>
          <li>
            <Link to="/settings">
              <Settings />
              <span>Settings</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <UserPlus />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
        <h6 onClick={logout}>Sign Out</h6>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { logout })(NavBar);
