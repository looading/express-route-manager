const Config = require('../config');
class Action {
  constructor() {
    let configs = Config.get();
    for (var variable in configs) {
      if (configs.hasOwnProperty(variable)) {
        this[variable] = configs[variable];
      }
    }
    this._post?this._post.bind(this):false
    this._get?this._get.bind(this):false
    this._put?this._put.bind(this):false
    this._delete?this._delete.bind(this):false
  }
}


module.exports = Action;
