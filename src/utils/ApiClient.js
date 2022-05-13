import API from '@aws-amplify/api-rest'
class ApiClient {
  constructor() {
    this.apiName = 'BingerApis-APIs'
    this.movies = `/movies`
    this.referral = `/referral`
    this.users = `/users`
    this.invite = `/invites/response`
    this.validateInvite = `/invites/verify`
    this.likeAMovie = `/movies/user`
    this.likedMovies = `/movies/likes`
    this.savedMovies = `/movies/saved-list`
    this.savedMovieAdd = `/movies/saved-list/`
    this.savedMovieRemove = `/movies/saved-list/`
    this.fetchMatches = `/movies/matches`
    this.matchedMovies = `/movies/matched`
    this.partner = `/partner`
    this.freeNetworks = `/networks`
    this.subscriptions = `/subscriptions`
    this.validateSub = `/subscriptions/check`
    this.updateCard = `/user`
    this.closeAccount = `/users/close/`
    this.rateTheApp = `/users/rate-app`
    this.genres = `/users/genres`
  }

  //async function wraps a promise into another promise, .cancel will not work
  cancelRequest(promise, message) {
    API.cancel(promise, message)
  }

  //anticipates to be cancel, do not execute with await
  getMovies(queryParams) {
    return API.get(this.apiName, this.movies, {
      queryStringParameters: { ...queryParams },
    })
  }

  getMovieById(id) {
    return API.get(this.apiName, `${this.movies}/${id}`, {})
  }
  //anticipates to be cancel, do not execute with await
  getCategories(queryParams) {
    return API.get(this.apiName, this.genres, {
      queryStringParameters: { ...queryParams },
    })
  }

  async updateNetworkState(netId, nextValue) {
    const body = {}
    body['active'] = nextValue
    return await API.put(
      this.apiName,
      this.freeNetworks + `/${netId}`,
      { body: body }
    )
  }

  async useInvite(code, type) {
    return await API.post(
      this.apiName,
      this.invite + `/${code}`,
      {
        body: { type },
      }
    )
  }

  async verifyInvite(code) {
    return await API.get(
      this.apiName,
      `${this.validateInvite}/${code}`
    )
  }

  async acceptReferral(referral) {
    return await API.post(
      this.apiName,
      this.referral + `/${referral}`
    )
  }

  async saveMovie(id) {
    return await API.post(
      this.apiName,
      `${this.savedMovieAdd}${id}`
    )
  }

  async removeSaved(id) {
    return await API.del(
      this.apiName,
      `${this.savedMovieRemove}${id}`
    )
  }

  async getUser(email) {
    return await API.get(this.apiName, this.users, {
      queryStringParameters: { email },
    })
  }

  async updateUser(body, id) {
    return await API.patch(this.apiName, `${this.users}/${id}`, {
      body,
    })
  }

  async setReferralCode(referral) {
    return await API.post(
      this.apiName,
      this.referral + `/${referral}`
    )
  }

  async swipeMedia(mediaId, which) {
    return await API.post(
      this.apiName,
      this.likeAMovie + `/${mediaId}`,
      {
        body: { type: which },
      }
    )
  }

  async fetchMatchedMovies(lastMovieId, limit) {
    return await API.get(
      this.apiName,
      this.fetchMatches +
        `?lastMovieId=` +
        `${lastMovieId}` +
        `&limit=` +
        `${limit}`
    )
  }

  async fetchLikedMovies(lastMovieId, limit) {
    return await API.get(
      this.apiName,
      this.likedMovies +
        `?lastMovieId=` +
        `${lastMovieId}` +
        `&limit=` +
        `${limit}`
    )
  }

  async fetchSavedMovies(lastMovieId, limit) {
    return await API.get(
      this.apiName,
      this.savedMovies +
        `?lastMovieId=` +
        `${lastMovieId}` +
        `&limit=` +
        `${limit}`
    )
  }

  async removeLiked(mediaId) {
    return await API.del(
      this.apiName,
      this.likedMovies + `/${mediaId}`
    )
  }

  async removeMatched(mediaId) {
    return await API.del(
      this.apiName,
      this.matchedMovies + `/${mediaId}`
    )
  }

  async fetchPartner() {
    return await API.get(this.apiName, this.partner)
  }

  async getFreeNetworkStates() {
    return await API.get(this.apiName, this.freeNetworks)
  }

  async subscribe(body) {
    return await API.post(this.apiName, this.subscriptions, {
      body,
    })
  }

  async validateSubscription(body) {
    return await API.post(this.apiName, this.validateSub, {
      body,
    })
  }

  async deleteAccount() {
    return await API.patch(this.apiName, this.closeAccount)
  }

  async rateApp(starsCount) {
    return await API.post(this.apiName, this.rateTheApp, {
      body: { rating: starsCount },
    })
  }

  async updateCatItem(name, nextValue) {
    return await API.patch(
      this.apiName,
      this.genres + `/${name}`,
      {
        body: {
          active: nextValue,
        },
      }
    )
  }

  async updateCatItems(genresArray) {
    return await API.patch(this.apiName, this.genres, {
      body: {
        genres: genresArray,
      },
    })
  }
}

export const DataProvider = new ApiClient()
