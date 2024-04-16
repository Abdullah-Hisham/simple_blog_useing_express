const rules= {
    id:(req,res,next)=>{
        id =parseInt(req.params.id)
        if (id && id > 0 && id <= 1000){
            console.log('true value')
            next()
        }
        else{
            const validationError = {
                name: 'Validation Error',
                element: 'params :id',
                message: 'The id you put is not true'
            };
            next(JSON.stringify(validationError))
            }
        
    },
    title:(req,res,next)=>{
    const title = req.body.title ? req.body.trim():undefined
    if(title){
    if (title && title.length > 7 && title.length < 70) {
        next(); // Proceed to the next middleware
    }else {
        const validationError = {
            name: 'Validation Error',
            element: 'title',
            message: 'The title must be between 7 and 70 characters long'
        };
        next(validationError); // Pass the validation error to the next middleware
    }
    }else {
        const validationError = {
            name: 'Validation Error',
            element: 'title',
            message: 'The title must be between 7 and 70 characters long'
        };
        next(validationError); // Pass the validation error to the next middleware
    }
    

},
    body:(req, res, next) => {
        // Validate the "body" parameter in the request body
        const body = req.body.body;
        if (body){
        if ((body.length < 50 || body.length > 300)) {
            res.status(400).send('Body must be between 50 and 300 characters long');
        } else {
            next();
        }}else{
            res.status(400).send('body is required')
        }
    },
}

const validate ={
    getOne :[rules.id],
    addOne:[rules.title, rules.body],
    updateOne:[rules.id,rules.title, rules.body],
    deleteOne:[rules.id]
}
module.exports = validate