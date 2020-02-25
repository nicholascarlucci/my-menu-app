import React from "react";
import { connect } from "react-redux";
import * as menuActions from "../../redux/actions/menuActions";
import PropTypes from "prop-types";
import configureStore from "../../redux/configureStore";

class MenusPage extends React.Component {
  state = {
    menu: {
      title: ""
    }
  };

  handleChange = event => {
    const menu = { ...this.state.menu, title: event.target.value };
    this.setState({ menu });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createMenu(this.state.menu);
  };

  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={this.handleSubmit}>
          <h2>Menus</h2>
          <h3>Add Menu</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.menu.title}
          />
          <input type="submit" value="Save" />
          {this.props.menus.map(menu => (
            <div key={menu.title}>{menu.title}</div>
          ))}
        </form>
      </div>
    );
  }
}

MenusPage.propTypes = {
  menus: PropTypes.array.isRequired,
  createMenu: PropTypes.func.isRequired
};

const mapStateToProps = ({ menus }) => {
  return {
    menus
  };
};

const mapDispatchToProps = {
  createMenu: menuActions.createMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(MenusPage);
