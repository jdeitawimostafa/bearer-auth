// 'use strict';

// module.exports = (req, res) => {
//   res.status(404).json({
//     error: 404,
//     route: req.path,
//     message: 'Not Found',
//   });
// };

'use strict';

module.exports = (err, req, res, next) => {
  let error = { error: err.message || err };
  res.statusCode = err.status || 500;
  res.statusMessage = err.statusMessage || 'Server Error';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};