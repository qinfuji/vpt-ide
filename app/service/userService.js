const Service = require('egg').Service;

class UserService extends Service {
  async find(uid) {
    return {
      userName: 'qinfuji',
      id: 'qinfuji',
      logo: '',
      curProject: ''
    };
  }
}

module.exports = UserService;
