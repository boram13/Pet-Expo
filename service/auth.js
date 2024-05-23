const bcrypt = require('bcryptjs');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signup = async (data) => {
    try {
        const hashedPw = await bcrypt.hash(data.password, 12);

        const user = new User({
            email: data.email,
            password: hashedPw,
            name: data.name,
            surname: data.surname,
            role: data.role
        });

        return await user.save();

    } catch (error) {
        console.error('Error during user signup:', error);
        throw new Error('Signup failed.');
    }
};

exports.loginUser = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('No user registered with this email.');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Wrong password.');
        }

        const token = jwt.sign(
            { email: user.email, userId: user._id.toString(), role: user.role },
            'secretcode',
            { expiresIn: '2h' }
        );

        return { data: { token, userId: user._id.toString() } };
    } catch (error) {
        console.error('Error during user login:', error);
        throw new Error('Login failed.');
    }
};