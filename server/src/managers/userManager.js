const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("../lib/jwt");
const { SECRET } = require("../config/config");

exports.register = async (userData) => {
    const user = await User.findOne({email: userData.email})

    if(!user) {
        await User.create(userData)
    } else {
        throw new Error('User already exists')
    }

    exports.login = async (email, password) => {
        const user = await User.findOne({email})

        if(!user) {
            throw new Error('Invalid email or password')
        }
        const isValid = await bcrypt.compare(password, user.password)
       
        if(!isValid) {
            throw new Error('Invalid email or password')
        }

        const payload = {
            id: user._id,
            username: user.username,
          };

          const userData = {
            id: user._id,
            username: user.username,
            isAdmin: user.isAdmin
          }
          userData.token = await jwt.sign(payload, SECRET, { expiresIn: '2d' });

          return userData;
    }
}