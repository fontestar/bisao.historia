/* =========================================================================
 * JOGO DO BISÃO — BANCO DE PERGUNTAS
 * -------------------------------------------------------------------------
 * ESTRUTURA — 3 ASSUNTOS, 18 PERGUNTAS NO TOTAL
 *
 *   perguntas = {
 *     assunto1: { nome, faceis[], medias[], dificeis[] },
 *     assunto2: { ... },
 *     assunto3: { ... }
 *   }
 *
 * Pontuação: fácil = 10 | média = 20 | difícil = 30
 * 18 cartas de pergunta + 6 cartas especiais = 24 cartas no tabuleiro.
 * As 24 posições são sorteadas a cada nova partida.
 *
 * -------------------------------------------------------------------------
 * COMO PREENCHER CADA PERGUNTA
 *
 *   {
 *     texto: "opcional",       // texto de apoio, exibido antes do enunciado
 *     pergunta: "Enunciado",
 *     alternativas: ["A", "B", "C", "D", "E"],
 *     correta: 0,              // 0=A | 1=B | 2=C | 3=D | 4=E
 *     explicacao: "opcional",  // aparece na tela depois da resposta
 *   }
 *
 * • SEMPRE 5 alternativas, na ordem A, B, C, D, E.
 * • `correta` é o ÍNDICE (começa em zero), não a letra.
 * • `texto` e `explicacao` são opcionais — se não existirem, nada é exibido.
 *
 * -------------------------------------------------------------------------
 * DISTRIBUIÇÃO ATUAL
 *
 *   Assunto 1 — Era Vargas ............. 3 fáceis, 4 médias, 2 difíceis = 9
 *   Assunto 2 — Nazifascismo ........... 1 fácil,  2 médias, 1 difícil  = 4
 *   Assunto 3 — Segunda Guerra Mundial . 2 fáceis, 2 médias, 1 difícil  = 5
 *                                                               TOTAL  = 18
 *
 * GABARITO  (A = 6, B = 3, C = 4, D = 3, E = 2)
 *
 *   ERA VARGAS ....... Q1 D | Q2 A | Q3 C | Q4 E | Q5 B
 *                      Q6 A | Q7 A | Q8 C | Q9 E
 *   NAZIFASCISMO ..... Q10 B | Q13 C | Q16 A | Q18 C
 *   SEGUNDA GUERRA ... Q11 A | Q12 D | Q14 A | Q15 B | Q17 D
 *   (a numeração é a da lista original de conteúdo)
 * ========================================================================= */

export interface Pergunta {
  /** Texto de apoio exibido antes do enunciado (opcional) */
  texto?: string;
  /** Enunciado da pergunta */
  pergunta: string;
  /** Exatamente 5 alternativas, na ordem A, B, C, D, E */
  alternativas: string[];
  /** Índice (0 a 4) da alternativa correta */
  correta: number;
  /** Correção comentada, exibida após a resposta (opcional) */
  explicacao?: string;
}

export interface Assunto {
  nome: string;
  faceis: Pergunta[]; // 10 pontos cada
  medias: Pergunta[]; // 20 pontos cada
  dificeis: Pergunta[]; // 30 pontos cada
}

export interface BancoDePerguntas {
  assunto1: Assunto;
  assunto2: Assunto;
  assunto3: Assunto;
}

/** Identificadores dos assuntos, na ordem em que aparecem na tela inicial. */
export type AssuntoId = keyof BancoDePerguntas;
export const ORDEM_ASSUNTOS: AssuntoId[] = ["assunto1", "assunto2", "assunto3"];

