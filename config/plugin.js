module.exports.passport = {
  enable: true,
  package: 'egg-passport'
};

exports.passportLocal = {
  enable: true,
  package: 'egg-passport-local'
};

exports.static = true;

exports.security = {
  enable: false
};

exports.routerPlus = {
  enable: true,
  package: 'egg-router-plus'
};
