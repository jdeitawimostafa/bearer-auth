// 'use strict';
// module.exports = (err, req, res, next) => {
//   // Sometimes, errors come in as an object, others as a string
//   const error = err.message ? err.message : err;
//   res.status(500);
//   res.statusMessage = 'Server Error :(';
//   res.json({ error });
// };


'use strict';

module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};