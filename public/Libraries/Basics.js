Object.prototype.checkParent = function (parent, child = this) {
  var elparent = child.parentElement;
  while (elparent != null) {
    if (elparent == parent) {
      return true;
    }
    elparent = elparent.parentElement;
  }
  return false;
}
function clickOut(target, ev) {
  if (ev != target && !ev.checkParent(target)) {
    ev.classList.add('dn');
    ev.classList.remove('df');
  }
}
function goTo(link) {
  window.open(link, '_self');
}
Object.prototype.change_ff = function () {
  let Arabic = "ابتثجحخدذرزسشصضفقطظكمنويعغءئألآلا".split('');
  for (var i = 0; i < Arabic.length; i++) {
    if (this.textContent.includes(Arabic[i])) {
      this.classList.add('Arabic_txt');
    }
  }
};
