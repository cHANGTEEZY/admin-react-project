import "./UserImage.css";

const UserImage = ({ imageUrl, description, userName }) => {
  return (
    <>
      <div className="user-profile-desc">
        <img className="user-image" src={imageUrl} alt={description} />
        <p className="user-name">{userName}</p>
      </div>
    </>
  );
};

export default UserImage;
