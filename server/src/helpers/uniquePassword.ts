import passwordModels from "../models/passwordModels";

const crypto = require('crypto');

export default {
    async uniquePassword(length: number) {
        
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';

        let password = '';


        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters.charAt(randomIndex);

        }
        // return password;
        console.log(password, 'genarated__________');
        const Uniquepassword = await passwordModels.create({password})
        console.log(Uniquepassword);
        
    }

}
