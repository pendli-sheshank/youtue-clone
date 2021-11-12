import axios from "axios";

const KEY = "AIzaSyDXvkSMSSFLzvFvYdYONbxPMjgrmqEJSx8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});
