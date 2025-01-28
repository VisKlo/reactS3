import axios from "axios";
import { IPosts } from "../types/Posts";

export const fetchPosts = {
  list: async (): Promise<IPosts[]> => {
    const response = await axios.get<IPosts[]>("https://jsonplaceholder.typicode.com/posts?_limit=10");
    const data = response.data;

    return data.map((post: any) => ({
      ...post,
      isLiked: false,
    }));
  },
};