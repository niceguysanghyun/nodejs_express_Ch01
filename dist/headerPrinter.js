'use strict';

module.exports = function (req, res, next) {
  console.log(req.headers);
  next(); //next 호출 잘 보기
}; //js파일을 require로 로드했을때 외부에 표출할 펑션 혹은 값을 지정
//# sourceMappingURL=headerPrinter.js.map