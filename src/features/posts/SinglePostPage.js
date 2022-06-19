import React from "react";
import { useParams } from "react-router-dom";
import "./singlepostpage.css";
import { selectPostById } from "./postsSlice";
import { useSelector } from "react-redux";
import { selectUserById } from "../users/usersSlice";
import Avatar from "../../components/Avatar";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const user = useSelector((state) => selectUserById(state, post.user));
  console.log(user);

  return (
    <section className="singlepostpage-section">
      <div className="singlepostpage-wrapper">
        <article>
          <div className="image-container">
            <img src={`../${post.image}`} alt="" />
          </div>
          <div className="singlepostpage-details">
            <div className="details-header">
              <Avatar user={user} />
              <span>{user.name} * Following </span>
            </div>
            <div className="details-content">
              <div style={{ display: "flex" }}>
                <Avatar user={user} />
                <div>
                  <p>
                    <span>{user.name}</span>Choose 1 French Adjective and use it
                    in a sentence. 💡Comment your sentence below! 👩‍🏫 Want to
                    learn more French? 👉Click the link in our bio at
                    @FrenchPod101_ to sign up for free and access the best
                    online resources!
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div className="details-actions"></div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SinglePostPage;
