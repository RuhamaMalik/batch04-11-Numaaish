module.exports= checkAge = (req, res,next) => {
    const age = req.query.age;

    if (!age) {
        res.json({message:"Age is required!", success:false})
    } else if (age < 18 || age > 75) {
            res.send({message:"You cannot access the content", success:false})
    } else{
        req.country ="China"
        next()
    }

}