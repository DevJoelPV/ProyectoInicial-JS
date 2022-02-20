
/*
    Este codigo es exclusivo para la página index.html
*/

"use strict"

$(document).ready(function(){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });
    
      
    
    //POSTS
      var posts = [
        {
          title: "Titulo 1",
          date: "Publicado el " + moment().format("MMMM Do YYYY"),
          content: 'Mauris mattis tincidunt dolor, at sagittis nisl efficitur in. Phasellus augue tortor, varius eget euismod nec, pharetra ut mauris. Praesent venenatis mollis libero, non ullamcorper diam convallis a. Duis eget neque id metus consequat scelerisque. Quisque rutrum elit a ante egestas, vitae varius purus mattis. Duis a risus leo. Nam tristique tortor eget sem efficitur, in mollis erat luctus. Curabitur a ornare nulla. Sed vitae mi mattis, sodales lacus id, elementum eros. Donec diam lectus, pellentesque in sem et, volutpat pharetra risus. Morbi ligula felis, ornare sit amet pretium eu, rutrum volutpat tellus. Cras velit justo, rhoncus ut lorem vitae, finibus faucibus massa. Proin maximus orci a mi lacinia, sagittis imperdiet enim dictum. Etiam vel ante molestie, ultricies magna vel, rutrum quam.'
        },
        {
          title: "Titulo 2",
          date: "Publicado el " + moment().format("MMMM Do YYYY"),
          content: 'Pellentesque eget leo eu enim ornare pulvinar in id mi. Nulla fermentum mollis nibh, eu molestie eros imperdiet vel. Aliquam luctus malesuada placerat. Proin eu metus congue, luctus diam et, tempor sem. Sed fermentum, risus sed dignissim euismod, ante nulla tempor turpis, non finibus felis dolor vitae velit. Nunc nisl velit, volutpat et gravida et, bibendum vitae lorem. Mauris porta, dui eu bibendum viverra, quam turpis pharetra dolor, sed pharetra risus est at purus. Sed pharetra hendrerit ex non interdum. Sed luctus dui id sapien lobortis tempus. Duis rutrum blandit dignissim. Aenean in lacinia risus. In hac habitasse platea dictumst.'
        },
        {
          title: "Titulo 3",
          date: "Publicado el " + moment().format("MMMM Do YYYY"),
          content: 'Nunc auctor nulla ac lorem cursus aliquet. Aenean tincidunt nec velit id tincidunt. Sed rutrum justo nulla, at maximus elit tincidunt vitae. Fusce vestibulum dui sit amet aliquet varius. Suspendisse potenti. Ut et lorem eleifend, elementum nunc at, rhoncus massa. Vivamus ultrices lacus in velit lobortis condimentum. Sed iaculis, purus id rutrum finibus, velit nunc finibus enim, non tempor purus velit sit amet purus. Quisque condimentum libero mi, non vestibulum nisi varius ut. Pellentesque ac consequat magna. Donec at convallis erat. In sed lectus nisl. Aenean posuere nibh eget feugiat varius.'
        },
        {
          title: "Titulo 4",
          date: "Publicado el " + moment().format("MMMM Do YYYY"),
          content: 'Sed id vestibulum libero. Phasellus facilisis vestibulum tellus convallis aliquam. Morbi eu sapien at mi dignissim pellentesque. Fusce id sollicitudin nulla, id auctor ex. Nunc in porta elit, ut sagittis lacus. Nulla facilisi. Proin metus dui, consequat vitae metus vitae, egestas ullamcorper ante. Fusce vitae leo ut nisi vehicula suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris eget nulla hendrerit, bibendum nibh non, faucibus nunc. In facilisis, odio eu finibus dapibus, risus dolor volutpat mi, eu mattis sapien magna et mi.'
        }
      ]
    
      posts.forEach((item, indice) => {
        let post = `
                  <article class="post">
                  <h2>${item.title}</h2>
                  <span class="date">${item.date}</span>
                  <p>
                      ${item.content}
                  </p>
                  <a href="#" class="button-more">Leer más</a>
              </article>
    
              <div class="clearfix"></div>`;
    
        $("#posts").append(post);
      });
    
});
