'use strict'
const hosting =async (req, res, next)=>{
    const query = true
    if(!query) return res.status(200).render("server")
    next()
}
module.exports = {
    hosting
}