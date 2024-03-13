class ApiMovies {
  constructor(data) {
    this._url = data.baseUrl;
  }

  _getResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);;
  }

  getMovies() {
    return fetch(this._url)
      .then(this._getResponse)
  }
}
const moviesApi = new ApiMovies({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi
