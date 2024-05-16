import { Link } from "react-router-dom";
import "./Post.css";

export default function Post({img, title, description, timestamp}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">
          <Link to={`/post/{title}`} className="link">
            {title}
          </Link>
        </span>
        <hr />
        <span className="postDate">{timestamp}</span>
      </div>
      <p className="postDesc">
        {description}
      </p>
    </div>
  );
}