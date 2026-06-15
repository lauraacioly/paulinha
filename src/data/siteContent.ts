import type { PageId } from "../types";

// ─────────────────────────────────────────────
// Edite este arquivo para atualizar todos os
// textos e conteúdos do site em um só lugar.
// ─────────────────────────────────────────────

export interface DeskItemData {
  id: string;
  emoji: string;
  label: string;
  page: PageId;
  position: { top: string; left: string };
}

export interface Chapter {
  date: string;
  title: string;
  text: string;
}

export interface Photo {
  src: string;
  caption: string;
}

export interface RemindsItem {
  trigger: string;
  memory: string;
}

export interface ThingsILoveItem {
  emoji: string;
  shortTitle: string;
  title: string;
  text: string;
}

export interface Movie {
  title: string;
  year?: string;
  poster?: string;
  date?: string;
}

export interface NoStep {
  message: string;
  yesLabel?: string;
  noLabel?: string;
  forcedLabel?: string;
}

export interface SiteContent {
  entrance: {
    letterMessage: string;
    yesNoQuestion: string;
    initialYesLabel: string;
    initialNoLabel: string;
    noSequence: NoStep[];
    afterYesMessage: string;
    enterButtonLabel: string;
  };
  ourStory: {
    title: string;
    chapters: Chapter[];
  };
  memories: {
    title: string;
    photos: Photo[];
  };
  remindsMe: {
    title: string;
    items: RemindsItem[];
  };
  thingsILove: {
    title: string;
    items: ThingsILoveItem[];
  };
  cinema: {
    title: string;
    movies: Movie[];
  };
  letters: {
    title: string;
    letters: { title: string; content: string }[];
  };
  surprise: {
    title: string;
    content: string;
  };
}

