import request, {
  makeBlogUrl,
  makeGetReq,
} from "../utils/request";

// const wrapResponse = (payload) => {
//   return {
//     type: 'article',
//     payload,
//   }
// }

export const getBlogContent = async (payload) => {
  const response = await request(
    makeBlogUrl("/content"),
    makeGetReq()
  );
  return response;
}