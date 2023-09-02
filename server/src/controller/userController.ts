import express, { Request, Response, NextFunction } from "express";
import helpers from '../helpers/uniquePassword'

export default {

    async PasswordGenerator(req: Request, res: Response) {
        const { length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars } = req.body;
        console.log(req.body, '_____________________________');

        // const length: string = req.body.password.length
        // const data: number = parseInt(length)
        // const uniquePassword = helpers.uniquePassword(data)


        function generatePassword() {
            const charset = [
                includeUppercase && 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                includeLowercase && 'abcdefghijklmnopqrstuvwxyz',
                includeNumbers && '0123456789',
                includeSpecialChars && '!@#$%^&*()_+[]{}|;:,.<>?'
            ].filter(Boolean).join('');

            if (!charset) {
                return 'Please select at least one character type.';
            }

            const password = [];
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                password.push(charset[randomIndex]);
            }

            return password.join('');
        }

        const generatedPassword = generatePassword();
        res.json({ password: generatedPassword });


    }
}
