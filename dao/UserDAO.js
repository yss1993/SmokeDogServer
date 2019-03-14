/**
 * 用户数据访问对象
 * Created by yu_ss on 2019-03-14 15:35
 */
const UserModel = require('../schema/UserSchema');

class UserDAO {
    //用户注册
    async createNewUser(user) {
        return await UserModel.create(user);
    }
}

module.exports = UserDAO;