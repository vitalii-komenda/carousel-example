export type Post = {
  title: string;
  id: string;
  description: string;
  mediaId: string;
  user: {
    username: string;
  };
};

export type Media = {
  urls: {
    small_s3: string;
    small: string;
    full: string;
    regular: string;
  };
  statistics: {
    likes: number;
    created: number;
  };
};
export type User = {
  first_name: string;
  last_name: string;
  profile_images: {
    medium: string;
    large: string;
  };
};
export type UserMediaFields = {
  [key: string]: {
    media: Media;
    user: User;
  };
};

export default (url: string, query: string = "") => {
  const ROOT_URL = "https://apis.slstice.com/mock";
  const API_KEY = "ZSTYF0GBSSF0l3Ou6DTPE";
  const URL = `${ROOT_URL}/${url}?api_key=${API_KEY}&${query}`;

  return fetch(URL);
};
