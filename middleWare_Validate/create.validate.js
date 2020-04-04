module.exports.postCreate = (req, res, next)=>{
	var errors = [];
    if(!req.body.name){
      errors.push('Name is required !')
    }
    
    if(!req.body.phone){
      errors.push('Phone is required !')
    }
    if(errors.length){
      res.render('create',{ errors: errors, values: req.body })
      return;
    }
    //variable for middleware continue can use
    res.locals.success = true;
    //active middleware continue
    next();
}