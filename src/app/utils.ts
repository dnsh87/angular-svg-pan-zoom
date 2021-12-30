export function deepCopy(o: object) {
  // taken from https://jsperf.com/deep-copy-vs-json-stringify-json-parse/5
  let newO: any, i: any;

  if (typeof o !== 'object') {
    return o;
  }
  if (!o) {
    return o;
  }

  if ('[object Array]' === Object.prototype.toString.apply(o)) {
    newO = [];
    for (let i: number = 0; i < (o as Array<any>).length; i += 1) {
      newO[i] = deepCopy(o[i]);
    }
    return newO;
  }

  newO = {};
  for (i in o) {
    if (o.hasOwnProperty(i)) {
      newO[i] = deepCopy(o[i]);
    }
  }
  return newO;
}
