let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let accum = 100;
for (let position of spinner) {
  accum += 200;
  setTimeout(() => {
    process.stdout.write(position);
  }, accum);
};
