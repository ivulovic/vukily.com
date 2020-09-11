import request, {
  makeBlogUrl,
  makeGetReq,
  makePostReq
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

export const getArticleContent = async (payload) => {
  const response = await request(
    makeBlogUrl("/content/article"),
    makePostReq(payload)
  );
  return response;
}