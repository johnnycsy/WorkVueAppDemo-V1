import axios from "axios";

class HttpTools {
  /**
   * Get 请求
   * @param url
   * @constructor
   */
  Get = (url: string) => {
    return new Promise((resolve) => {
      axios.get(url).then((res) => {
        if (res.status == 200) {
          resolve(res.data);
        } else {
          console.error(res);
        }
      });
    });
  };
  /**
   * Post 请求
   * @param url
   * @param param
   * @constructor
   */
  Post = (url: string, param: object) => {
    return new Promise((resolve) => {
      axios.post(url, param).then((res) => {
        if (res.status == 200) {
          resolve(res.data);
        } else {
          console.error(res);
        }
      });
    });
  };
}

export default new HttpTools();
