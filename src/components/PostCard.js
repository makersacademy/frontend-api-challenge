import React from "react";
import moment from "moment";

const PostCard = ({ post }) => {

  return (
    <div className="event">
      <div className="label">
        <img src="https://i.pravatar.cc/300" />
      </div>
      <div className="content">
        <div className="summary">
          <a>@{post.user.handle}</a>
          <time dateTime={post.updated_at} className="date">
            {moment(post.updated_at).fromNow()}
          </time>
        </div>
        <div className="extra text">
          {post.body}
        </div>
        <div className="meta">
          <a className="like">
            <i className="like icon"></i> 5 Likes
          </a>
        </div>
      </div>
    </div>
  )
}

export default PostCard;