class Algorithm {
  constructor(message, reply, callback) {
    this.msg = ` ${message} `;
    this.reply = reply;
    this.Reply(callback);
  }
  Reply(cb) {
    if (this.msg.includes(' hi ')) {
      this.reply = 'hello';
    } else if (this.msg.includes(' how are you ')) {
      this.reply = 'fine, and you?';
    } else if (this.msg.includes(' السلام عليكم ')) {
      this.reply = 'و عليكم السلام و رحمة الله و بركاته';
    } else if (this.msg.includes(' كيف حالك ')) {
      this.reply = 'الحمدلله، و انت';
    }
    cb(this.reply);
  }
}
