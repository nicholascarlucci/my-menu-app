import React from "react";
import { connect } from "react-redux";
import * as mealActions from "../../redux/actions/mealActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

class MealsPage extends React.Component {
  componentDidMount() {
    this.props.actions.loadMeals().catch(error => {
      alert("loading courses failed!" + error);
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <h2>Meals</h2>
        {this.props.meals.map(meal => (
          <div key={meal.title}>{meal.title}</div>
        ))}
      </div>
    );
  }
}

MealsPage.propTypes = {
  meals: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = ({ meals }) => {
  return {
    meals
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(mealActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MealsPage);
