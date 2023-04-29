import React, { useState, useEffect } from "react";
import { Post, UserMediaFields } from "./api/requester";

type CarouselProps = {
  data: {
    posts: Post[];
    userMediaFields: UserMediaFields;
  };
};

const Carousel: React.FC<CarouselProps> = ({
  data: { posts, userMediaFields },
}) => {
  const [currentPost, setCurrentPost] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPost((currentPost) => (currentPost + 1) % posts.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const post = posts[currentPost];

  return (
    <div className="flex h-screen">
      <div
        style={{
          backgroundImage: `url('${
            userMediaFields[post.id].media.urls.small_s3
          }')`,
        }}
        className="flex w-3/5 h-screen items-center bg-cover bg-center"
      >
        <div className="w-full h-full flex justify-center items-center backdrop-blur-md">
          <picture>
            <source
              media="(max-width: 400px)"
              srcSet={userMediaFields[post.id].media.urls.small}
            />
            <source
              media="(min-width: 1080px)"
              srcSet={userMediaFields[post.id].media.urls.regular}
            />
            <img
              className="backdrop-blur-lg"
              src={userMediaFields[post.id].media.urls.full}
              alt="picture"
            />
          </picture>
        </div>
      </div>

      <div className="w-2/5 bg-gray-100 text-gray-500 px-4 py-4 h-full flex flex-col">
        <div className="flex justify-end items-center h-20">
          <div className="text-sm mr-2">
            {userMediaFields[post.id].user.first_name}{" "}
            {userMediaFields[post.id].user.last_name}
          </div>
          <picture>
            <source
              media="(max-width: 64px)"
              srcSet={userMediaFields[post.id].user.profile_images.medium}
            />
            <source
              media="(min-width: 128px)"
              srcSet={userMediaFields[post.id].user.profile_images.large}
            />
            <img
              className="rounded-full"
              width="64"
              src={userMediaFields[post.id].user.profile_images.large}
              alt="Profile"
            />
          </picture>
        </div>

        <div className="flex space-y-2 text-gray-600 flex-col place-content-center h-full">
          <div className="text-2xl">{post.title}</div>
          <div>{post.description}</div>
        </div>

        <div className="flex space-y-4 text-sm justify-start h-20 flex-col">
          <div>
            &#x1F44D; {userMediaFields[post.id].media.statistics.likes} likes
          </div>
          <div>
            {new Date(
              userMediaFields[post.id].media.statistics.created * 1000
            ).toDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
