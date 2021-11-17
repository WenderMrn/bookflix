const data = {
  courses: [
    {
      active: true,
      title: "Eloquent JavaScript: Uma introdução moderna à programação",
      description:
        "O JavaScript está no centro de quase todos os aplicativos da web modernos, desde aplicativos sociais até os mais novos jogos baseados em navegador. Embora simples para iniciantes aprenderem e brincar, JavaScript é uma linguagem flexível e complexa que você pode usar para construir aplicativos em grande escala.",
      link: "https://www.amazon.com.br/Eloquent-JavaScript-3rd-Introduction-Programming/dp/1593279507/ref=asc_df_1593279507/?tag=googleshopp00-20&linkCode=df0&hvadid=379787788238&hvpos=&hvnetw=g&hvrand=11615925106363050633&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9101458&hvtargid=pla-548660160165&psc=1",
      alt: "Eloquente Javascript",
      image: "assets/img/books/book-1.jpg",
      background: "/assets/img/books/book-1-bg.jpg",
    },
    {
      title: "Vire o jogo com Spring Framework",
      description:
        "Criado para simplificar o desenvolvimento de aplicações Java, o Spring se tornou um dos frameworks de mais destaque dentro desse grande ambiente.",
      link: "https://www.casadocodigo.com.br/products/livro-spring-framework",
      alt: "Spring Framework",
      image: "assets/img/books/book-2.jpg",
      background: "/assets/img/books/book-2-bg.jpg",
    },
    {
      title: "Html e CSS3. Domine a Web do Futuro",
      description:
        "Crie páginas elegantes de forma simples! HTML e CSS quando bem utilizados podem ser o sucesso de um projeto e com os novos recursos do HTML5 e CSS3 muito do que antes era trabalhoso agora não é mais. Aprenda as melhores técnicas para escrever seu site através de exemplos práticos de funcionalidades úteis do cotidiano. Construa menus aplique efeitos estilize elementos visuais melhore a semântica da sua página e muito mais!",
      link: "https://www.amazon.com.br/Html-CSS3-Domine-Web-Futuro/dp/8566250052/ref=asc_df_8566250052/?tag=googleshopp00-20&linkCode=df0&hvadid=406902493652&hvpos=&hvnetw=g&hvrand=10499716224089799282&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=1032112&hvlocphy=9101458&hvtargid=pla-893562295649&psc=1",
      alt: "Html e CSS3",
      image: "assets/img/books/book-3.jpg",
      background: "/assets/img/books/book-3-bg.jpg",
    },
    {
      title: "Aplicações Web Real-Time com Node.js",
      description:
        "Node.js é uma poderosa plataforma. Ele permite escrever aplicações JavaScript no server-side, tirando proveito da sintaxe e familiaridade da linguagem para escrever aplicações web escaláveis. Como o Node.js usa um modelo orientado a eventos, focado em I/O não bloqueante, desenvolver nele pode ser diferente para quem está acostumado às aplicações web tradicionais. Neste livro, Caio Ribeiro Pereira quebra essa enorme barreira, mostrando claramente essa mudança de paradigma, além de focar em tópicos importantes, as APIs principais e frameworks como o Express e o Socket.IO.",
      link: "https://www.amazon.com.br/Aplica%C3%A7%C3%B5es-Web-Real-Time-com-Node-js/dp/8566250141/ref=sr_1_6?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=livro+node&qid=1637146367&s=books&sr=1-6",
      alt: "Node.js",
      image: "assets/img/books/book-4.jpg",
      background: "/assets/img/books/book-4-bg.jpg",
    },
    {
      title: "Código limpo: Habilidades práticas do Agile Software",
      description:
        "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.O renomado especialista em software, Robert C. Martin, apresenta um paradigma revolucionário com Código limpo: Habilidades Práticas do Agile Software.",
      link: "https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=livro+codigo+limpo&qid=1637146707&s=books&sr=1-3&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9",
      alt: "Agile Software",
      image: "assets/img/books/book-5.jpg",
      background: "/assets/img/books/book-5-bg.jpg",
    },
    {
      title: "Lógica de Programação",
      description: "Crie seus primeiros programas usando Javascript e HTML",
      link: "https://www.casadocodigo.com.br/products/livro-programacao",
      alt: "Lógica de Programação",
      image: "assets/img/books/book-6.jpg",
      background: "/assets/img/books/book-6-bg.jpg",
    },
  ],
  currentCourse: {
    title: "",
    description: "",
    link: "",
    alt: "",
    image: "",
    background: "",
  },
};

function buyNow() {
  const course = data.currentCourse;
  if (course.link) {
    window.open(course.link, "_blank");
  }
}

function moreInfo() {
  const course = data.currentCourse;
  const modalEl = $(`
  <div class="modal">
    <h3>${course.title}</h3><br/>
    <p>${course.description}</p>
  </div>`);
  modalEl.modal();
}

function changeHighlightMedia(course) {
  const { title, description, background } = course;

  data.currentCourse = course;

  const mainMediaEl = $(".main-media").first();

  if (!mainMediaEl) {
    console.error("elemento: main-media não encontrado.");
    return;
  }

  mainMediaEl.css({
    "background-image": `linear-gradient(to right, rgb(0 0 0 / 78%), rgb(0 0 0 / 50%) 100%), url(${background})`,
    "background-size": "cover",
    "background-repeat": "no-repeat",
  });
  $(mainMediaEl).find(".title").text(title);
  $(mainMediaEl).find(".description").text(description);
}

function populateSlide() {
  const carouselEl = $(".owl-carousel").first();

  if (!carouselEl) {
    console.error("elemento owl-carousel não encontrado.");
    return;
  }

  data.courses.forEach((course) => {
    const itemEl = $(`
      <div class="item grow" onclick='changeHighlightMedia(${JSON.stringify(
        course
      )})'>
        <img class="box-media" src="${course.image}" alt="${course.alt}" />
      </div>
    `);

    if (course.active) {
      changeHighlightMedia(course);
    }

    carouselEl.append(itemEl);
  });
}

function executeSlide() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
}

$(function () {
  populateSlide();
  executeSlide();
});
