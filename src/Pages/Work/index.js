import { Link } from "react-router-dom";

function Work() {
  return (
    <div>
      <div className="mr-auto">
        <div className="title-container">
          <Link to={"/music"} className="title-1">
            Music
          </Link>
        </div>
        <div className="title-container">
          <Link to={"/dance"} className="title-1">
            Dance
          </Link>
        </div>
        <div className="title-container">
          <Link to={"/picture"} className="title-1">
            Picture
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work;
