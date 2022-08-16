import { useNavigate } from "react-router-dom";

import DirectoryItem from "../directory-item/categoryItem.component";

import "./directory.style.scss";

const Directory = ({ categories }) => {
  const navigate = useNavigate();

  const onNavigationHandle = (route) => {
    navigate(route);
  };
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <DirectoryItem
            category={category}
            key={category.id}
            onClick={() => onNavigationHandle(category.route)}
          />
        );
      })}
    </div>
  );
};

export default Directory;
