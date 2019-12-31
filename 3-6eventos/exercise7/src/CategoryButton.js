import React from "react";

class CategoryButton extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="item">
        <button>{this.props.newcategory}
        </button>
      </div>
    )
  }
}

export default CategoryButton;