import "./directoryItem.style.scss";

const DirectoryItem = ({ category, onClick }) => {
  const { imageUrl, title } = category;

  return (
    <div className="directory-container" onClick={onClick}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
