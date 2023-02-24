import { CourseOutline } from "~~/server/api/course/meta.get";
import useFetchWithCache from "./useFetchWithCache";

export default async () => useFetchWithCache<CourseOutline>(`/api/course/meta`);
