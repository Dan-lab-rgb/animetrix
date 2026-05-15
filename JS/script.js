

const animes = [

  {
    nome: "Code Geass",
    genero: "Ação / Estratégia",
    nota: 9.2,
    censura: 16,
    episodios: 50,
    linkImagem: "imagem/code_geas.jpg",
    resumo: "Lelouch desperta um poder controlador desconhecido e torna-se um revolucionário",
    curiosidade: "Considerado um dos melhores animes Seinen"
  },

  {
    nome: "Nanatsu no Taizai",
    genero: "Fantasia",
    nota: 8.1,
    censura: 14,
    episodios: 100,
    linkImagem: "imagem/nanatsu.jpg",
    resumo: "Os Sete Pecados Capitais lutam para proteger o reino de Liones.",
    curiosidade: "O anime foi inspirado em lendas medievais e nos cavaleiros da Távola Redonda."
  },

  {
    nome: "Dragon Ball Super",
    genero: "Ação",
    nota: 8.7,
    censura: 10,
    episodios: 131,
    linkImagem:"imagem/dragon_ball_super.jpg",
    resumo: "Após derrotar Majin Buu, uma nova ameaça surge o Deus da Destruição",
    curiosidade: "Dragon Ball Super apresentou a transformação Instinto Superior."
  },

  {
    nome: "Fire Force",
    genero: "Ação / Sobrenatural",
    nota: 8.5,
    censura: 16,
    episodios: 48,
    linkImagem: "imagem/fire_force.jpg",
    resumo: "A humanidade passa por um surto de combustão, qual será a origem disso?",
    curiosidade: "O criador de Fire Force também criou Soul Eater."
  },

  {
    nome: "Bleach",
    genero: "Ação / Sobrenatural",
    nota: 9.1,
    censura: 16,
    episodios: 366,
    linkImagem: "imagem/bleach.jpg",
    resumo: "Ichigo Kurosaki se torna um Shinigami e protege os humanos dos Hollows.",
    curiosidade: "Bleach faz parte do grupo dos 'Big Three' dos animes."
  },

  {
    nome: "Horimiya",
    genero: "Romance",
    nota: 8.6,
    censura: 12,
    episodios: 26,
    linkImagem: "imagem/horimiya.jpg",
    resumo: "No ultimo ano do ensino medio, um casal é formado por ironia do destino",
    curiosidade: "Horimiya ficou muito popular pela química natural dos protagonistas."
  },

  {
    nome: "Jujutsu Kaisen",
    genero: "Ação / Terror",
    nota: 9.0,
    censura: 16,
    episodios: 47,
    linkImagem: "imagem/jujutsu.jpg",
    resumo: "Um garoto engole um dedo por acidente, e desperta os poderes de uma antiga maldição",
    curiosidade: "Gojo Satoru virou um dos personagens mais populares da atualidade."
  },

  {
    nome: "One Piece",
    genero: "Aventura",
    nota: 9.5,
    censura: 12,
    episodios: 1000,
    linkImagem: "imagem/one_piece.jpg",
    resumo: "Um garoto sonha em ser o Rei dos Piratas, será que ele vai conseguir",
    curiosidade: "É o manga mais vendido do mundo"
  },

  {
    nome: "Konosuba",
    genero: "Isekai",
    nota: 8.5,
    censura: 16,
    episodios: 32,
    linkImagem: "imagem/konosuba.jpg",
    resumo: "Um garoto reencarna em um novo mundo e leva a Deusa junto com ele",
    curiosidade: "Um dos melhores animes de comédia Dublada."
  },

  {
    nome: "shingeki no kyojin",
    genero: "Ação",
    nota: 9.1,
    censura: 18,
    episodios: 97,
    linkImagem: "imagem/aot.jpg",
    resumo: "Um mundo onde Titas Gigantes perturbam a Humanidade",
    curiosidade: "Uma obra muito interessante para acompanhar e descobrir segredos."
  }

];


function mostrarAnimes() {
    const idadeUsuario = parseInt(document.getElementById("idadeUsuario").value);
    const catalogo = document.getElementById("catalogo");

    catalogo.innerHTML = ""; // limpa antes de gerar

    animes.forEach(anime => {

        // TERNÁRIO: nota alta ou baixa
        let classeNota = anime.nota >= 9 ? "nota-alta" : "nota-baixa";

        // PORTA LÓGICA &&: anime premium
        let premium = (anime.nota > 9 && anime.episodios > 100) ? "premium" : "";

        // CRIA O CARD
        const card = document.createElement("div");
        card.className = `card ${classeNota} ${premium}`;

        // BLOQUEIO POR CENSURA
        let conteudoAnime = (idadeUsuario >= anime.censura) ? `
            <img src="${anime.linkImagem}" alt="${anime.nome}">
            <div class="conteudo">
                <h2>${anime.nome}</h2>
                <p><strong>Gênero:</strong> ${anime.genero}</p>
                <p><strong>Nota:</strong> ${anime.nota}</p>
                <p>${anime.resumo}</p>
                <div class="curiosidade"><strong>Você sabia?</strong> ${anime.curiosidade}</div>
            </div>
        ` : `
            <div class="restrito">Conteúdo Restrito</div>
        `;

        card.innerHTML = conteudoAnime;
        catalogo.appendChild(card);

    });
}
