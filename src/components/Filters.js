import React from "react";
import data from "../constants/Sample - Restaurant list - technical assignment (PHP Javascript).json";

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Filters">
        <div className="Filters-item">
          <input
            className="inputField"
            type="text"
            name="searchField"
            value={this.props.searchField}
            placeholder="Search for Restaurants"
            onChange={this.props.handleFieldChange}
          />
        </div>
        <div className="Filters-item">
          <select
            value={this.props.sortField}
            className=""
            name="sortField"
            onChange={this.props.handleFieldChange}
          >
            <option className="bold" value="" selected>
              Sort by:
            </option>
            <option value="bestMatch">Best Match</option>
            <option value="newest">Newest</option>
            <option value="ratingAverage">Rating Average</option>
            <option value="distance">Distance</option>
            <option value="popularity">Popularity</option>
            <option value="averageProductPrice">Average Product Price</option>
            <option value="deliveryCosts">Delivery Costs</option>
            <option value="minimumCosts">Minimum Costs</option>
          </select>
        </div>
      </div>
    );
  }
}

export default Filters;
