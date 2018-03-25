import { Injectable } from '@angular/core';

@Injectable()
export class PreloadService<T> {
  private _data: T;
  constructor() { }
  get data(): T {
    return this._data;
  }
  set data(data: T) {
    this._data = data;
  }

}
