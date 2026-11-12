const library = [
  {
    title: "Basics of javascript",
    author: "Saran",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Intermediate of js",
    author: "Sanju",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Advance of js",
    author: "Nila",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const libraryJson = JSON.stringify(library);
console.log(firstBook);
console.log(libraryJson);
