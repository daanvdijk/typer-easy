var Typer = function(element) {
  console.log("Function aanroepen");
  this.element = element;
  // scheiden van woorden
  var scheiding = ",";
  var words = element.dataset.words;
  this.words = words.split(scheiding);
  this.delay = 100;
  this.deleteDelay = 800;

  this.progress = {word:0, char:0, building:true, WordEnd:false };
  this.typing = true;

  this.doTyping();
};


Typer.prototype.doTyping = function() {
  var e = this.element;
  var p = this.progress;
  var w = p.word;
  var c = p.char;
  var currentChar = this.words[w][c];
  p.WordEnd = false;

  if (p.building) {
    e.innerHTML += currentChar;
    p.char += 1;
    if (p.char == this.words[w].length) {
      p.building = false;
      p.WordEnd = true;
    }
  } else {
    e.innerHTML = e.innerHTML.slice(0, -1);
    if (!this.element.innerHTML) {
      p.building = true;
      p.word = (p.word + 1) % this.words.length;
      p.char = 0;
    }
  }
  var myself = this;
  setTimeout(function() {
    if (myself.typing) { myself.doTyping(); };
  }, p.WordEnd ? this.deleteDelay : this.delay);
};

typers = {};
elements = document.getElementsByClassName("typer");
for (var i = 0, e; e = elements[i++];) {
  typers[e.id] = new Typer(e);
}

