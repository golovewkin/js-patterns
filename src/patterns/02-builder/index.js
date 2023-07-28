export default class RequestBuilder {
  constructor(url = '') {
    this.url = new URL(url);
  }

  addPagination (start, end) {
    // todo: implement logic
  }

  addSort (sort, order) {
    // todo: implement logic
  }

  addFilter (filter, filterLte, filterGte) {
    // todo: implement logic
  }
}
