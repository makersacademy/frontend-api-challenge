'use strict';

class CurrentUser{
  constructor(){
    this._id;
    this._handle;
    this._sessionKey;
  }

  get id(){
    return this._id;
  }

  get handle(){
    return this._handle;
  }

  get sessionKey(){
    return this._sessionKey;
  }
}
