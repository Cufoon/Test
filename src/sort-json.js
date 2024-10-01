import fs from 'node:fs';

const isNull = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Null]';
};

const isString = (obj) => {
  return Object.prototype.toString.call(obj) === '[object String]';
};

const isNumber = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Number]';
};

const isBoolean = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Boolean]';
};

const isArray = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

const sortKeys = (obj) => {
  if (isArray(obj)) {
    return obj.map(item => sortKeys(item));
  }
  if (isBoolean(obj) || isNumber(obj) || isString(obj) || isNull(obj)) {
    return obj;
  }
  const keys = Object.keys(obj);
  keys.sort((a, b) => a.localeCompare(b));
  const entries = keys.map(key => [key, sortKeys(obj[key])]);
  return Object.fromEntries(entries);
};

const data = fs.readFileSync('./sort-json.json');
const dataObject = JSON.parse(data);
const dataObjectSorted = sortKeys(dataObject);
console.log(JSON.stringify(dataObjectSorted, null, 2));
