import React from "react";
import { keyBy } from "lodash";
import makeRequest, { Media, Post, User } from "./api/requester";
import Carousel from "./carousel";

export async function getServerSideProps() {
  const postRequest = await makeRequest("posts", "offset=0&limit=10");

  const { posts }: { posts: Post[] } = (await postRequest.json()).response;

  const userMediaFields = await Promise.all(
    posts.map(async ({ mediaId, id, user: { username } }) => {
      return {
        media: (await (await makeRequest(`medias/${mediaId}`)).json()).response
          .media as Media,
        user: (await (await makeRequest(`users/${username}`)).json()).response
          .user as User,
        postId: id,
      };
    })
  );
  const userMediaGroupedByPostId = keyBy(userMediaFields, "postId");

  return { props: { posts, userMediaFields: userMediaGroupedByPostId } };
}

export default function Home(data: any) {
  return (
    <main>
      <Carousel data={data} />
    </main>
  );
}
