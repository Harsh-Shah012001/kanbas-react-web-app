import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const unenroll = async (userId: string, courseId: string) => {
  const { data } = await axios.post(`${ENROLLMENTS_API}/unenroll`,{userId, courseId});
  return data;
};
export const enroll = async (userId: string, courseId: string) => {
  const { data } = await axios.put(`${ENROLLMENTS_API}/enroll`, {userId, courseId});
  return data;
};