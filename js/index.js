// compile slides
var slideshow = remark.create();

// start mathjax
// MathJax.Hub.Configured();

// update header on first slide
var reactToHash = function() {
    // switch header color
    var header = document.querySelector('.header');
    if ((location.hash === '') || (location.hash === '#1')) {
        header.classList.add('bg-white');
    }
    else {
        header.classList.remove('bg-white');
    }
    // update header with current slide's title (and hide that)
    var heading = document.querySelector('.remark-visible .remark-slide-content > h1');
    var headerheading = document.querySelector('.header > h1');headerheading.innerHTML = heading.innerHTML;
    heading.setAttribute('hidden', true)
}
window.onload = reactToHash;

// respond to history changes from remarkjs https://stackoverflow.com/questions/5129386/how-to-detect-when-history-pushstate-and-history-replacestate-are-used
var _wr = function(type) {
    var orig = history[type];
    return function() {
        var rv = orig.apply(this, arguments);
        var e = new Event(type);
        e.arguments = arguments;
        window.dispatchEvent(e);
        return rv;
    };
};
history.pushState = _wr('pushState'), history.replaceState = _wr('replaceState');

window.addEventListener('replaceState',  reactToHash);


// Set up before/after handlers
var beforePrint = function() {
    var details = document.querySelectorAll("details");
    [].forEach.call(details, function(div) {
        div.setAttribute('open', '');
      });
};
var afterPrint = function() {
    var details = document.querySelectorAll("details");
    [].forEach.call(details, function(div) {
        div.removeAttribute('open');
      });
};

// Webkit
if (window.matchMedia) {
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function(mql) {
        if (mql.matches) {
            beforePrint();
        } else {
            afterPrint();
        }
    });
}

// IE, Firefox
window.onbeforeprint = beforePrint;
window.onafterprint = afterPrint;
