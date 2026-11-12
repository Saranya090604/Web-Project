const blogpost = {
  id: 1,
  title: "superman",
  body: "He is a superman",
};

// convert to json into string
const json_converted = JSON.stringify(blogpost);

// converting json into a object
const obj = JSON.parse(json_converted);
console.log(obj);
