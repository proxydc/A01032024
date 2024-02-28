const bcrypt = require('bcrypt');
async function GetEncryptedPassword(pwd) {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(pwd, salt);
    } catch (err) {
        throw err;
    }

}
async function ComparePassword(pwd, hpwd) {
    try {
        //const salt = await bcrypt.genSalt(10);
        return await bcrypt.compare(pwd, hpwd);
        //console.log("pwd :" + pwd + " hpwd: " + hpwd);
        //console.log("Equal: " + isEqual);
        if (isEqual)
            return 'OK'
        return 'NOK';
    } catch (err) {
        throw err;
    }

}
module.exports = {
    GetEncryptedPassword,
    ComparePassword,
}