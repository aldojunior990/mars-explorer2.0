import axios from "axios";
import { QueryKey, useQuery } from "react-query";

export function MyUseQuery<T = unknown>(name: string, request: string) {
  const { data, isFetching } = useQuery<T | null>(name, async () => {
    const response = await axios.get(request);
    return response.data;
  });

  return { data, isFetching };
}