export const siteContent: SiteContent = {
  entrance: {
    letterMessage: `Oi, Momo ❤️

Eu queria te dar flores, chocolate, uma viagem, um jantar. Eu queria literalmente te dar o mundo inteiro e tudo o que você quer.

Mas infelizmente a minha conta bancária participou da reunião e votou contra todas as opções.

Então eu fiz o que qualquer pessoa perfeitamente normal faria:

fiz um site sobre você e comprei uma roupa de academia que você queria muito.

Aqui dentro tem algumas lembranças nossas, algumas coisas que me lembram você, algumas coisas que eu amo em você e uma clara demonstração de que eu tenho tempo livre demais (algo que você vive dizendo).

Foi tudo feito com muito carinho, muito amor e alguns surtos ocasionais porque eu queria que ficasse perfeito.

Agora chega de enrolação.

Vem ver o que eu fiz ❤️`,
    yesNoQuestion: "Vem ver o que eu fiz? ❤️",
    initialYesLabel: "❤️ Claro que vou",
    initialNoLabel: "😒 Nem pensar",
    noSequence: [
      {
        message: "Tem certeza? 🥺",
        yesLabel: "❤️ Tá bom, vou ver",
        noLabel: "😒 Tenho",
      },
      {
        message: "Eu passei horas fazendo isso...",
        yesLabel: "❤️ Eu me rendo",
        noLabel: "😒 Continuo firme",
      },
      {
        message: "Momo, seja razoável 😭",
        yesLabel: "❤️ Tá bom, vou ver",
        noLabel: "😒 Ainda não",
      },
      {
        message: "Tá bom...\neu tentei ser educada 😔❤️",
        forcedLabel: "❤️ Abrir meu presente",
      },
    ],
    afterYesMessage:
      "Então vem comigo...\neu fiz tudo isso pensando em você ❤️",
    enterButtonLabel: "Entrar no nosso mundo →",
  },
  ourStory: {
    title: "Nossa História",
    chapters: [
      {
        date: "02 a 07 de fevereiro de 2025",
        title: "",
        text: "A fase em que eu estava fazendo absolutamente tudo para chamar sua atenção.\n\nEu respondia mensagens rápido demais.\n\nEu inventava assunto.\n\nEu procurava qualquer desculpa para conversar com você.\n\nSe existisse um campeonato mundial de tentar chamar a sua atenção, eu provavelmente teria ganhado ouro.\n\nNa época eu ainda não sabia exatamente onde tudo aquilo ia dar.\n\nMas eu já sabia que queria você por perto.\n\n❤️",
      },
      {
        date: "08 de fevereiro de 2025",
        title: "",
        text: "Nosso primeiro encontro.\n\nFomos assistir Babygirl.\n\nNós duas estávamos extremamente tímidas.\n\n Eu mal conseguia olhar nos seus olhos sem ficar nervosa. \n\n Na época parecia só mais um encontro.\n\nMas olhando para trás, foi o primeiro capítulo de praticamente todas as histórias que vieram depois.\n\n🎬❤️",
      },
      {
        date: "16 de fevereiro de 2025",
        title: "",
        text: "O dia em que você mentiu para mim sobre o meu filme favorito.\n\nVocê disse que tinha assistido o filme.\n\nDepois eu descobri que você não tinha assistido nada.\n\nVocê simplesmente tinha visto um resumo na internet para conseguir conversar comigo.\n\nAté hoje eu não sei se isso é extremamente fofo ou extremamente preocupante.\n\nMas toda vez que eu lembro eu acho engraçado e fico revoltada.\n\n😂❤️",
      },
      {
        date: "21 de fevereiro de 2025",
        title: "",
        text: "A primeira vez que dormi na sua casa.\n\nNa época parecia só mais um momento.\n\nHoje é uma daquelas lembranças que ficaram guardadas.\n\nPorque foi uma das primeiras vezes em que eu senti que gostava muito da ideia de estar perto de você.\n\n🏡❤️",
      },
      {
        date: "27 de fevereiro a 05 de março de 2025",
        title: "",
        text: "O Carnaval.\n\nVocê estava feliz curtindo o carnaval.\n\nEu estava triste pensando em você curtindo o carnaval.\n\nNão foi meu momento mais racional.\n\nMas foi um dos momentos em que eu percebi o tamanho do sentimento que eu estava desenvolvendo.\n\nPorque pessoas apaixonadas raramente são muito sensatas.\n\n🤡❤️",
      },
      {
        date: "08 de março de 2025",
        title: "",
        text: "Super Pizza com a Endy.\n\nMais uma daquelas memórias aparentemente simples.\n\nMas que acabaram ficando especiais porque você estava lá.\n\nA verdade é que muitas das minhas lembranças favoritas desse ano têm uma coisa em comum:\n\nvocê.\n\n🍕❤️",
      },
      {
        date: "01 de abril de 2025",
        title: "",
        text: "O dia em que você me proibiu de ir para sua casa quando sua tia estivesse lá.\n\nAté hoje eu não sei se isso foi uma decisão sensata ou um abuso de autoridade.\n\nMas virou uma das histórias que eu mais gosto de contar.\n\n🚫🏠❤️",
      },
      {
        date: "05 de abril de 2025",
        title: "",
        text: "A lendária salada.\n\nVocê me levou para comer uma salada caríssima.\n\nE ruim.\n\nMuito ruim.\n\nMas eu acho que essa memória resume bem a gente.\n\nPorque eu não lembro da salada com carinho.\n\nEu lembro de você.\n\n🥗❤️",
      },
      {
        date: "Abril de 2025",
        title: "",
        text: "A fase Beleza Fatal.\n\nEu fingia que estava indo para sua casa para assistir Beleza Fatal.\n\nMas nós duas sabemos a verdade.\n\nEu só queria passar mais tempo com você.\n\nA novela era apenas uma excelente desculpa.\n\n📺❤️",
      },
      {
        date: "20 de abril de 2025",
        title: "",
        text: "Troca de ovos de Páscoa.\n\nUm momento simples.\n\nMas uma das muitas pequenas coisas que foram construindo tudo isso.\n\nÀs vezes são justamente os momentos pequenos que ficam mais tempo na memória.\n\n🐰❤️",
      },
      {
        date: "23 de abril de 2025",
        title: "",
        text: 'O primeiro "eu te amo".\n\nVocê falou baixinho.\n\nTão baixinho que eu nem entendi.\n\nEntão eu não respondi.\n\nSe alguém assistisse essa cena de fora provavelmente ficaria irritado comigo.\n\nMas eu prometo que não foi por mal.\n\nFoi só um dos maiores desencontros da nossa história.\n\n😭❤️',
      },
      {
        date: "05 de maio de 2025",
        title: "",
        text: 'O dia em que eu disse "eu te amo" por mensagem.\n\nVocê não respondeu.\n\nEu fiquei traumatizada.\n\nVocê provavelmente nem percebeu.\n\nMas eu passei um bom tempo lembrando disso.\n\nTanto que só voltei a dizer depois que já estávamos namorando.\n\n📱💔❤️',
      },
      {
        date: "05 de maio de 2025",
        title: "",
        text: "O dia em que você contou para a primeira pessoa da sua família sobre nós.\n\nTalvez você não tenha percebido o quanto aquilo significou para mim.\n\nMas eu percebi.\n\nFoi uma daquelas coisas que parecem pequenas para quem faz.\n\nMas enormes para quem recebe.\n\n❤️",
      },
      {
        date: "12 de junho de 2025",
        title: "",
        text: "Nosso primeiro Dia dos Namorados.\n\nO detalhe curioso é que a gente ainda nem namorava.\n\nMas aparentemente isso não impediu a gente de comemorar.\n\nO universo já estava tentando nos dar uma dica.\n\n💐❤️",
      },
      {
        date: "17 de junho de 2025",
        title: "",
        text: "O dia em que eu comecei a te perguntar o que eu era para você.\n\nEu estava ansiosa.\n\nImpaciente.\n\nQuerendo respostas.\n\nMal sabia eu que estava estragando a surpresa do pedido de namoro que você estava preparando.\n\nBasicamente eu estava sabotando a mim mesma.\n\n😭❤️",
      },
      {
        date: "18 de junho de 2025",
        title: "",
        text: "O dia em que você finalmente virou minha namorada.\n\nDepois de meses de conversas.\n\nEncontros.\n\nAnsiedade.\n\nExpectativas.\n\nSaladas ruins.\n\nE sentimentos acumulados.\n\nVocê disse sim.\n\nE continua sendo um dos meus dias favoritos.\n\n❤️✨",
      },
      {
        date: "30 de julho de 2025",
        title: "",
        text: "O dia que a gente tentou fazer morango do amor.\n\nUma daquelas ideias que a gente vivia tendo na nossa epoca imensa(a gente so pensava em comer).\n\nO bom que essa fase acabou virando uma memória divertida para contar depois.\n\n🍓❤️",
      },
      {
        date: "Férias de 2025",
        title: "",
        text: "A fase em que eu tive um gostinho de como que ia ser me mudar para sua casa.\n\nE honestamente?\n\nEu estava adorando.\n\n🏡❤️",
      },
      {
        date: "18 de agosto de 2025",
        title: "",
        text: "O dia em que vimos o Tony tomsom olhando para o computador.\n\nEle parecia estar trabalhando.\n\nParecia inclusive mais produtivo do que muita gente.\n\nAté hoje eu rio quando lembro daquela cena.\n\n💻🐱❤️",
      },
      {
        date: "18 de setembro de 2025",
        title: "",
        text: "O dia em que fomos no forneto pela primeira vez.\n\nO problema é que ele virou meu restaurante favorito.\n\nEntão tecnicamente a culpa é sua.\n\n🍝❤️",
      },
      {
        date: "28 de setembro de 2025",
        title: "",
        text: "O dia em que vi suas fotos de criança pela primeira vez.\n\nE descobri que você era fofa desde sempre.\n\nAlgumas coisas claramente nunca mudaram.\n\n📸❤️",
      },
      {
        date: "26 de outubro de 2025",
        title: "",
        text: "Nossa primeira tentativa de iniciar uma vida fitness.\n\nA tentativa existiu.\n\nA motivação existiu.\n\nA execução foi discutível.\n\nMas pelo menos tentamos.\n\n🏃‍♀️😂❤️",
      },
      {
        date: "08 de novembro de 2025",
        title: "",
        text: "Campina Grande.\n\nNossa primeira micro viagem.\n\nMais uma memória.\n\nMais uma prova de que eu gosto de qualquer lugar quando estou com você.\n\n🌆❤️",
      },
      {
        date: "10 de novembro de 2025",
        title: "",
        text: "O dia em que fomos comer no seu restaurante favorito. (Não lembro o nome mas sie que é da paraiba)\n\nMais uma refeição levada extremamente a sério.\n\nExatamente como você gosta.\n\n🍽️❤️",
      },
      {
        date: "15 de novembro de 2025",
        title: "",
        text: "O dia em que você foi comigo para a confraternização dos amigos da minha mãe.\n\nVocê sobreviveu.\n\nFoi simpática.\n\n❤️",
      },
      {
        date: "18 de novembro de 2025",
        title: "",
        text: "O dia em que colocamos remédio na orelha do Tony pela primeira vez.\n\nUma missão que exigiu planejamento, coragem e um pouco de sorte.\n\n🐱💊❤️",
      },
      {
        date: "29 de novembro de 2025",
        title: "",
        text: "O dia do caos.\n\nPrimeiro fomos para a casa do Edu pedir ajuda para limpar a orelha do Tony.\n\nDepois fomos para o show de Jorge & Mateus.\n\nEm algum momento da noite você começou a chorar e queria contar para sua familia sobre a gente.\n\nFoi uma sequência de acontecimentos tão aleatória que parece inventada.\n\nMas foi muito a nossa cara.\n\n🎤😭❤️",
      },
      {
        date: "05 de dezembro de 2025",
        title: "",
        text: "O dia em que decidimos mudar de vida.\n\nPrimeira dose de Mounjaro.\n\nComeço da academia.\n\nComeço da natação.\n\nO início da nossa fase fitness.\n\nE, surpreendentemente, dessa vez deu certo.\n\n🏋️‍♀️🏊‍♀️❤️",
      },
      {
        date: "31 de dezembro de 2025",
        title: "",
        text: "Nosso primeiro Ano Novo juntas.\n\nPassamos a virada com a sua família.\n\nE eu entrei em 2026 exatamente onde queria estar.\n\n🎆❤️",
      },
      {
        date: "Janeiro de 2026",
        title: "",
        text: "A corrida entrou para a história.\n\nE virou mais uma das coisas que passamos a compartilhar.\n\n🏃‍♀️❤️",
      },
      {
        date: "02 a 05 de abril de 2026",
        title: "",
        text: "Milagres.\n\nNossa viagem.\n\nDias de praia.\n\nDias de descanso.\n\nDias de felicidade.\n\nDias que eu queria guardar para sempre.\n\n🌊☀️❤️",
      },
      {
        date: "18 de abril de 2026",
        title: "",
        text: "O dia em que demos banho no Toddynho.\n\n Cachorrinho porquinho tomando bainho\n\n Piolho piolho coça coça coça sim, piolho piolho passa logo o escabin🛁🐱❤️",
      },
      {
        date: "Hoje ❤️",
        title: "",
        text: "Depois de todas essas histórias...\n\ndas românticas,\n\ndas engraçadas,\n\ndas caóticas,\n\ndas que fazem sentido\n\ne das que provavelmente só nós entendemos...\n\nvocê continua sendo minha pessoa favorita.\n\nE eu ainda escolho você.\n\nTodos os dias.\n\n❤️",
      },
    ],
  },
  memories: {
    title: "Nossas Memórias",
    photos: [
      // { src: '/photos/foto1.jpg', caption: '[ legenda ]' },
    ],
  },
  remindsMe: {
    title: "Tudo Me Lembra Você",
    items: [
      {
        trigger: "⚖️ Direito",
        memory:
          "Hoje é impossível ouvir qualquer assunto relacionado a Direito sem pensar em você.\n\nAdvogadas.\n\nProcessos.\n\nAudiências.\n\nQualquer coisa.\n\nMeu cérebro automaticamente faz a associação.\n\n❤️",
      },
      {
        trigger: "🍝 Restaurantes",
        memory:
          "Toda vez que alguém fala de restaurante, eu lembro de você.\n\nPorque você acredita que restaurantes são muito mais do que comida — são experiências.\n\n❤️",
      },
      {
        trigger: "👩‍🍳 MasterChef",
        memory:
          "Não importa a temporada.\n\nNão importa quem está competindo.\n\nSempre que eu vejo MasterChef, eu lembro de você.\n\n❤️",
      },
      {
        trigger: "☕ Café",
        memory:
          "Café.\n\nVocê não consegue passar um dia sem tomar café.\n\nEntão toda vez que eu vejo uma xícara, sinto cheiro de café passando ou alguém fala sobre café, eu lembro de você.\n\n❤️",
      },
      {
        trigger: "🏃‍♀️ Esportes",
        memory:
          "Corrida.\n\nNatação.\n\nAcademia.\n\nPorque são coisas que a gente faz juntas.\n\nE eu amo dividir esses momentos com você.\n\n❤️",
      },
      {
        trigger: "🎤 Luan Santana",
        memory:
          "Não importa a música.\n\nSe toca Luan Santana, eu penso em você.\n\n❤️",
      },
      {
        trigger: "🎵 Naked in Manhattan",
        memory:
          "Toda vez que eu escuto Naked in Manhattan eu lembro de você.\n\nE não é só por causa da música.\n\nÉ porque um dos primeiros filmes que assistimos juntas foi Mulholland Drive.\n\nUm dos meus filmes favoritos.\n\nE toda vez que eu escuto a música e chega naquela referência ao filme, eu lembro daquele começo.\n\nDas conversas.\n\nDos filmes.\n\nE de você.\n\n❤️",
      },
      {
        trigger: "📱 Ari Fileppi",
        memory:
          "Toda vez que aparece um vídeo da Ari Fileppi, eu lembro de você.\n\nPorque você vivia falando dela e acabou me fazendo gostar também.\n\nHoje eu vejo os vídeos e penso em você.\n\n❤️",
      },
      {
        trigger: "😂 Vídeos",
        memory:
          "A verdade é que aproximadamente 80% dos vídeos que eu vejo me lembram você.\n\nE os outros 20% eu provavelmente mando para você mesmo assim.\n\n❤️",
      },
      {
        trigger: "🌸 Seu perfume",
        memory:
          "O cheiro do seu 212 tem um efeito muito específico.\n\nEle me transporta imediatamente para você.\n\n❤️",
      },
      {
        trigger: "📍 Jatiúca",
        memory:
          "Toda vez que alguma coisa acontece na Jatiúca eu lembro de você.\n\nAutomaticamente.\n\n❤️",
      },
      {
        trigger: "🏦 Sicoob",
        memory:
          "Eu nunca imaginei que uma cooperativa de crédito entraria na lista de coisas que me fazem pensar em alguém.\n\nMas aqui estamos.\n\n❤️",
      },
      {
        trigger: "🐱 Toneco",
        memory:
          "É impossível pensar no Toneco sem lembrar de você.\n\nE é impossível lembrar de você sem pensar no Toneco.\n\nVocê e o filheco já vêm em conjunto.\n\n❤️",
      },
      {
        trigger: "🚗 Baliza",
        memory:
          "Toda vez que eu erro uma baliza eu lembro de você.\n\nPorque imediatamente penso em você reclamando.\n\n❤️",
      },
      {
        trigger: "❤️ Futuro",
        memory: "Quando eu penso no futuro, eu penso em você.\n\nÉ simples assim.\n\n❤️",
      },
      {
        trigger: "👶 Filhos",
        memory:
          "Quando eu imagino como seria construir uma família um dia...\n\nVocê está lá.\n\n❤️",
      },
      {
        trigger: "🌷 Você",
        memory:
          "A verdade é que existem centenas de coisas que me lembram você.\n\nAlgumas fazem sentido.\n\nOutras nem tanto.\n\nMas depois de um tempo eu percebi uma coisa:\n\nquando alguma coisa é importante para mim, eu sempre acabo associando a você.\n\n❤️",
      },
      {
        trigger: "😛 Sua língua",
        memory:
          "Tem uma coisa que você faz que já virou marca registrada.\n\nToda vez que você está concentrada em alguma coisa...\n\na língua sobe para o lábio superior.\n\nNão importa se é:\n\n📱 mexendo no celular\n\n📖 lendo\n\n🍳 cozinhando\n\n⚖️ trabalhando\n\n🏃 treinando\n\nEu já sei que quando a língua aparece...\n\nvocê está processando informações.\n\nÉ praticamente uma barra de carregamento da Paulinha.\n\nE o melhor é que você sabe exatamente do que eu estou falando.\n\nPorque eu já te zoei por isso umas mil vezes.\n\nMas eu continuo achando a coisa mais fofa do mundo. ❤️",
      },
    ],
  },
  thingsILove: {
    title: "Coisas Que Eu Amo Em Você",
    items: [
      {
        emoji: "⚖️",
        shortTitle: "Seu trabalho",
        title: "O jeito que você ama o seu trabalho",
        text: "Uma das coisas que eu mais admiro em você é o quanto você gosta do que faz.\n\nVocê trabalha com dedicação.\n\nCom responsabilidade.\n\nE com um carinho que dá para perceber mesmo de fora.\n\nEu gosto de ouvir você falando sobre trabalho.\n\nGosto de ver você resolvendo problemas.\n\nE gosto de ver o quanto você se importa em fazer as coisas direito.\n\nVocê me inspira.\n\nE às vezes eu penso que, se um dia eu conseguir ser pelo menos 1% da profissional que você é, eu já vou estar muito feliz.\n\n❤️",
      },
      {
        emoji: "🍝",
        shortTitle: "Suas comidas",
        title: "O jeito que você gosta de cozinhar para a gente",
        text: "Eu amo as suas comidas.\n\nNão só porque são boas.\n\nMas porque eu adoro ver você cozinhando para a gente.\n\nE porque tudo fica mais gostoso quando é você quem faz.\n\n❤️",
      },
      {
        emoji: "🎬",
        shortTitle: "Filmes e séries juntas",
        title: "O jeito que a gente assiste coisas juntas",
        text: "Eu amo assistir filmes e séries com você.\n\nÀs vezes a gente presta atenção.\n\nÀs vezes a gente passa mais tempo comentando do que assistindo.\n\nMas não importa muito o que está passando na tela.\n\nPorque minha parte favorita sempre é estar assistindo com você.\n\n❤️",
      },
      {
        emoji: "🧠",
        shortTitle: "Nossas obsessões",
        title: "O jeito que a gente fica obcecada por um assunto",
        text: "Eu amo quando a gente encontra um assunto novo.\n\nPorque de repente ele vira o único assunto existente no universo.\n\nA gente pesquisa.\n\nA gente comenta.\n\nA gente manda vídeo.\n\nA gente manda notícia.\n\nA gente fala sobre isso por dias.\n\nE eu adoro quando isso acontece.\n\n❤️",
      },
      {
        emoji: "🤝",
        shortTitle: "Nossas ideias",
        title: "O fato de que nós sempre embarcamos nas ideias uma da outra",
        text: "Às vezes a ideia é boa.\n\nÀs vezes é questionável.\n\nÀs vezes é completamente sem sentido.\n\nMas de alguma forma a gente sempre acaba entrando juntas na aventura.\n\nE eu amo isso.\n\n❤️",
      },
      {
        emoji: "🏃‍♀️",
        shortTitle: "Exercícios juntas",
        title: "O jeito que você me motiva",
        text: "Eu amo fazer exercícios com você.\n\nCorrida.\n\nNatação.\n\nAcademia.\n\nPorque quando eu estou sozinha é muito mais fácil desistir.\n\nMas quando estou com você, eu tenho vontade de continuar.\n\nVocê me motiva mais do que imagina.\n\nMesmo que às vezes eu consiga te estressar no meio do treino.\n\nE mesmo que algumas dessas aventuras fitness terminem em pequenas discussões.\n\nNo final das contas, eu sempre gosto mais quando estamos fazendo tudo juntas.\n\n❤️",
      },
      {
        emoji: "🥹",
        shortTitle: "Seu jeito de amar",
        title: "O jeito que você demonstra amor",
        text: "Às vezes eu demoro para perceber.\n\nÀs vezes eu preciso que as coisas sejam mais explícitas.\n\nMas eu vejo.\n\nEu percebo.\n\nE mesmo quando você não fala nada, eu consigo sentir.\n\n❤️",
      },
      {
        emoji: "🎶",
        shortTitle: "Suas musiquinhas",
        title: "Suas musiquinhas",
        text: "Você tem a capacidade impressionante de transformar qualquer situação em uma música.\n\nQualquer situação.\n\nQualquer assunto.\n\nQualquer contexto.\n\nE eu nunca sei quando a próxima vai surgir.\n\nMas sempre dou risada quando acontece.\n\n❤️",
      },
      {
        emoji: "🤨",
        shortTitle: "Sua sobrancelha",
        title: "O jeito que você mexe na sobrancelha quando está pensando",
        text: "Eu amo quando você está concentrada ou pensando em alguma coisa e começa a mexer na sobrancelha sem nem perceber.\n\nÉ uma daquelas manias pequenas que provavelmente passam despercebidas para quase todo mundo.\n\nMas eu percebo.\n\nE eu acho muito bonitinho.\n\nE eu acho ainda mais engraçado quando você quer me dar dedo sem que as outras pessoas percebam.\n\nMexe na sobrancelha com o dedo do meio.\n\nFinge normalidade.\n\nMas eu sei exatamente o que você está fazendo.\n\nE isso sempre me faz rir.\n\nOBS: fico irritada quando você fala que não brilha em mim quando eu faço.\n\n❤️",
      },
      {
        emoji: "🐱",
        shortTitle: "Seu cuidado com o Toneco",
        title: "O jeito que você cuida do Toneco",
        text: "Às vezes eu acho que você trata ele como se fosse um ser humano.\n\nComo se fosse um bebê de verdade.\n\nE sinceramente?\n\nTalvez até o tony ache a mesma coisa.\n\n❤️",
      },
      {
        emoji: "😂",
        shortTitle: "A gente sendo abestadas",
        title: "O fato de que a gente é muito abestada juntas",
        text: "Eu não sei explicar isso para outras pessoas.\n\nMas você me faz rir de coisas completamente idiotas.\n\nE eu acho que juntas nós duas perdemos qualquer chance de parecer adultas e responsáveis.\n\n❤️",
      },
      {
        emoji: "🪞",
        shortTitle: "Você no espelho",
        title: "O jeito que você fica olhando para o espelho",
        text: "Eu amo quando você para na frente do espelho.\n\nComeça a fazer poses.\n\nFaz umas danças aleatórias e nada a ver.\n\nToda vez eu fico assistindo e dando risada.\n\n❤️",
      },
      {
        emoji: "🚪",
        shortTitle: "Você me irritando",
        title: "O jeito que você me irrita quando eu estou no banheiro",
        text: "Você sabe exatamente o momento certo para começar a me perturbar.\n\nE por algum motivo isso parece divertir muito você.\n\nEu fico irritada.\n\nMas a verdade é que eu amo esses momentos.\n\n❤️",
      },
      {
        emoji: "❤️",
        shortTitle: "Você",
        title: "Você",
        text: "Talvez essa seja a única coisa que realmente resume todas as outras.\n\nEu amo as suas qualidades.\n\nEu amo as suas manias.\n\nEu amo as coisas que você faz sem perceber.\n\nEu amo o jeito que você cuida das pessoas.\n\nEu amo o jeito que você me faz rir.\n\nE eu amo o fato de que, depois de todo esse tempo, você continua sendo a minha pessoa favorita.\n\n❤️",
      },
    ],
  },
  cinema: {
    title: "Nossos Filmes 🍿❤️",
    movies: [
      { title: "Just Like Heaven", year: "2005", poster: "/4izi3hayXIu34qNMpyHPGkT0OZf.jpg" },
      { title: "Murder Mystery 2", year: "2023", poster: "/pf1dQDb55mJ13KQMEYa4O0fni64.jpg" },
      { title: "Ready or Not", year: "2019", poster: "/k5dJuAdjv1wCq2Vzj1GZfwGmLoU.jpg" },
      { title: "Conclave", year: "2024", poster: "/3BLc3A3bOe240fgq2wDGQIiFg8h.jpg" },
      { title: "Black Mirror: Bête Noire", year: "2025", poster: "/4HheeR47LHsfD1hsSW79QwTX1z9.jpg" },
      { title: "Companion", year: "2025", poster: "/7LbrEQvturE05hljvTCWST7rLQL.jpg" },
      { title: "Black Mirror: Bandersnatch", year: "2018", poster: "/fR0VZ0VE598zl1lrYf7IfBqEwQ2.jpg" },
      { title: "Black Mirror: Hotel Reverie", year: "2025", poster: "/xEyXUpdl531IYPfSCCUqYYwImw.jpg" },
      { title: "Scream", year: "2022", poster: "/lvskZGlyH9LuGKO8OdBWQWTGlGx.jpg" },
      { title: "Us", year: "2019", poster: "/5ncjQfUDr0oRKnfpdAXobJFbnao.jpg" },
      { title: "What Happened to Monday", year: "2017", poster: "/pIDqKzz7Y0Unm9Sv4HW48EAW1CA.jpg" },
      { title: "Wicked", year: "2024", poster: "/qcaKkLwIXCAxJtpetVYHniCvLZj.jpg" },
      { title: "Forrest Gump", year: "1994", poster: "/d74WpIsH8379TIL4wUxDneRCYv2.jpg" },
      { title: "Bring Her Back", year: "2025", poster: "/xfmnUz6C5WRboIMQZD0j3SNDT7v.jpg" },
      { title: "Weapons", year: "2025", poster: "/psEJSjQr6I9GSJTdW28CKC4Kffs.jpg" },
      { title: "Together", year: "2025", poster: "/m9jfOWLuyYejyJX17wRFUQGtUji.jpg" },
      { title: "Harvest", year: "2024", poster: "/bOThxUQG0NlAYrnp45xkVLMCckP.jpg" },
      { title: "Carol", year: "2015", poster: "/bA9eV51goZvcufsd9TBtGuDwORz.jpg" },
      { title: "Alvin and the Chipmunks", year: "2007", poster: "/o2WoeYJv9ISS9bw0kKD2cvmg9xN.jpg" },
      { title: "The Grinch", year: "2018", poster: "/hGnQmQARgtXtoesIGAsmmTbMKfH.jpg" },
      { title: "The Housemaid", year: "2025", poster: "/qaqAdyuk8Fcgfsj19Cj3OpJ8hN.jpg" },
      { title: "Project Hail Mary", year: "2026", poster: "/7pIgFNoX07z7alHt73TSsKRtYye.jpg" },
      { title: "The Devil Wears Prada", year: "2006", poster: "/fwaioeouE89lrcnckfluzIKMwSu.jpg" },
      { title: "Wicked: For Good", year: "2025", poster: "/8VUn52P2qFepxG8b5W8pjS7DzCT.jpg" },
      { title: "Parasite", year: "2019", poster: "/igw938inb6Fy0YVcwIyxQ7Lu5FO.jpg" },
      { title: "Interstellar", year: "2014", poster: "/6ricSDD83BClJsFdGB6x7cM0MFQ.jpg" },
      { title: "Harry Potter and the Philosopher's Stone", year: "2001", poster: "/4rtsbE9aQ1qw4gv7yYwaNYfWFoS.jpg" },
      { title: "Harry Potter and the Chamber of Secrets", year: "2002", poster: "/811j0Jf2D0mK1U6RxXJoZgOB29n.jpg" },
      { title: "Harry Potter and the Prisoner of Azkaban", year: "2004", poster: "/1HdMUghqlgOIvbsU9ZtO40IPRzl.jpg" },
      { title: "Harry Potter and the Goblet of Fire", year: "2005", poster: "/5oWB3hjzyECRBAjgWkmZinxl9qA.jpg" },
      { title: "Harry Potter and the Order of the Phoenix", year: "2007", poster: "/tIf9aUyNljda9MG1pjlOLHCZ3b0.jpg" },
      { title: "Send Help", year: "2026", poster: "/rpU5DGrTVdqcygZBB9npt1WMFch.jpg" },
      { title: "Eternity", year: "2025", poster: "/ogU6WEsb6NexwUIPorHcSnkvISx.jpg" },
      { title: "Mercy", year: "2026", poster: "/vI7bNC07BaSEvZ9ATzV57wpAYwQ.jpg" },
      { title: "Sinners", year: "2025", poster: "/v0Ljeti537c6cNKweuEN0iaU3x4.jpg" },
      { title: "The Conjuring: Last Rites", year: "2025", poster: "/40nHGUfypLhlr7gJx8At1IbYkaK.jpg" },
      { title: "The Fantastic Four: First Steps", year: "2025", poster: "/8F2vIxWycANHW763lnx2hJVtjDC.jpg" },
    ],
  },
  letters: {
    title: "Cartinhas",
    letters: [
      { title: "[ título da cartinha ]", content: "[ conteúdo da cartinha ]" },
    ],
  },
  surprise: {
    title: "✨ Surpresa Final",
    content:
      "[ conteúdo da surpresa final — pode ser um plano, uma promessa, um presente ]",
  },
};

export const deskItems: DeskItemData[] = [
  {
    id: "our-story",
    emoji: "📖",
    label: "Nossa História",
    page: "our-story",
    position: { top: "15%", left: "10%" },
  },
  {
    id: "memories",
    emoji: "📸",
    label: "Nossas Memórias",
    page: "memories",
    position: { top: "20%", left: "55%" },
  },
  {
    id: "reminds-me",
    emoji: "🌷",
    label: "Tudo Me Lembra Você",
    page: "reminds-me",
    position: { top: "45%", left: "15%" },
  },
  {
    id: "things-i-love",
    emoji: "❤️",
    label: "Coisas Que Eu Amo Em Você",
    page: "things-i-love",
    position: { top: "40%", left: "60%" },
  },
  {
    id: "cinema",
    emoji: "🎬",
    label: "Nossos Filmes",
    page: "cinema",
    position: { top: "65%", left: "35%" },
  },
  {
    id: "surprise",
    emoji: "🔒",
    label: "Surpresa Final",
    page: "surprise",
    position: { top: "70%", left: "65%" },
  },
];
