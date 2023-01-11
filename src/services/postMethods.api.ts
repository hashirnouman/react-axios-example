import { Post, PostId } from "../@types/request";
import { axiosInstance } from "../utils/axios";

export const getTodo = async () => {
  const resp = await axiosInstance.get("/posts");
  return resp.data;
};
export const getCommentsByPostId = async (data: PostId) => {
  const resp = await axiosInstance.get(`/comments?postId=${data.postId}`);
  return resp.data;
};

export const createPost = async (data: Post) => {
  const resp = await axiosInstance.post("/posts", data);
  return resp;
};
export const getAllPost = async () => {
  const resp = await axiosInstance.get("/posts");
  return resp.data;
};
