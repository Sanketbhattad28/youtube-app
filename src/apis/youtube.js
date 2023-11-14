import axios from "axios";

const KEY = "AIzaSyC6aVqPcZmI0dPYd4QmonKL2CEtgQk3lrA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
