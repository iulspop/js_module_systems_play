const fs = require('fs');

function requireOwn(dependency) {
  const code = fs.readFileSync(dependency, 'utf-8');
  const module = `module = { export: null };
${code}
return module.exports`
  return Function("requireOwn", module)(requireOwn)
}

const {happy, turtle} = requireOwn('moduleTest.js');

happy(turtle)

