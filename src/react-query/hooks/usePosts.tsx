 import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) =>
  useInfiniteQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    getNextPageParam: (lastPage, allPages) => {
      // Assuming the API response has a property 'length' indicating the number of items in the next page
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    staleTime: 1 * 60 * 1000, // 1min
    initialPageParam: 1
  });

export default usePosts;
