import "./Socialfeed.css";
import SocialShare from "../Share/SocialShare";
import SocialPost from "../Post/SocialPost";
import { Posts } from "../../../dummyData";

const SocialFeed = () => {
  return (
    <>
      <div className="social-feed">
        <div className="social-feed-wrapper">
          <SocialShare />
          {Posts.map((p) => (
            <SocialPost key={p.id} post={p} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialFeed;
