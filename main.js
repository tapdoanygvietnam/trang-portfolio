(function () {
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  document.querySelectorAll('.copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var old = btn.textContent;
      function flash(msg) {
        btn.textContent = msg;
        setTimeout(function () { btn.textContent = old; }, 1800);
      }
      function selectText() {
        var v = btn.parentElement.querySelector('.v');
        var r = document.createRange();
        r.selectNodeContents(v);
        var s = window.getSelection();
        s.removeAllRanges();
        s.addRange(r);
        flash('Đã bôi đen');
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () { flash('Đã chép'); }, selectText);
      } else {
        selectText();
      }
    });
  });
})();
