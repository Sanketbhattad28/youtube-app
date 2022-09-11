import axios from "axios";

const KEY = "AIzaSyCpzypSyDeXADxn3TIZCEBKx3E4ePo81VQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
