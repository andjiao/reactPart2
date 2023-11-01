
import { useQuery } from "@tanstack/react-query";
import axios from "axios"

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}


const PostList = ()=> useQuery <Post[], Error>({
    queryKey:["posts"],
    queryFn: ()=> axios
      .get <Post []>('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.data),
      staleTime: 10*1000



})


export default PostList