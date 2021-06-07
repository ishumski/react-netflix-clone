const API_KEY = '2e885ad130747ee7e9c5194b1774eab8';

export default class Request {
  static get NETFLIX_ORIGINALS() {
    return `/discover/tv?api_key=${API_KEY}`
  }
}