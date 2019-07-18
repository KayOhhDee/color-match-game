function Resize() {
  var elem = document.getElementById("very-specific-design");
  var elemWidth = elem.offsetWidth;
  var elemHeight = elem.offsetHeight;

  var wrapper = document.getElementById("scaleable-wrapper");

  wrapper.addEventListener("resize", doResize);

  function doResize(event, ui) {
    var scale;

    scale = Math.min(ui.size.width / elemWidth, ui.size.height / elemHeight);

    elem.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  var starterData = {
    size: {
      width: wrapper.clientWidth,
      height: wrapper.clientHeight
    }
  };
  doResize(null, starterData);
}

export default Resize;
