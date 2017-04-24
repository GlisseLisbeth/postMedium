window.addEventListener('load',function(){
  var body = document.getElementsByTagName('body')[0];
  var header = document.createElement('header');
  body.appendChild(header);

  var headerLeft = document.createElement('div');
  headerLeft.className = "header-left";
  header.appendChild(headerLeft);

  var medium = document.createElement("div");
  medium.innerHTML ="<svg width='45' height='45' viewBox='-17 18 45 45'><path d='M11.525 28.078c-.472-.225-.858.002-.858.506v20.044l8.616 4.113c.948.46 1.717.14 1.717-.7v-19.3a.22.22 0 0 0-.124-.19l-9.35-4.46v-.01z'></path><path d='M.333 43.696l9.83-15.247c.278-.43.89-.6 1.36-.38l9.364 4.47c.06.03.082.1.047.15L10.666 48.63.333 43.698v-.002z'></path><path d='M-8.57 28.35c-.786-.375-1.053-.096-.592.62L.333 43.696l10.333 4.932L.356 32.635a.156.156 0 0 0-.06-.054l-8.866-4.23z'></path><path d='M.333 52.033c0 .84-.643 1.22-1.43.844l-8.045-3.84c-.472-.224-.858-.82-.858-1.325V28.89c0-.672.515-.976 1.145-.675l9.133 4.36a.092.092 0 0 1 .055.084v19.37z'></path></svg>";
  headerLeft.appendChild(medium);

  var separator = document.createElement("div");
  separator.className= "separator";
  headerLeft.appendChild(separator);

  var collection = document.createElement("img");
  collection.setAttribute("src","https://cdn-images-1.medium.com/letterbox/95/36/50/50/1*_ihRFL7e2SnYNEJcLeul4g.png?source=logoAvatar-lo_d71ea9bf7a58---c0d34b54fadb");
  headerLeft.appendChild(collection);

  var networkSocial= document.createElement("div");
  networkSocial.className = "social";
  headerLeft.appendChild(networkSocial);

  var btnfollow = document.createElement("button");
  btnfollow.className = "follow";
  headerLeft.appendChild(btnfollow);

  var twitter = document.createElement("span");
  twitter.className = "icon-twitter-square";
  headerLeft.appendChild(twitter);

  var faccebook = document.createElement("span");
  faccebook.className = "icon-facebook-square";
  headerLeft.appendChild(faccebook);

  var section = document.createElement("section");
  body.appendChild(section);

  var content = document.createElement("div");
  content.className = "content";
  section.appendChild(content);

  var divPost = document.createElement("div");
    divPost.className = "post-author";
    content.appendChild(divPost);

    var imgPost = document.createElement("img");
    imgPost.setAttribute("src","https://cdn-images-1.medium.com/fit/c/60/60/1*nKNkprMb5nGdZlciB-qwxA.jpeg");
    divPost.appendChild(imgPost);

    var metaPost = document.createElement("div");
    metaPost.className = "meta-post";
    divPost.appendChild(metaPost);

    var metaNamePost = document.createElement("div");
    metaNamePost.className = "meta-name-post";
    divPost.appendChild(metaNamePost);

    var aMetaNamePost = document.createElement("a");
    aMetaNamePost.setAttribute("href","#");
    aMetaNamePost.innerHTML = "Belen Recabal";
    metaNamePost.appendChild(aMetaNamePost);

    var bNamePost = document.createElement("button");
    bNamePost.className = "follow";
    metaNamePost.appendChild(bNamePost);

    var jobPost = document.createElement("div");
    jobPost.className ="job-post"
    jobPost.innerHTML = "<p>Teaching Assistant at Laboratoria. Trabajando para ver a más mujeres en el mundo de la programación.</p><time datetime='2017-03-21T12:37:13.557Z'>23 Marzo.</time><span>6 min read</span>"
    divPost.appendChild(jobPost);

    var article = document.createElement("article");
    article.className = "article-medium";
    article.innerHTML = "<h1>Hazlo con estilo : Tipografías, iconos y sprite</h1><p>Te imaginas el mundo sin tipos de letra, tamaños, colores, o sin iconos , nada, nada sería iguaaaaaal!!!! Pero gracias a muchos desarrolladores y diseñadores, hoy contamos con una inimaginable gama de fuentes para nuestro desarrollos web, pero la pregunta que nos hacemos es, ¿existen reglas, hay una mejor forma de hacerlo, no sé que tipografía usar? Tengo muchas preguntas y pocas respuestas!!<br><br>Vamos paso a paso…</p>"
    content.appendChild(article);

   var footer = document.createElement("footer");
   footer.innerHTML = "<img src='https://cdn-images-1.medium.com/fit/c/40/40/1*e6aeCHP28ulG1PI9ayuuJA.png' alt=''><div class='footer-medium'>Never miss a story from <strong>Laboratoria</strong>, when you sign up for <br> Medium. Learn more<button class='button-footer' type='button'>GET UPDATES</button></div>"
   content.appendChild(footer);

});
