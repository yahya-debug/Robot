class Robot {
  constructor(name, voice, age, avatar) {
    this.name = name;
    this.voice = voice;
    this.age = age;
    this.avatar = avatar;
    this.robot = { name, voice, age, avatar };
  }
  save() {
    console.log(this);
    fetch(`/robot/new`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.name,
        voice: this.voice,
        age: this.age,
        avatar: this.avatar
      })
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      Robot_ = data;
      localStorage.setItem('robot', Robot_.id);
    });
  }
  // statics
  static getByID(ID, callback) {
    fetch(`/robot/getByID${ID}`).then(function (res) {
      return res.json();
    }).then(function (data) {
      if (data.id == undefined) {
        localStorage.removeItem('robot');
        auth();
      }
      Robot_ = data;
      callback();
    })
  }
  static edit(field, value) {
    fetch(`/robot/edit?field=${field}&value=${value}&forr=${Robot_.id}`)
    .then(function (res) {
      return res.json();
    })
  }
}
