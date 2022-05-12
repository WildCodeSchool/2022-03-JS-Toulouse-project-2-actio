function pascalCase(str) {
  return str.replace(
    /\w\S*/g,
    (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()
  );
}

export default pascalCase;
