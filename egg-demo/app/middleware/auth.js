'use strict';

// =============
// 认证模块
// =============

// module.exports = redis => {
//   return async (ctx, next) => {

//     // session
//     const session_result = ctx.cookies.get('session_token', {
//       secure: ctx.app.env !== 'local',
//       sameSite: 'None',
//     });

//     const token = session_result ? JSON.parse(session_result).token : null;
//     if (!token) {
//       throw {
//         code: 1001,
//         message: 'session_expired',
//       };
//     }
   
//     await next();
//   };
// };
