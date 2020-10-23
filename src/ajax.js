var fetchJsonp = function (url) {
  var body = document.getElementsByTagName('body')[0];
  //插入一个script
  var script = document.createElement('script');
  script.setAttribute('src', url);
  body.appendChild(script);
}
export default fetchJsonp