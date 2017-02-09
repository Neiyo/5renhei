/**
 * Created by Joey on 1/20/17.
 */
import 'whatwg-fetch';

export function isPromise(val) {
    return val && typeof val.then === 'function';
}

const network = {
  get: function(){
    fetch('http://localhost:3020',{
      method: 'GET'
    }).then(console.log(123))
  }
}

export default network;