export const perguntas: BancoDePerguntas = {
  /* ======================================================================
   * ASSUNTO 1 — ERA VARGAS (1930-1945)
   * ==================================================================== */
  assunto1: {
    nome: "Era Vargas (1930-1945)",

    /* ---- FÁCEIS (10 pontos) ---- */
    faceis: [
      {
        // Q1 — resposta: D
        texto:
          "Entre 1930 e 1934, o Governo Provisório dissolveu o Congresso e os legislativos estaduais, nomeou interventores para os estados e criou os Ministérios do Trabalho e da Educação e Saúde.",
        pergunta:
          "As medidas descritas, tomadas em conjunto, evidenciam que o Governo Provisório:",
        alternativas: [
          "Preservou a autonomia política dos estados e apenas reorganizou as relações entre as elites regionais e o governo federal.",
          "Ampliou a participação popular na administração pública por meio da criação de novos ministérios e órgãos políticos.",
          "Reduziu a presença do governo federal, transferindo aos interventores responsabilidades que antes estavam concentradas na União.",
          "Reforçou o poder do governo federal sobre os estados e ampliou a atuação do Estado em áreas como trabalho, educação e saúde.",
          "Buscou restabelecer o equilíbrio entre os Poderes, transferindo ao Judiciário as atribuições que haviam pertencido ao Legislativo.",
        ],
        correta: 3,
      },
      {
        // Q2 — resposta: A
        texto:
          "Em novembro de 1937, alegando o Plano Cohen — suposto plano comunista de tomada do poder —, o governo fechou o Congresso e outorgou nova Constituição. Depois proibiu todos os partidos, inclusive a AIB, e o DIP passou a controlar a imprensa.",
        pergunta: "Os fatos descritos indicam que o Estado Novo:",
        alternativas: [
          "Utilizou o anticomunismo como justificativa para concentrar poderes e reprimir a oposição em geral.",
          "Transformou a AIB em partido oficial do novo regime e garantiu sua participação no governo.",
          "Combateu somente organizações de esquerda, preservando a atuação política dos demais grupos.",
          "Manteve a Constituição de 1934, suspendendo apenas algumas garantias individuais.",
          "Ampliou a autonomia dos estados para enfrentar a ameaça apresentada pelo governo.",
        ],
        correta: 0,
      },
      {
        // Q3 — resposta: C
        texto:
          "Em 1945, cresceu a pressão pela redemocratização. Lançaram-se as candidaturas de Eurico Gaspar Dutra e Eduardo Gomes, enquanto a Campanha Queremista mobilizava setores pela permanência de Vargas. Vargas foi deposto, e Dutra eleito.",
        pergunta: "Sobre o fim do Estado Novo, é correto afirmar que:",
        alternativas: [
          "O queremismo defendia a saída imediata de Vargas da Presidência.",
          "Vargas permaneceu no cargo até a posse de Dutra, sem sofrer deposição.",
          "O processo combinou pressão pela redemocratização e mobilização em favor de Vargas, mas terminou com sua deposição e a eleição de Dutra.",
          "Eduardo Gomes venceu as eleições presidenciais realizadas após a queda de Vargas.",
          "A queda de Vargas ocorreu depois de uma derrota militar brasileira na Segunda Guerra Mundial.",
        ],
        correta: 2,
      },
    ],

    /* ---- MÉDIAS (20 pontos) ---- */
    medias: [
      {
        // Q4 — resposta: E
        texto:
          "A Constituição de 1934 incorporou o voto secreto e o voto feminino, criou uma bancada classista, previu a Justiça do Trabalho e o ensino primário obrigatório e nacionalizou as riquezas do subsolo.",
        pergunta:
          "Considerando esses dispositivos, a Constituição de 1934 pode ser interpretada como:",
        alternativas: [
          "Um texto que preservou princípios liberais da ordem republicana, mas incorporou algumas medidas sociais e econômicas que ampliavam a presença do Estado na sociedade brasileira.",
          "Uma ruptura completa com as medidas do Governo Provisório, pois as mudanças eleitorais e trabalhistas anteriores foram abandonadas pela Assembleia Constituinte.",
          "Uma Constituição predominantemente corporativista, na qual a representação profissional passou a substituir a representação política baseada em partidos e eleições.",
          "Um marco exclusivamente social, voltado principalmente à proteção dos trabalhadores, sem apresentar mudanças relevantes na organização política e econômica do país.",
          "Um compromisso entre ampliação da participação política e maior intervenção estatal, reunindo direitos eleitorais e sociais com medidas de nacionalismo econômico e representação classista.",
        ],
        correta: 4,
      },
      {
        // Q5 — resposta: B
        texto:
          "Inconformadas com a nomeação de interventores e a demora em convocar uma Constituinte, as elites paulistas iniciaram em 9 de julho de 1932 uma revolta armada contra o Governo Provisório, derrotada militarmente.",
        pergunta:
          "Sobre as consequências dessa revolta, é correto afirmar que:",
        alternativas: [
          "A derrota militar enfraqueceu definitivamente as reivindicações constitucionalistas, permitindo que Vargas mantivesse o Governo Provisório sem necessidade de convocar uma Assembleia Constituinte.",
          "Embora derrotado militarmente, o movimento aumentou a pressão política pela constitucionalização, contribuindo para a convocação da Constituinte que resultou na Constituição de 1934.",
          "A vitória das forças federais provocou a restauração imediata da autonomia estadual e a retomada das práticas políticas características da Primeira República.",
          "O conflito levou Vargas a abandonar a centralização administrativa e a devolver aos governos estaduais o controle das principais instituições políticas.",
          "A derrota paulista fortaleceu o governo a ponto de a questão constitucional deixar de existir até a deposição de Vargas e o fim do Estado Novo.",
        ],
        correta: 1,
      },
      {
        // Q6 — resposta: A
        texto:
          "No governo Vargas, leis como a jornada de 8 horas e as férias conviveram com regras que condicionavam o reconhecimento dos sindicatos ao Ministério do Trabalho. Órgãos estatais passaram a mediar os conflitos entre patrões e empregados.",
        pergunta:
          "A política trabalhista apresentada no texto revela que o governo Vargas:",
        alternativas: [
          "Ampliou direitos trabalhistas e criou mecanismos institucionais de proteção, ao mesmo tempo em que submeteu os sindicatos à regulamentação e ao controle estatal.",
          "Reconheceu direitos sociais principalmente para garantir liberdade sindical, permitindo que os trabalhadores organizassem sindicatos independentes do Ministério do Trabalho.",
          "Priorizou o controle político dos trabalhadores, mas deixou de estabelecer mudanças relevantes nas condições de trabalho e na legislação social.",
          "Transferiu aos sindicatos grande parte das funções do Estado nas relações trabalhistas, utilizando as instituições governamentais apenas para casos excepcionais.",
          "Reduziu a intervenção direta do governo nas relações entre patrões e empregados, fortalecendo a negociação autônoma entre sindicatos e empresas.",
        ],
        correta: 0,
      },
      {
        // Q7 — resposta: A
        texto:
          "Às vésperas das eleições previstas para 1938, o governo divulgou o Plano Cohen, apresentado como um plano comunista de tomada do poder e posteriormente identificado como documento forjado.",
        pergunta: "O uso político desse documento permitiu a Vargas:",
        alternativas: [
          "Apresentar uma suposta ameaça revolucionária como justificativa para adotar medidas de exceção, fechar o Congresso e interromper o processo eleitoral.",
          "Reforçar o funcionamento das instituições constitucionais, utilizando a ameaça comunista para ampliar os poderes de fiscalização do Congresso.",
          "Antecipar as eleições presidenciais, argumentando que uma consulta popular seria necessária para enfrentar a instabilidade política provocada pelos grupos comunistas.",
          "Prorrogar legalmente seu mandato, utilizando os mecanismos previstos pela Constituição de 1934 para evitar uma crise sucessória.",
          "Restaurar a atuação legal da Aliança Nacional Libertadora, cuja repressão anterior teria sido apresentada como consequência de uma ameaça que o Plano Cohen desmentiria.",
        ],
        correta: 0,
      },
    ],

    /* ---- DIFÍCEIS (30 pontos) ---- */
    dificeis: [
      {
        // Q8 — resposta: C
        texto:
          "A AIB, de Plínio Salgado, adotava o lema “Deus, Pátria e Família”; a ANL reunia comunistas em torno da reforma agrária e da nacionalização de empresas estrangeiras. Em 1935 veio a Lei de Segurança Nacional; em 1938, uma intentona integralista.",
        pergunta:
          "Sobre essas organizações e a repressão do governo, assinale a alternativa correta:",
        alternativas: [
          "Embora apresentassem diferenças ideológicas, AIB e ANL compartilhavam um projeto político essencialmente semelhante, sendo a repressão governamental resultado principalmente da disputa entre duas organizações que defendiam diferentes formas de nacionalismo econômico.",
          "A AIB e a ANL foram tratadas de maneira equivalente desde sua criação, pois o governo Vargas adotou uma política de neutralidade diante da polarização ideológica e somente interferiu quando ambas passaram a representar ameaças militares concretas.",
          "As duas organizações expressavam projetos políticos distintos e foram atingidas pela repressão em circunstâncias diferentes: a ANL foi fechada em 1935, enquanto a AIB foi posteriormente dissolvida com a proibição dos partidos no Estado Novo e ainda participou da tentativa de levante integralista de 1938.",
          "A repressão à ANL ocorreu apenas depois da tentativa integralista de 1938, pois o governo inicialmente considerava os integralistas a principal ameaça à ordem política e deixou os grupos ligados à esquerda em atividade legal.",
          "Tanto a AIB quanto a ANL foram dissolvidas simultaneamente em 1935 com base na Lei de Segurança Nacional, o que demonstra que Vargas procurou impedir indistintamente a organização de grupos de esquerda e de direita desde o início do Governo Constitucional.",
        ],
        correta: 2,
      },
      {
        // Q9 — resposta: E
        texto:
          "A Frente Negra Brasileira (FNB) promoveu alfabetização e organização política da população negra nos anos 1930 e foi fechada pelo Estado Novo. No período, o discurso oficial exaltava a harmonia racial, enquanto circulavam ideias de branqueamento.",
        pergunta: "A relação entre esses elementos evidencia que:",
        alternativas: [
          "A existência de um discurso oficial de harmonia racial demonstra que o Estado brasileiro havia abandonado práticas discriminatórias e passado a assegurar igualdade de oportunidades entre diferentes grupos raciais, apesar do fechamento posterior da FNB.",
          "A atuação da FNB revela que as organizações negras estavam integradas ao projeto oficial do Estado Novo, uma vez que suas atividades educacionais e profissionais coincidiam plenamente com a política governamental de valorização da mestiçagem.",
          "O fechamento da FNB ocorreu principalmente porque a organização recusava os princípios nacionalistas do Estado Novo e defendia uma política de separação racial semelhante às experiências de outros países durante o período.",
          "As ideias de branqueamento foram substituídas de forma completa pelo discurso de harmonia racial durante a década de 1930, fazendo com que as teorias eugenistas deixassem de exercer influência no debate intelectual e político brasileiro.",
          "O discurso de valorização da harmonia racial convivia com a permanência de ideias de branqueamento e com restrições à organização política da população negra, revelando a distância entre a imagem de igualdade racial e as desigualdades e formas de discriminação existentes na sociedade.",
        ],
        correta: 4,
      },
    ],
  },

  /* ======================================================================
   * ASSUNTO 2 — NAZIFASCISMO
   * ==================================================================== */
  assunto2: {
    nome: "Nazifascismo",

    /* ---- FÁCEIS (10 pontos) ---- */
    faceis: [
      {
        // Q10 — resposta: B
        texto:
          "No pós-Primeira Guerra, a Itália vivia crise econômica e conflitos sociais, e parte das elites temia o avanço socialista. Nesse cenário, Mussolini fundou o Partido Nacional Fascista e organizou, em 1922, a Marcha sobre Roma.",
        pergunta:
          "A chegada de Mussolini ao governo, em 1922, é melhor explicada por:",
        alternativas: [
          "Uma vitória eleitoral que garantiu maioria fascista no Parlamento.",
          "Uma combinação de crise social, temor do socialismo e pressão fascista, seguida da nomeação de Mussolini pelo rei.",
          "Uma revolução socialista que derrubou a monarquia italiana.",
          "O apoio decisivo da Igreja, formalizado no Tratado de Latrão antes da Marcha sobre Roma.",
          "A derrota militar da monarquia diante das forças fascistas e a abdicação do rei.",
        ],
        correta: 1,
      },
    ],

    /* ---- MÉDIAS (20 pontos) ---- */
    medias: [
      {
        // Q13 — resposta: C
        texto:
          "Em 1933, o Partido Nazista, que crescera com a crise, levou Hitler à chancelaria. Pouco depois, o incêndio do Reichstag foi atribuído aos comunistas, e o governo ampliou seus poderes e passou a perseguir opositores.",
        pergunta: "Esse processo indica que a ditadura nazista foi construída:",
        alternativas: [
          "Por meio de uma ruptura militar com a República de Weimar, que colocou Hitler diretamente no comando do Estado e eliminou as instituições civis.",
          "A partir de uma revolução popular que transferiu imediatamente o poder político para o Partido Nazista e extinguiu os mecanismos institucionais existentes.",
          "De forma gradual, combinando a chegada de Hitler ao governo por vias institucionais com medidas de exceção, repressão política e concentração de poderes.",
          "Depois da adoção das leis raciais e da Noite dos Cristais, acontecimentos que criaram as condições necessárias para a posterior nomeação de Hitler como chanceler.",
          "Por meio de um acordo entre nazistas e comunistas, que permitiu a formação de uma maioria parlamentar favorável à concentração de poderes no Executivo.",
        ],
        correta: 2,
      },
      {
        // Q16 — resposta: A
        texto:
          "Mais do que uma perseguição pontual, o extermínio promovido pelo regime nazista envolveu um aparato burocrático e industrial voltado à eliminação sistemática de judeus e de outros grupos considerados indesejáveis.",
        pergunta:
          "Sobre o processo conhecido como Solução Final, é correto afirmar que:",
        alternativas: [
          "Correspondeu à organização sistemática do extermínio de judeus europeus, envolvendo deportações, assassinatos em massa e campos destinados ao extermínio.",
          "Representou principalmente uma política de segregação adotada antes da guerra, sem relação direta com os assassinatos em massa ocorridos nos territórios ocupados.",
          "Atingiu essencialmente judeus residentes na Alemanha, enquanto as populações judaicas dos territórios ocupados permaneceram fora das políticas de extermínio.",
          "Foi interrompida após a derrota alemã em Stalingrado, quando o regime passou a concentrar seus esforços exclusivamente nas operações militares.",
          "Desenvolveu-se de maneira descentralizada, pois o governo nazista não estabeleceu mecanismos de coordenação entre suas diferentes instituições.",
        ],
        correta: 0,
      },
    ],

    /* ---- DIFÍCEIS (30 pontos) ---- */
    dificeis: [
      {
        // Q18 — resposta: C
        texto:
          "A Guerra Civil Espanhola é frequentemente descrita por historiadores como um “ensaio geral” para a Segunda Guerra Mundial, dado o envolvimento de potências que voltariam a se enfrentar poucos anos depois.",
        pergunta:
          "Essa caracterização se sustenta, entre outros fatores, no fato de que:",
        alternativas: [
          "Reino Unido e França participaram diretamente da guerra ao lado da Frente Popular, formando com a União Soviética um bloco militar que já reproduzia exatamente a configuração dos Aliados durante a Segunda Guerra Mundial.",
          "A Guerra Civil Espanhola permaneceu essencialmente como um conflito interno, e sua relação com a Segunda Guerra Mundial decorre apenas da proximidade temporal entre o fim da guerra espanhola e o início do conflito europeu.",
          "A participação de Alemanha, Itália e União Soviética vinculou o conflito espanhol às disputas ideológicas e militares do período, antecipando experiências de combate e confrontos entre potências que reapareceriam na Segunda Guerra, embora as alianças posteriores não fossem idênticas.",
          "A vitória da Frente Popular levou à implantação de um governo alinhado à União Soviética, impedindo o estabelecimento de uma ditadura de Francisco Franco e alterando o equilíbrio político europeu antes de 1939.",
          "O apoio recebido por Franco da Alemanha e da Itália levou a Espanha a entrar formalmente na Segunda Guerra Mundial ao lado do Eixo em 1939, como forma de retribuir a ajuda recebida durante a guerra civil.",
        ],
        correta: 2,
      },
    ],
  },

  /* ======================================================================
   * ASSUNTO 3 — SEGUNDA GUERRA MUNDIAL
   * ==================================================================== */
  assunto3: {
    nome: "Segunda Guerra Mundial",

    /* ---- FÁCEIS (10 pontos) ---- */
    faceis: [
      {
        // Q11 — resposta: A
        texto:
          "Desde os anos 1930, o Japão avançava sobre a China e ampliava seu domínio pelo Pacífico. Em dezembro de 1941, aviões japoneses atacaram de surpresa a base naval norte-americana de Pearl Harbor.",
        pergunta: "O ataque a Pearl Harbor deve ser compreendido como:",
        alternativas: [
          "Um episódio da expansão japonesa que contribuiu para a entrada dos Estados Unidos na guerra.",
          "O início da participação japonesa no conflito.",
          "Uma reação japonesa à Operação Barbarossa.",
          "Um ataque que provocou a rendição imediata do Japão.",
          "Uma ação isolada e sem relação com a expansão japonesa anterior.",
        ],
        correta: 0,
      },
      {
        // Q12 — resposta: D
        texto:
          "Em maio de 1945, a Alemanha nazista já havia sido derrotada. Em agosto, os Estados Unidos lançaram bombas atômicas sobre Hiroshima e Nagasaki.",
        pergunta:
          "No contexto do encerramento da Segunda Guerra Mundial, esses bombardeios:",
        alternativas: [
          "Aconteceram antes da derrota alemã.",
          "Encerraram a guerra na Europa.",
          "Dividiram o Japão entre Estados Unidos e União Soviética.",
          "Ocorreram depois da derrota alemã e antes da rendição japonesa, formalizada em setembro de 1945.",
          "Foram realizados após a rendição formal do Japão.",
        ],
        correta: 3,
      },
    ],

    /* ---- MÉDIAS (20 pontos) ---- */
    medias: [
      {
        // Q14 — resposta: A
        texto:
          "Em setembro de 1938, reuniram-se em Munique representantes de Alemanha, Itália, França e Reino Unido para decidir o destino da região dos Sudetos, na Tchecoslováquia. A decisão tomada ficou associada à política de apaziguamento.",
        pergunta: "Sobre a Conferência de Munique, é correto afirmar que:",
        alternativas: [
          "As potências ocidentais buscaram preservar a paz por meio da negociação, aceitando a incorporação dos Sudetos pela Alemanha como forma de evitar um conflito imediato.",
          "A conferência estabeleceu uma aliança entre Alemanha, França e Reino Unido destinada a conter a expansão soviética no Leste Europeu.",
          "O acordo obrigou Hitler a abandonar novas reivindicações territoriais e garantiu a integridade da Tchecoslováquia diante da Alemanha.",
          "A União Soviética participou diretamente das negociações e condicionou a aceitação dos Sudetos à formação de uma frente militar contra Hitler.",
          "A reunião ocorreu depois da invasão alemã da Polônia e representou a última tentativa das potências europeias de encerrar a guerra já iniciada.",
        ],
        correta: 0,
      },
      {
        // Q15 — resposta: B
        texto:
          "Em 1941, rompendo o pacto com a União Soviética, Hitler lançou a Operação Barbarossa, na expectativa de uma vitória rápida. A resistência soviética prolongou o conflito, decidido na Batalha de Stalingrado (1942-1943).",
        pergunta:
          "Sobre o desdobramento da campanha alemã contra a URSS, é correto afirmar que:",
        alternativas: [
          "A Alemanha conseguiu avançar de acordo com seus principais objetivos, mas perdeu Stalingrado em razão de dificuldades logísticas que tiveram pouca influência sobre o andamento geral da guerra.",
          "A resistência soviética impediu a vitória rápida esperada pelos alemães, e a derrota em Stalingrado contribuiu para uma mudança significativa na dinâmica do front oriental.",
          "A invasão da União Soviética foi consequência direta do Pacto Molotov-Ribbentrop, que previa a divisão definitiva de todo o território soviético entre os dois países.",
          "A derrota alemã em Stalingrado provocou a rendição de Hitler em 1943 e encerrou as principais operações militares na Europa.",
          "O avanço soviético contra as forças alemãs começou somente depois do desembarque aliado na Normandia, quando o Exército Vermelho passou a atuar de forma predominantemente ofensiva.",
        ],
        correta: 1,
      },
    ],

    /* ---- DIFÍCEIS (30 pontos) ---- */
    dificeis: [
      {
        // Q17 — resposta: D
        texto:
          "Entre a invasão japonesa da Manchúria e o início da Segunda Guerra, uma sequência de ações expansionistas testou a Liga das Nações, sem que a organização conseguisse impor sanções eficazes.",
        pergunta:
          "Assinale a alternativa que relaciona corretamente um evento a seu contexto ou consequência:",
        alternativas: [
          "A ocupação japonesa da Manchúria provocou uma resposta militar efetiva da Liga das Nações, que conseguiu deter a expansão japonesa e, posteriormente, impediu a invasão italiana da Etiópia.",
          "A remilitarização da Renânia e o Anschluss provocaram intervenção militar imediata da França e do Reino Unido, que impediram novas conquistas alemãs e obrigaram Hitler a abandonar suas reivindicações territoriais.",
          "A Conferência de Munique foi realizada antes do Anschluss e estabeleceu a anexação dos Sudetos como compensação internacional pela incorporação da Áustria ao território alemão.",
          "O Pacto Molotov-Ribbentrop, firmado pouco antes da invasão da Polônia, reduziu o risco de um confronto imediato entre Alemanha e União Soviética; em seguida, a invasão polonesa levou França e Reino Unido a declarar guerra à Alemanha.",
          "A invasão italiana da Etiópia ocorreu apenas depois da formação completa do Eixo Roma-Berlim-Tóquio, cuja existência garantiu à Itália proteção internacional contra as possíveis medidas da Liga das Nações.",
        ],
        correta: 3,
      },
    ],
  },
};
