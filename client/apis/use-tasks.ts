import { useQuery } from "@tanstack/react-query";
import request from "superagent";

import { Task } from "../../models/tasks";

export default function useTasks() {
  return useQuery({
    queryKey:['task'],
    queryFn: async () => {
      const res = await request.get("/api/v1/tasks")
      if (res.ok) {
        return res.body as { locations: Location[] }
      }

      throw new Error(res.text)
    },
  })
}