import React from "react";
import "./postlist.css";
import { FcLike } from "react-icons/fc";

const PostList = () => {
  return (
    <div className="wrapper">
      <section className="container">
        <div className="post">
          <div className="post-header">
            <span>
              <img src="icon.jpg" alt="profile photo" />
            </span>
            <h2>mossorohoje</h2>
          </div>
          <div className="post-image">
            <img
              src="https://scontent.fjdo10-1.fna.fbcdn.net/v/t39.30808-6/289242476_6292921357391854_1199096352534928802_n.jpg?stp=dst-jpg_s640x640&_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHsJHSbywBtAXoffSouj-L6NIB0rsrR0AI0gHSuytHQAi05yZRvW3nGCyRyiG5X2jY0RE4LJNveU2LrTQfqdrjA&_nc_ohc=JKdMx7uMIiYAX9IaG3R&_nc_ht=scontent.fjdo10-1.fna&oh=00_AT-OUb02jdeblToGomwaH6xBUisfPJDMl8P6C9b1SfoHRg&oe=62B31E5E"
              alt=""
            />
          </div>
          <div className="post-details">
            <div className="details-buttons">
              <span className="like-icon">
                <button>
                  <div>
                    <svg
                      aria-label="Curtir"
                      class="_ab6-"
                      color="#8e8e8e"
                      fill="#8e8e8e"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                    </svg>
                  </div>
                  <div>
                    {" "}
                    <span></span>
                    <svg
                      aria-label="Curtir"
                      class="_ab6-"
                      color="#262626"
                      fill="#262626"
                      height="24"
                      role="img"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path>
                    </svg>
                  </div>
                </button>
              </span>
            </div>

            <div>
              Liked by <span>Salviodelmas</span>
            </div>
            <div>
              <span>marfranpneus</span> 10 anos sendo referencia no mercado
            </div>
            <div>see comments</div>
            <div>22 hours ago</div>
          </div>
          <div className="post-comment">
            <input type="text" placeholder="Add a Comment" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default PostList;
