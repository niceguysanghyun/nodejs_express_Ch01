var express = require('express');
var router = express.Router();



router.post('/login',(req,res,next)=>{

    const {id,pwd} = req.body; //오브젝트 디스처링
    if( id !=='이상현') {
        res.status(404).json({message:"USER NOT FOUND"});
        return;
    }else if (pwd !=='이상현123') {
        res.status(401).json({message:"Invalid Password"});
        return;
    }

    next();
});

router.post('/login',(req,res,next) => {
    /**
     *  Login 요청 : 요청은 메소드는 POST
     *  그리고 Body에 id,pwd 키로 값을 보낸다 로그인성공조건은 id = 본인이름, pwd = 본인이름+123
     */

    res.json({message:"성공! "})
});

router.post('/',(req,res,next) =>{
    /**
     *  id,pwd,name
     *  content-type : x-www-urlencodeed,application/json
     *
     */
    const {id,pwd,name} = req.body;
    if( id !=='이상현') {
      const error = new Error("User Not Found");
      error.status = 404;
      return next(error)
        //res.status(404).json({message:"USER NOT FOUND"});
        return;
    }else if (pwd !=='이상현123') {
        const error = new Error("Invalid pwd");
        error.status = 401;
        return next(error)

    }


    const User = {
      id : id,
      pwd:pwd,
      name:name
    };
    req.CreatedUser = User;
    next(route('/gg'));
    //

},(req,res,next)=>{
    res.json(req.CreatedUser);
});

router.post('/',(req,res,next)=>{
  res.json(req.CreatedUser);
});

module.exports = router;
