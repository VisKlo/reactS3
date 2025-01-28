import { useEffect, useState } from "react";
import { fetchPosts } from "./core/queries";
import { IPosts } from "./types/Posts";

export const PostsApp = () => {
    const [posts, setPosts] = useState<IPosts[]>([]);

    useEffect(() => {
        const fetchDatas = async () => {
            try {
                const data = await fetchPosts.list();
                if(data) {
                    setPosts(data)
                }
            } catch (err) {
                console.error(err)
            }
        }
        fetchDatas();
    }, [])

    console.log(posts)
}

