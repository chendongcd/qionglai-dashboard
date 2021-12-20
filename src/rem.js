export function init(screenRatioByDesign = 1920) {
  let docEle = document.documentElement;
  function setHtmlFontSize() {
    var screenRatio = docEle.clientWidth / screenRatioByDesign;
    var fontSize = 18 * screenRatio;
    docEle.style.fontSize = fontSize.toFixed(3) + "px";
    console.log(docEle.style.fontSize);
  }
  setHtmlFontSize();

  window.addEventListener("resize", setHtmlFontSize);
};
