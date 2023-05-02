export default {
  parseActiveUrlWithCombiner() {
    const url= window.location.hash.slice(1).toLowerCase();
    const splitedUrl= this._splitUrl(url);
    return this._combineUrl(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url= window.location.hash.slice(1).toLowerCase();
    return this._splitUrl(url);
  },

  _splitUrl(url) {
    const splittedUrl= url.split('/');
    return {
      resource: splittedUrl[1] || null,
      id: splittedUrl[2] || null,
      action: splittedUrl[3] || null,
    };
  },

  _combineUrl({resource, id, verb}) {
    return `/${resource?resource:''}${id?'/:id':''}${verb?`/${verb}`:''}`;
  },
};
