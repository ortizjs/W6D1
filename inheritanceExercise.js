Function.prototype.inherit = function inherits(Parent) {
  function Surrogate() {}
  Surrogate.prototype = Parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

Function.prototype.inherits2 = function inherits2(Parent) {
  this.prototype = Object.create(Parent.prototype);
  this.prototype.constructor = this;
}
