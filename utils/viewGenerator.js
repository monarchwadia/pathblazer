const path = require('path');
const dot = require('dot');

const dots = dot.process({ path: path.join(__dirname, "../views") })

const viewGenerator = (view=null, opts={}) => dots[view](opts);

module.exports = viewGenerator;