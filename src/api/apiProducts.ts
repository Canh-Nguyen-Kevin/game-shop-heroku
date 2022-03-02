import axios from "axios";

export default axios.create({
  timeout: 2000,
  headers: { "X-Custom-Header": "foobar" },
});
