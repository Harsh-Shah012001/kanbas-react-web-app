import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ASSIGN_API = `${REMOTE_SERVER}/api/assignments`;
export const deleteAssignment = async (assignId: string) => {
 const response = await axios.delete(`${ASSIGN_API}/${assignId}`);
 return response.data;
};

export const updateAssignment = async (assign: any) => {
    const { data } = await axios.put(`${ASSIGN_API}/${assign._id}`, assign);
    return data;
  };