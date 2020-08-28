"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _tsyringe = require("tsyringe");

var _IMailTemplatesProvider = _interopRequireDefault(require("../../MailTemplateProvider/models/IMailTemplatesProvider"));

var _dec, _dec2, _dec3, _dec4, _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let EtherealMailProvider = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('MailTemplateProvider')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IMailTemplatesProvider.default === "undefined" ? Object : _IMailTemplatesProvider.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = (_temp = class EtherealMailProvider {
  constructor(mailTemplateProvider) {
    this.mailTemplateProvider = mailTemplateProvider;
    this.client = void 0;

    _nodemailer.default.createTestAccount().then(account => {
      const transporter = _nodemailer.default.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass
        }
      });

      this.client = transporter;
    });
  }

  async sendMail({
    to,
    subject,
    from,
    templateData
  }) {
    const message = await this.client.sendMail({
      from: {
        name: (from === null || from === void 0 ? void 0 : from.name) || 'Team GoBarber',
        address: (from === null || from === void 0 ? void 0 : from.email) || 'team@gobarber.com'
      },
      to: {
        name: to.name,
        address: to.email
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData)
    });
    console.log('Message sent: %s', message.messageId); // Preview only available when sending through an Ethereal account

    console.log('Preview URL: %s', _nodemailer.default.getTestMessageUrl(message));
  }

}, _temp)) || _class) || _class) || _class) || _class);
exports.default = EtherealMailProvider;