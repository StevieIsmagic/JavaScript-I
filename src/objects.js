// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
  return [...Object.keys(obj)];
};

const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
  return [...Object.values(obj)];
};

const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
  const arr = Object.entries(obj);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = cb(arr[i]);
  }
  // console.log(Object.assign({}, arr));
};

const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
  return Object.entries(obj);
};

/* STRETCH PROBLEMS */

const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
  const entries = Array.from(Object.entries(obj));

  console.log('before', entries);

  const final = [];
  // why won't this pass second test ?
  for (let i = 0; i < entries.length; i++) {
    final.push(
      ([entries[i][0], entries[i][1]] = [entries[i][1], entries[i][0]])
    );
  }

  console.log('after', final);
  return Object.create(final);
};

const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
