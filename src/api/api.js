import { get, post } from './config'

export const apiAddress = p => post('/v2/store/order', p);
export const apiAddress1 = p => get('/v2/user/login', p);


/*
方式一：
const _baseUrl = 'http://musicapi.duapp.com/api.php';
const _baseUrl2 = 'https://api.imjad.cn/cloudmusic/';
export default {
  getPlayListByWhere (cat, order, offset, total, limit) {
    return _baseUrl + '?type=topPlayList&cat=' + cat + '&offset=' + offset + '&limit=' + limit;
  },
  getLrc (id) {
    return _baseUrl2 + '?type=lyric&id=' + id;
  },
}
*/

/*
// api.js
import config from "./config.js";

function urlData() {
  var sj =
    "https://www.easy-mock.com/mock/5a1fc1c6583969285ab17256/llylct/num1";
  return sj;
}
export default urlData;
*/
