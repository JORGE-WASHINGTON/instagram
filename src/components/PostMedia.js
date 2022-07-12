import "../features/posts/postlist.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const PostMedia = ({ media, postId }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(null);
  const onImgLoad = ({ target: img }) => {
    setImageLoaded(true);
    const { naturalHeight: height, naturalWidth: width } = img;
    console.log(height, width);
    const ratio = ((height / width) * 100).toFixed(2);
    setAspectRatio(ratio + "%");
  };

  return (
    <div className="post-image">
      <div className="image-wrapper" style={{ paddingBottom: aspectRatio }}>
        <Link to={`/p/${postId}`}>
          <img
            onLoad={onImgLoad}
            src="https://i.postimg.cc/zDkyCCct/292411382-1368616506966337-383727639738925666-n.jpg"
            alt="Author Avatar"
            className={`smooth-image image-${
              imageLoaded ? "visible" : "hidden"
            }`}
          />
        </Link>
      </div>
    </div>
  );
};

export default PostMedia;
