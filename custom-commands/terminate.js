function Quit() {
}

Quit.prototype.command = function(callback) {
  this.client.queue.reset();
  this.client.queue.empty();
  this.api.end(function() {
    this.client.finished();
  }.bind(this));
  this.client.queue.run();
};
module.exports = Quit;