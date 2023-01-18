function post (){
  const submit = document.getElementById("submit")
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form")
    const formData = new FormFata(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts, true")
    XHR.responseType = "json";
    XHR.
  });
};

window.addEventListener('load', post);