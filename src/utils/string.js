function compareLabel(a, b) {
  return compare("label", a, b);
}

function compare(attr, a, b) {
  if (a[attr] < b[attr]) {
    return -1;
  }
  if (a[attr] > b[attr]) {
    return 1;
  }
  return 0;
}

export { compareLabel, compare };
