/*
Name of the module: Admin Section

Date of module Creation: 25/05/2024

Author of the module: Parth patel

What the module does: Sends query/suggestion email to admin

Functions supported:
1. postRequest  => Input: name, email, title, description;       Output: "Your request has been sent successfully. Thank You!"

Global variables: user id
*/

const requestsendMail = require('./requestSendMail');

const contactCtrl = {
    // send query/suggestion recieved from front end to admin via email
    postRequest: async (req, res) => {
        try {
            const { name, email, title, description } = req.body;

            const admin = "parth.p2307@gmail.com"
            requestsendMail(admin,
                "Congratulations! You have received a new suggestion/query.",
                `FROM: ${name} (${email})`,
                `Title: ${title}`,
                `Description: ${description} Thank You!`
            );
 
            res.json({ msg: "Your request has been sent successfully. Thank You!" });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }
}

module.exports = contactCtrl;