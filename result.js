var _context;

function square() {
  return this * this;
}

console.log((_context = 5, square).call(_context));
