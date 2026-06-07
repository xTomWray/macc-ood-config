document.addEventListener('DOMContentLoaded', function () {
  var nav = document.querySelector('nav.navbar');
  if (!nav) return;

  var strip = document.createElement('div');
  strip.className = 'macc-institute-strip';
  strip.innerHTML =
    '<span class="macc-strip-inst">' +
      '<i class="fas fa-university" aria-hidden="true"></i>' +
      ' Stevens Institute of Technology &nbsp;&middot;&nbsp; School of Systems &amp; Enterprises' +
    '</span>' +
    '<span class="macc-strip-sys">' +
      '<i class="fas fa-server" aria-hidden="true"></i>' +
      ' Turing HPC Cluster' +
    '</span>';

  nav.parentNode.insertBefore(strip, nav.nextSibling);
});
