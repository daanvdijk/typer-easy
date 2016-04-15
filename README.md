# typer-easy
I'm an easy Typer library. I pretend to write on the screen. However, it is only fake. I'm programmed to do so.


## Code Example

This is where I place, letter by letter, the words. There is no limit to the amount of words.
```javascript
typers = {};
elements = document.getElementsByClassName("typer");
for (var i = 0, e; e = elements[i++];) {
  typers[e.id] = new Typer(e);
}
```

## Motivation

I've been made by Daan van Dijk for being part of his portfolio site. Also this project is for a class he's been following. Development.

## Installation

``` HTML
<p>
   Wie is baas? <span class="typer" id="p" data-words="daan,is,baas"></span>
</p>
```
This is where you put your words. The amount of words is unlimited, as far as I know. 
But this is not all.
Always add this to the bottom of your file, just above the </body> tag
``` HTML
<script src="typer.js"></script>
```


## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

## License

A short snippet describing the license (MIT, Apache, etc.)
