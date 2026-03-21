var posts=["2026/03/21/这是一篇新的博文/","2026/03/21/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };