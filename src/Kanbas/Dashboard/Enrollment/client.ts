import axios from "axios";
const axiosWithCredentials=axios.create({withCredentials: true})
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const unenroll = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.post(`${ENROLLMENTS_API}/unenroll`,{userId, courseId});
  return data;
};
export const enroll = async (userId: string, courseId: string) => {
  const { data } = await axiosWithCredentials.put(`${ENROLLMENTS_API}/enroll`, {userId, courseId});
  return data;
};