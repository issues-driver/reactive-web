import React from "react";

const Category = props => {
  const {
    items,
    textProperty,
    valueProperty,
    onItemSelect,
    selectedItem
  } = props;
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[valueProperty]}
          className={
            item[valueProperty] === selectedItem
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onItemSelect(item[valueProperty])}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

Category.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default Category;
