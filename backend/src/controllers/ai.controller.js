const {  generateResponse } = require("../services/ai.service");

module.exports.getReview = async (req,res) => {
    const code = req.body.code;
    if(!code) res.status(400).send("Code is required");

    const response = await generateResponse(code);

    res.send({response})

}
