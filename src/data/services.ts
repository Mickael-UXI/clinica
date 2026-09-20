import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'limpeza-e-profilaxia',
    slug: 'limpeza-e-profilaxia',
    title: 'Limpeza e Profilaxia',
    shortDescription: 'Remoção de placa bacteriana, tártaro e manchas superficiais com ultrassom e jato de bicarbonato.',
    fullDescription: 'A profilaxia dental profissional é a base para a manutenção da saúde bucal ao longo da vida. Na Sorriso Perfeito, utilizamos aparelhos de ultrassom de última geração associados a jatos suaves de bicarbonato e polimento coronário. O procedimento elimina biofilme, tártaro sub e supragengival e pigmentações de café, chá e tabaco, prevenindo cáries, gengivite e mau hálito.',
    category: 'Prevenção & Geral',
    image: '/images/service-limpeza.jpg',
    iconName: 'Sparkles',
    duration: '45 a 60 minutos',
    anesthesia: 'Não necessária (procedimento indolor)',
    recovery: 'Imediata, sem restrições',
    benefits: [
      'Eliminação completa do tártaro e cálculo dental',
      'Prevenção ativa contra periodontite e cáries ocultas',
      'Remoção de manchas extrínsecas e clareamento do tom natural',
      'Sensação prolongada de frescor e dentes lisos',
      'Aplicação tópica de flúor bioativo fortalecedor'
    ],
    steps: [
      { step: 1, title: 'Avaliação Clínica e Intraoral', description: 'Inspeção minuciosa com câmera intraoral HD para mapear pontos de acúmulo de biofilme e saúde gengival.' },
      { step: 2, title: 'Destartarização Ultrassônica', description: 'Vibrações micrométricas em água desprendem o tártaro sem agredir o esmalte dentário.' },
      { step: 3, title: 'Jato de Bicarbonato e Polimento', description: 'Remoção de manchas finas com pó micronizado e polimento com pasta profilática profilada.' },
      { step: 4, title: 'Fluorterapia e Instrução de Higiene', description: 'Aplicação de gel protetor de flúor e orientação personalizada de escovação e uso de fio dental.' }
    ],
    faqs: [
      { question: 'Com qual frequência devo realizar a limpeza dental?', answer: 'O recomendado pela Associação Brasileira de Odontologia é realizar a cada 6 meses. Para pacientes com predisposição a cálculo ou doença periodontal, o intervalo pode ser de 3 a 4 meses.' },
      { question: 'A limpeza com ultrassom desgasta o esmalte dos dentes?', answer: 'Não. O ultrassom apenas fragmenta os depósitos minerais de tártaro através de vibração mecânica e fluxo de água. O esmalte dental permanece 100% intacto.' },
      { question: 'Dói fazer profilaxia dental?', answer: 'O procedimento é indolor para a imensa maioria dos pacientes. Em casos de recessão gengival com sensibilidade aguda, aplicamos um gel anestésico tópico para total conforto.' }
    ]
  },
  {
    id: 'clareamento-dental',
    slug: 'clareamento-dental',
    title: 'Clareamento Dental',
    shortDescription: 'Tecnologia a laser e molduras caseiras personalizadas para um sorriso até 8 tons mais branco.',
    fullDescription: 'O clareamento dental da Sorriso Perfeito combina a velocidade e precisão do laser de consultório com a estabilidade do protocolo supervisionado em casa. Utilizamos géis clareadores com desensibilizantes nanotecnológicos que atuam quebrando as moléculas de pigmento profundamente impregnadas nos túbulos dentinários, garantindo um resultado natural, brilhante e sem sensibilidade incômoda.',
    category: 'Estética',
    image: '/images/service-clareamento.jpg',
    iconName: 'Sun',
    duration: '2 sessões de 60 min (consultório) ou 14 dias (caseiro)',
    anesthesia: 'Não necessária',
    recovery: 'Evitar alimentos com corantes intensos por 48 horas',
    benefits: [
      'Clareamento de até 8 tons na escala vita',
      'Fórmula avançada com nitrato de potássio para zero dor',
      'Resultados visíveis logo após a primeira sessão',
      'Acompanhamento fotográfico digital antes e depois',
      'Durabilidade de 1 a 3 anos com manutenção correta'
    ],
    steps: [
      { step: 1, title: 'Mapeamento de Cor e Polimento', description: 'Registro da cor inicial na escala Vita 3D Master e profilaxia prévia para preparar o esmalte.' },
      { step: 2, title: 'Proteção Gengival Barreira', description: 'Aplicação de barreira fotoativada isolando 100% dos tecidos moles para segurança absoluta.' },
      { step: 3, title: 'Aplicação do Gel e Ativação Laser', description: 'Ciclos de gel de peróxido com luz fotoativadora fria que potencializa a liberação de oxigênio.' },
      { step: 4, title: 'Remineralização e Kit de Manutenção', description: 'Aplicação de verniz remineralizante e entrega das moldeiras de silicone ultrafinas para retoques.' }
    ],
    faqs: [
      { question: 'O clareamento enfraquece os dentes?', answer: 'Mito. O produto age apenas na pigmentação interna da dentina sem desmineralizar a estrutura de esmalte. Estudos científicos globais comprovam sua total segurança biológica.' },
      { question: 'Quanto tempo dura o efeito do clareamento?', answer: 'Em média de 18 a 36 meses. Pacientes que moderam café, vinho tinto e não fumam mantêm os dentes claros por muito mais tempo, podendo fazer reforço anual.' },
      { question: 'Quem tem restaurações pode fazer clareamento?', answer: 'Sim, porém o gel não altera a cor de resinas ou porcelanas existentes. Indicamos clarear primeiro os dentes naturais e depois substituir as restaurações antigas na nova tonalidade.' }
    ]
  },
  {
    id: 'implantes-dentarios',
    slug: 'implantes-dentarios',
    title: 'Implantes Dentários',
    shortDescription: 'Substituição definitiva de dentes perdidos com parafusos de titânio biocompatível e coroas de zircônia.',
    fullDescription: 'Recupere a segurança para mastigar, falar e sorrir com os implantes dentários guiados digitalmente na Sorriso Perfeito. Substituímos a raiz do dente por pinos de titânio suíço ou nacional de máxima pureza, que se integram perfeitamente ao osso (osseointegração). Em cima do pino, instalamos coroas cerâmicas feitas em impressora 3D com formato, transparência e cor idênticos aos seus dentes naturais.',
    category: 'Reabilitação',
    image: '/images/service-implantes.jpg',
    iconName: 'ShieldCheck',
    duration: 'Cirurgia guiada em cerca de 40 min por dente',
    anesthesia: 'Anestesia local computadorizada e sedação consciente',
    recovery: '2 a 3 dias de repouso relativo',
    benefits: [
      'Preservação da estrutura óssea facial e jovialidade',
      'Força mastigatória idêntica à de dentes naturais',
      'Planejamento digital com tomografia cone-beam 3D',
      'Não há necessidade de desgastar dentes vizinhos',
      'Solução permanente com taxa de sucesso superior a 98%'
    ],
    steps: [
      { step: 1, title: 'Tomografia 3D e Planejamento Virtual', description: 'Escaneamento do arco e tomografia computadorizada para planejar a posição micrométrica do pino.' },
      { step: 2, title: 'Cirurgia Guiada sem Cortes Excessivos', description: 'Instalação do pino com guia cirúrgico prototipado, minimizando inchaço e dor pós-operatória.' },
      { step: 3, title: 'Osseointegração Monitorada', description: 'Período de cicatrização óssea enquanto o paciente utiliza prótese provisória estética.' },
      { step: 4, title: 'Instalação da Coroa Definitiva em Zircônia', description: 'Aparafusamento da coroa personalizada, com ajuste de oclusão milimétrico.' }
    ],
    faqs: [
      { question: 'Existe risco de rejeição do implante?', answer: 'O titânio é 100% biocompatível, ou seja, o organismo humano não cria reação alérgica ou rejeição. O que pode ocorrer raramente é falha de osseointegração por tabagismo ou infecção, facilmente contornada.' },
      { question: 'Quem tem pouco osso pode fazer implante?', answer: 'Sim. Hoje realizamos enxertos ósseos com biomateriais modernos ou técnicas de implantes inclinados (All-on-4) que viabilizam o procedimento para praticamente qualquer paciente.' },
      { question: 'A cirurgia de implante dói?', answer: 'Com as modernas técnicas de anestesia local associadas à sedação consciente com óxido nitroso, o paciente não sente dor alguma durante o procedimento.' }
    ]
  },
  {
    id: 'ortodontia-tradicional',
    slug: 'ortodontia-tradicional',
    title: 'Ortodontia Tradicional',
    shortDescription: 'Aparelhos metálicos e estéticos de safira ou porcelana para correção eficaz de mordida e alinhamento.',
    fullDescription: 'A ortodontia convencional evoluiu muito em conforto e estética. Na Sorriso Perfeito, oferecemos bráquetes modernos autoligados metálicos ou peças translúcidas de cristal de safira e porcelana pura. Corrigimos apinhamento, mordida cruzada, diastemas e sobremordida com menor atrito nos fios, reduzindo o tempo de tratamento e a frequência das consultas de manutenção.',
    category: 'Ortodontia',
    image: '/images/service-ortodontia.jpg',
    iconName: 'Smile',
    duration: 'Tratamentos de 12 a 24 meses',
    anesthesia: 'Não aplicável (sem cortes)',
    recovery: 'Adaptação nos primeiros 3 a 5 dias',
    benefits: [
      'Alinhamento biomecânico de máxima precisão',
      'Opção de bráquetes de safira quase invisíveis no dente',
      'Tecnologia autoligada que reduz atrito e desconforto',
      'Melhora mastigatória e alívio da articulação temporomandibular',
      'Plano de pagamento acessível com parcelas fixas'
    ],
    steps: [
      { step: 1, title: 'Documentação Ortodôntica Completa', description: 'Fotos faciais, radiografias panorâmicas, telerradiografia e escaneamento digital 3D.' },
      { step: 2, title: 'Planejamento Cefalométrico Digital', description: 'Definição do plano de movimentação dos dentes e cronograma estimado de trocas de arcos.' },
      { step: 3, title: 'Instalação com Colagem Indireta', description: 'Posicionamento milimétrico dos bráquetes com guias de precisão sem desconforto na boca.' },
      { step: 4, title: 'Consultas Mensais de Ativação e Contenção', description: 'Ajustes periódicos e instalação de placas de contenção ao final para manter o resultado estável.' }
    ],
    faqs: [
      { question: 'Qual a diferença entre o aparelho metálico e o de safira?', answer: 'A funcionalidade mecânica é a mesma. O diferencial do aparelho de safira é a transparência estética cristalina: ele não mancha e fica extremamente discreto no sorriso.' },
      { question: 'O aparelho autoligado realmente é mais rápido?', answer: 'Sim. Por não utilizar borrachinhas convencionais, o fio desliza livremente pelo bráquete, gerando forças biológicas contínuas e leves que aceleram o movimento em até 30%.' },
      { question: 'Existe idade limite para usar aparelho?', answer: 'Não há limite de idade. Atendemos desde crianças de 7 anos até adultos na melhor idade com dentes e gengivas saudáveis.' }
    ]
  },
  {
    id: 'alinhadores-invisiveis',
    slug: 'alinhadores-invisiveis',
    title: 'Alinhadores Invisíveis',
    shortDescription: 'Placas transparentes removíveis (Invisalign Doctor Diamond) para alinhar seus dentes com máxima discrição.',
    fullDescription: 'Os alinhadores transparentes são a revolução da ortodontia contemporânea. Desenvolvidos a partir de um escaneamento intraoral em 3D de altíssima definição (iTero), cada par de placas é produzido sob medida em polímero inteligente SmartTrack. O paciente troca os alinhadores em casa a cada 7 a 14 dias, removendo-os para comer e escovar os dentes, sem nenhum fio metálico ou restrição alimentar.',
    category: 'Ortodontia',
    image: '/images/service-invisalign.jpg',
    iconName: 'Sparkle',
    duration: 'Tratamentos de 6 a 18 meses',
    anesthesia: 'Não aplicável',
    recovery: 'Zero restrições cotidianas',
    benefits: [
      'Removível para comer e fazer a higiene bucal perfeita',
      'Praticamente imperceptível mesmo a curta distância',
      'Simulação do sorriso final antes mesmo de iniciar (ClinCheck)',
      'Consultas presenciais mais rápidas e espaçadas',
      'Livre de fios pontiagudos que machucam bochechas e lábios'
    ],
    steps: [
      { step: 1, title: 'Escaneamento Digital 3D', description: 'Digitalização da sua arcada em minutos com o scanner iTero, sem moldes de massinha.' },
      { step: 2, title: 'Simulação Virtual do Tratamento', description: 'Você assiste em vídeo como seus dentes vão se mover semana a semana até a posição ideal.' },
      { step: 3, title: 'Fabricação Robótica sob Medida', description: 'Envio dos arquivos para impressão 3D com polímeros biomédicos de alta elasticidade.' },
      { step: 4, title: 'Acompanhamento e Entrega dos Alinhadores', description: 'Instalação de pequenos attachments discretos e acompanhamento contínuo da evolução.' }
    ],
    faqs: [
      { question: 'Quantas horas por dia devo usar os alinhadores?', answer: 'O tempo recomendado é de 20 a 22 horas diárias, retirando apenas para as refeições e higiene.' },
      { question: 'Os alinhadores funcionam para casos complexos?', answer: 'Sim. Com os recursos modernos de attachments e mecânicas híbridas, conseguimos tratar até 90% dos casos ortodônticos com alinhadores.' },
      { question: 'O alinhador altera a fala?', answer: 'Nos primeiros 2 dias pode haver uma leve adaptação da língua, mas os pacientes voltam a falar com absoluta naturalidade rapidamente.' }
    ]
  },
  {
    id: 'facetas-de-porcelana',
    slug: 'facetas-de-porcelana',
    title: 'Facetas de Porcelana',
    shortDescription: 'Lâminas cerâmicas de alta resistência para corrigir cor, formato, proporção e fechamento de espaços.',
    fullDescription: 'As facetas cerâmicas devolvem a harmonia do sorriso através de lâminas esculpidas individualmente em cerâmica feldspática ou dissilicato de lítio (E-max). São indicadas para dentes com manchas severas por tetraciclina, desgaste por bruxismo, fraturas antigas ou alterações congênitas de anatomia. O resultado é um sorriso uniforme com o brilho e a translucidez do esmalte jovem.',
    category: 'Estética',
    image: '/images/service-facetas.jpg',
    iconName: 'Gem',
    duration: '3 consultas planejadas com mock-up prévio',
    anesthesia: 'Anestesia local sem dor',
    recovery: 'Sensibilidade leve transitória por 24 a 48h',
    benefits: [
      'Estabilidade de cor permanente: não amarela com o tempo',
      'Resistência mastigatória comparável ao dente natural',
      'Test-drive estético em boca (Mock-up) antes de qualquer preparo',
      'Correção de dentes tortos leves sem anos de aparelho',
      'Fechamento definitivo de diastemas e restauração de pontas desgastadas'
    ],
    steps: [
      { step: 1, title: 'Planejamento Digital do Sorriso (DSD)', description: 'Fotografia odontológica e análise facial para desenhar dentes proporcionais ao seu rosto.' },
      { step: 2, title: 'Mock-up e Prova do Sorriso', description: 'Aplicação de resina provisória sobre os dentes para você se ver no espelho antes de decidir.' },
      { step: 3, title: 'Preparo Minimamente Invasivo', description: 'Microdesgaste preservador sob microscópio operatório e escaneamento digital.' },
      { step: 4, title: 'Cimentação Adesiva Definitiva', description: 'União química molecular entre a cerâmica e o dente para máxima longevidade.' }
    ],
    faqs: [
      { question: 'Quanto tempo dura uma faceta de porcelana?', answer: 'Com higiene bucal e visitas periódicas, estudos indicam que as facetas duram de 15 a 20 anos ou mais.' },
      { question: 'A faceta pode cair ao comer alimentos duros?', answer: 'A cimentação adesiva moderna integra a porcelana ao esmalte com força extrema. Desde que se evite morder objetos ou unhas, a fixação é totalmente segura.' },
      { question: 'O procedimento machuca ou dói?', answer: 'Não. Utilizamos anestesia computadorizada sem picada perceptível, garantindo relaxamento completo durante as sessões.' }
    ]
  },
  {
    id: 'lentes-de-contato-dental',
    slug: 'lentes-de-contato-dental',
    title: 'Lentes de Contato Dental',
    shortDescription: 'Lâminas cerâmicas ultrafinas (0,2 a 0,3mm) com preservação máxima da estrutura natural dos dentes.',
    fullDescription: 'Diferente das facetas convencionais, as lentes de contato dental são tão finas quanto uma película de contato ocular. Isso permite que, na maioria dos casos, o dente receba apenas um polimento superficial ou microdesgaste na casa dos décimos de milímetro. É a técnica definitiva para quem deseja alinhar bordas, padronizar o tom e ganhar volume com extrema naturalidade.',
    category: 'Estética',
    image: '/images/service-lentes.jpg',
    iconName: 'Eye',
    duration: '2 a 3 consultas',
    anesthesia: 'Geralmente desnecessária ou anestesia tópica leve',
    recovery: 'Imediata',
    benefits: [
      'Preservação de mais de 95% do dente natural original',
      'Espessura ultrafina imperceptível na transição com a gengiva',
      'Brilho natural e translucidez idêntica à de dentes jovens',
      'Não sofre manchamento por alimentos ou café',
      'Biocompatibilidade perfeita com os tecidos gengivais'
    ],
    steps: [
      { step: 1, title: 'Consulta de Visagismo Odontológico', description: 'Estudo do formato dos lábios, curva do sorriso e proporções da face.' },
      { step: 2, title: 'Escaneamento Óptico 3D', description: 'Captura digital colorida dos dentes para usinagem laboratorial robotizada CAD/CAM.' },
      { step: 3, title: 'Usinagem em Cerâmica E-max', description: 'Produção robótica e maquiagem artística em forno especial para efeito perolizado.' },
      { step: 4, title: 'Cimentação Guiada por Cores', description: 'Ajuste fino da tonalidade com cimentos resinosos de última geração e polimento marginal.' }
    ],
    faqs: [
      { question: 'Qual a diferença entre faceta e lente de contato?', answer: 'A principal diferença é a espessura. As lentes possuem entre 0,2 e 0,4mm e demandam desgaste mínimo ou nulo, enquanto as facetas são indicadas para dentes com maior alteração de cor ou desalinhamento.' },
      { question: 'Se eu me arrepender, posso remover a lente de contato?', answer: 'Como há um pequeno condicionamento químico e polimento no esmalte, o tratamento é considerado definitivo. Por isso realizamos o mock-up para você aprovar previamente.' },
      { question: 'Quem tem bruxismo pode colocar lentes?', answer: 'Sim, mas é fundamental a confecção de uma placa miorrelaxante noturna para proteger o investimento de forças excessivas durante o sono.' }
    ]
  },
  {
    id: 'odontopediatria',
    slug: 'odontopediatria',
    title: 'Odontopediatria',
    shortDescription: 'Cuidado especializado, lúdico e afetuoso para bebês, crianças e adolescentes em consultório temático.',
    fullDescription: 'Cuidar dos primeiros dentinhos com carinho define a relação que a criança terá com a odontologia por toda a vida. Nosso consultório de odontopediatria foi projetado para acolher as crianças em um ambiente lúdico, com óculos de realidade virtual, brinquedos educativos e técnicas de manejo psicológico que eliminam o medo do jaleco branco.',
    category: 'Prevenção & Geral',
    image: '/images/service-odontopediatria.jpg',
    iconName: 'HeartHandshake',
    duration: '30 a 45 minutos',
    anesthesia: 'Géis anestésicos com sabores frutados (quando necessário)',
    recovery: 'Imediata com entrega de brinde de coragem',
    benefits: [
      'Ambiente decorado e interativo com telas de desenho animado',
      'Prevenção precoce de cáries com selantes e aplicação de flúor',
      'Diagnóstico de hábitos deletérios (chupeta, sucção de dedo)',
      'Acompanhamento do desenvolvimento das arcadas e troca dentária',
      'Atendimento humanizado sem traumas ou ansiedade'
    ],
    steps: [
      { step: 1, title: 'Acolhimento Lúdico e Apresentação', description: 'A criança brinca com os instrumentos adaptados e ganha confiança no ambiente.' },
      { step: 2, title: 'Exame Clínico Divertido', description: 'Contagem de dentes e inspeção de saúde com espelho interativo de bichinho.' },
      { step: 3, title: 'Profilaxia e Aplicação de Selante', description: 'Limpeza suave com escovinha giratória e proteção dos sulcos dos molares.' },
      { step: 4, title: 'Diploma de Paciente Nota 10', description: 'Reforço positivo para motivar a criança a escovar os dentes em casa todos os dias.' }
    ],
    faqs: [
      { question: 'Quando deve ser a primeira visita do bebê ao dentista?', answer: 'Recomenda-se logo após o nascimento do primeiro dente de leite ou até o primeiro ano de vida, para orientar os pais sobre amamentação e higiene bucal.' },
      { question: 'Dente de leite precisa ser tratado se tiver cárie?', answer: 'Sim! Os dentes de leite guiam a erupção dos dentes permanentes. Infecções na raiz de leite podem manchar ou danificar o germe do dente permanente embaixo.' },
      { question: 'Como lidar com o medo infantil da anestesia?', answer: 'Usamos géis tópicos com sabor de morango ou chiclete e seringas sem agulha visível com fluxo controlado eletronicamente. A criança nem percebe a aplicação.' }
    ]
  },
  {
    id: 'endodontia',
    slug: 'endodontia',
    title: 'Endodontia (Canal)',
    shortDescription: 'Tratamento de canal em sessão única com microscopia operatória e instrumentos rotatórios indolores.',
    fullDescription: 'Esqueça os velhos mitos de dor no tratamento de canal. Na Sorriso Perfeito, a endodontia é realizada sob microscopia óptica operatória e com limas rotatórias de níquel-titânio que limpam e desinfetam o interior dos canais radiculares em tempo recorde, na maioria das vezes em uma única consulta confortável e sem incômodo.',
    category: 'Prevenção & Geral',
    image: '/images/service-endodontia.jpg',
    iconName: 'Activity',
    duration: 'Sessão única de 60 a 90 minutos',
    anesthesia: 'Anestesia local profunda',
    recovery: 'Sensibilidade leve mastigatória controlada com analgésico por 24h',
    benefits: [
      'Eliminação imediata da dor de dente aguda',
      'Salvamento do dente natural, evitando a necessidade de extração',
      'Uso de localizador apical eletrônico para precisão milimétrica',
      'Microscópio clínico com aumento de até 20x para achar canais calcificados',
      'Obturação termoplastificada tridimensional hermética'
    ],
    steps: [
      { step: 1, title: 'Anestesia e Isolamento Absoluto', description: 'Bloqueio total da sensibilidade e uso de lençol de borracha estéril para manter o ambiente livre de saliva.' },
      { step: 2, title: 'Acesso e Descontaminação Rotatória', description: 'Instrumentos flexíveis limpam o nervo inflamado ou necrosado com irrigação ultrassônica ativada.' },
      { step: 3, title: 'Modelagem dos Canais', description: 'Formatação anatômica perfeita dos canais guiada por localizador eletrônico.' },
      { step: 4, title: 'Selamento Hermético e Blindagem', description: 'Preenchimento com guta-percha aquecida e restauração adesiva para proteger a raiz.' }
    ],
    faqs: [
      { question: 'O tratamento de canal dói?', answer: 'Não. Graças aos anestésicos modernos de longa duração e precisão anatômica, você não sente nenhuma dor durante o procedimento.' },
      { question: 'É verdade que o dente tratado fica escuro?', answer: 'Com as técnicas e cimentos biocompatíveis modernos, o escurecimento não ocorre mais. Se o dente já estiver escurecido pelo trauma, realizamos clareamento interno.' },
      { question: 'Dá para fazer o tratamento de canal em uma sessão só?', answer: 'Sim. Em mais de 85% dos casos, nossos especialistas concluem o tratamento completo em um único atendimento.' }
    ]
  },
  {
    id: 'periodontia',
    slug: 'periodontia',
    title: 'Periodontia',
    shortDescription: 'Tratamento e controle de gengivite, periodontite e cirurgias plásticas de gengiva (gengivoplastia).',
    fullDescription: 'A gengiva é a moldura de um sorriso saudável. Nossa equipe de periodontistas trata desde sangramentos e gengivite inicial até casos avançados de periodontite com perda de osso de sustentação. Além do tratamento de saúde, realizamos procedimentos estéticos de gengivoplastia e recobrimento radicular para harmonizar sorrisos com excesso de gengiva.',
    category: 'Prevenção & Geral',
    image: '/images/service-periodontia.jpg',
    iconName: 'ShieldAlert',
    duration: 'Sessões de 50 minutos ou cirurgia de 1h30',
    anesthesia: 'Anestesia local computadorizada',
    recovery: '24 a 48 horas de cuidados suaves',
    benefits: [
      'Fim definitivo do sangramento gengival e mau hálito crônico',
      'Estabilização de dentes com mobilidade por perda óssea',
      'Plástica gengival para correção do sorriso gengival',
      'Enxertos gengivais para cobrir raízes expostas sensíveis',
      'Protocolos antimicrobianos guiados por análise de biofilme'
    ],
    steps: [
      { step: 1, title: 'Sondagem e Mapeamento Periodontal', description: 'Medição da profundidade das bolsas gengivais dente a dente em prontuário digital.' },
      { step: 2, title: 'Raspagem e Alisamento Subgengival', description: 'Descontaminação profunda das raízes com pontas diamantadas finas e ultrassom piezoelétrico.' },
      { step: 3, title: 'Irrigação com Antissépticos e Laser', description: 'Bioestimulação com laser terapêutico para acelerar a regeneração tecidual.' },
      { step: 4, title: 'Terapia Periodontal de Suporte (TPS)', description: 'Retornos periódicos planejados para garantir que a infecção nunca mais retorne.' }
    ],
    faqs: [
      { question: 'Gengiva que sangra na escovação é normal?', answer: 'Nunca é normal. Gengiva que sangra indica processo inflamatório ativo (gengivite). Se não for tratada, evolui para periodontite e perda de dentes.' },
      { question: 'O que é a gengivoplastia estética?', answer: 'É uma microcirurgia que remove o excesso de tecido gengival que cobre a coroa do dente, deixando o sorriso mais proporcional e amplo.' },
      { question: 'A periodontite tem cura?', answer: 'A periodontite é uma condição crônica controlável. Com o tratamento correto e manutenção regular, a perda óssea é estancada e a saúde mantida indefinidamente.' }
    ]
  },
  {
    id: 'proteses-dentarias',
    slug: 'proteses-dentarias',
    title: 'Próteses Dentárias',
    shortDescription: 'Próteses fixas, sobre implantes (protocolo) e removíveis com estética impecável e conforto na mastigação.',
    fullDescription: 'A perda de múltiplos dentes afeta a mastigação, a nutrição e a autoestima. Com as próteses digitais da Sorriso Perfeito, utilizamos zircônia translúcida e cerâmicas alemãs usinadas com perfeição. Desde coroas unitárias até a famosa prótese protocolo All-on-4 (dentes fixos sobre implantes em até 72 horas), recuperamos sua alegria de comer o que quiser.',
    category: 'Reabilitação',
    image: '/images/service-proteses.jpg',
    iconName: 'Wrench',
    duration: 'Planejamento em etapas com mock-up funcional',
    anesthesia: 'Anestesia local durante procedimentos de moldagem/fixação',
    recovery: 'Rápida adaptação com acompanhamento',
    benefits: [
      'Estabilidade mastigatória sem próteses soltas ou machucados',
      'Engenharia digital CAD/CAM para encaixe micrométrico',
      'Cor e translucidez idênticas aos dentes naturais',
      'Devolução da sustentação dos lábios e bochechas',
      'Opções fixas aparafusadas que não cobrem o céu da boca'
    ],
    steps: [
      { step: 1, title: 'Estudo Dinâmico da Oclusão', description: 'Análise dos movimentos mastigatórios e registro de mordida em articulador digital.' },
      { step: 2, title: 'Design Digital Personalizado', description: 'Desenho da prótese em computador respeitando a idade e características estéticas do paciente.' },
      { step: 3, title: 'Prova de Dentes e Teste Fonético', description: 'Verificação em boca de sons como "S" e "F" e ajuste de linha média do sorriso.' },
      { step: 4, title: 'Instalação e Ajuste Oclusal Fino', description: 'Fixação segura e polimento final com orientações completas de higienização de próteses.' }
    ],
    faqs: [
      { question: 'O que é a prótese tipo protocolo?', answer: 'É uma arcada completa de dentes fixada firmemente sobre 4 a 6 implantes. Ela não se move, não precisa de cola e não tem a parte do céu da boca, permitindo sentir o sabor dos alimentos.' },
      { question: 'Quanto tempo leva para me acostumar com a prótese?', answer: 'Em próteses fixas, a adaptação leva de 2 a 5 dias. Em próteses móveis, cerca de 1 a 2 semanas até os músculos orais se acomodarem.' },
      { question: 'Como limpar próteses fixas sobre implantes?', answer: 'Orientamos o uso de escovas interdentais, passa-fio ortodôntico e irrigadores orais pressurizados (Waterpik), além das manutenções periódicas na clínica.' }
    ]
  },
  {
    id: 'cirurgia-oral',
    slug: 'cirurgia-oral',
    title: 'Cirurgia Oral Menor',
    shortDescription: 'Extração segura de dentes do siso inclusos, frenectomias e pequenas intervenções com sedação consciente.',
    fullDescription: 'Nossa sala cirúrgica odontológica segue os mais rigorosos padrões de biossegurança hospitalar. Realizamos extrações de sisos inclusos e impactados com técnicas minimamente invasivas, piezo-cirurgia que não agride tecidos moles e opção de sedação consciente com óxido nitroso para pacientes ansiosos.',
    category: 'Prevenção & Geral',
    image: '/images/service-cirurgia.jpg',
    iconName: 'Crosshair',
    duration: '20 a 45 minutos por procedimento',
    anesthesia: 'Anestesia local potencializada + sedação consciente',
    recovery: '3 a 5 dias com repouso e dieta branda',
    benefits: [
      'Piezo-cirurgia por ultrassom que corta apenas o osso, poupando nervos',
      'Uso de fibrina rica em plaquetas (PRF) do próprio paciente para cicatrizar rápido',
      'Monitorização cardíaca contínua e equipe cirúrgica dedicada',
      'Protocolo medicamentoso preventivo anti-inflamatório sem dor pós-operatória',
      'Ambiente esterilizado com ar filtrado e biossegurança classe hospitalar'
    ],
    steps: [
      { step: 1, title: 'Tomografia Tridimensional Prévia', description: 'Visualização da proximidade das raízes do siso com o nervo alveolar inferior para total segurança.' },
      { step: 2, title: 'Sedação Consciente e Anestesia', description: 'Inalação de gás relaxante e anestesia local computadorizada sem dor.' },
      { step: 3, title: 'Procedimento Minimamente Invasivo', description: 'Odontosecção com pontas ultrassônicas delicadas, preservando o osso marginal.' },
      { step: 4, title: 'Sutura com Fios Estéticos e Laserterapia', description: 'Aplicação imediata de laser vermelho e infravermelho para evitar inchaço e acelerar o pós-operatório.' }
    ],
    faqs: [
      { question: 'Todo mundo precisa tirar os dentes do siso?', answer: 'Não necessariamente. Indicamos a remoção quando não há espaço na arcada, se o siso estiver impactado contra o dente vizinho, com cárie ou provocando inflamações repetidas.' },
      { question: 'Dá para extrair os 4 sisos no mesmo dia?', answer: 'Sim. Em grande parte dos casos é a melhor opção, pois o paciente cumpre apenas um único período de pós-operatório e repouso.' },
      { question: 'Vou ficar muito inchado após a cirurgia?', answer: 'Com a aplicação de laserterapia no pós-cirúrgico imediato e a medicação prévia administrada, o inchaço é mínimo e facilmente contornado com compressas geladas.' }
    ]
  },
  {
    id: 'bruxismo-e-atm',
    slug: 'bruxismo-e-atm',
    title: 'Bruxismo e ATM',
    shortDescription: 'Diagnóstico e tratamento de dores faciais, estalos na mandíbula e placas miorrelaxantes digitais.',
    fullDescription: 'Acorda com dor na mandíbula, sensação de cansaço facial ou dor de cabeça ao lado das têmporas? Você pode sofrer de Disfunção Temporomandibular (DTM) ou bruxismo do sono/vigília. Na Sorriso Perfeito, mapeamos a mordida com placas miorrelaxantes em acrílico usinado CAD/CAM, laserterapia analgésica e aplicação terapêutica de toxina botulínica nos músculos masseter e temporal.',
    category: 'Reabilitação',
    image: '/images/service-bruxismo.jpg',
    iconName: 'Moon',
    duration: 'Consultas de diagnóstico de 45 min + confecção da placa',
    anesthesia: 'Não aplicável',
    recovery: 'Alívio perceptível já nas primeiras semanas',
    benefits: [
      'Alívio de dores de cabeça tensionais e dores cervicais matinais',
      'Proteção contra quebra e desgaste severo dos dentes e restaurações',
      'Placa estabilizadora usinada digitalmente que não deforma nem solta à noite',
      'Melhora significativa da qualidade do sono reparador',
      'Aplicação de toxina botulínica terapêutica para relaxar a musculatura'
    ],
    steps: [
      { step: 1, title: 'Palpação Muscular e Termografia Facial', description: 'Mapeamento de pontos de gatilho de dor nos músculos mastigatórios e articulação.' },
      { step: 2, title: 'Escaneamento das Arcadas', description: 'Registro da mordida em posição de relação cêntrica sem massas desconfortáveis.' },
      { step: 3, title: 'Design Digital da Placa Rígida', description: 'Usinagem em resina acrílica nobre prensada, com guias anteriores de desoclusão precisas.' },
      { step: 4, title: 'Instalação e Ajuste de Contatos com Fita de Articulação', description: 'Balanceamento de forças milimétrico para desprogramar o aperto noturno.' }
    ],
    faqs: [
      { question: 'A placa de silicone macia funciona para bruxismo?', answer: 'Não recomendamos placas de silicone para bruxismo, pois estimulam a mastigação inconsciente (efeito chiclete), piorando a sobrecarga muscular. A placa rígida em acrílico é a padrão ouro.' },
      { question: 'Botox cura o bruxismo?', answer: 'A toxina botulínica não elimina a causa neurológica central do bruxismo, mas diminui a hiperatividade do músculo masseter, cessando as dores e a força destrutiva por 4 a 6 meses.' },
      { question: 'Estalos ao abrir a boca são perigosos?', answer: 'Indicam deslocamento do disco articular. Se houver dor, travamento ou dificuldade para mastigar, é urgente fazer uma avaliação clínica com especialista.' }
    ]
  },
  {
    id: 'harmonizacao-orofacial',
    slug: 'harmonizacao-orofacial',
    title: 'Harmonização Orofacial',
    shortDescription: 'Procedimentos estéticos funcionais para equilibrar traços faciais, contorno labial e rejuvenescimento.',
    fullDescription: 'O sorriso não termina nos dentes: ele se integra a lábios, bochechas e queixo. A harmonização orofacial realizada por dentistas especialistas valoriza a sua beleza natural com segurança anatômica incomparável. Realizamos preenchimento labial com ácido hialurônico, fios de sustentação de PDO, toxina botulínica para linhas de expressão e bioestimuladores de colágeno.',
    category: 'Estética',
    image: '/images/service-harmonizacao.jpg',
    iconName: 'Sparkles',
    duration: '30 a 60 minutos por procedimento',
    anesthesia: 'Bloqueio anestésico intraoral idêntico ao de tratamentos dentários',
    recovery: 'Retorno às atividades no mesmo dia, edema leve por 48h',
    benefits: [
      'Lábios desenhados, hidratados e proporcionais ao seu sorriso',
      'Suavização de rugas dinâmicas como pés de galinha e linhas da testa',
      'Estímulo biológico prolongado de colágeno natural na pele',
      'Aplicação 100% confortável com bloqueio anestésico local intraoral',
      'Produtos homologados pela ANVISA com rastreabilidade de lote'
    ],
    steps: [
      { step: 1, title: 'Análise Facial Cefalométrica Tridimensional', description: 'Estudo dos terços faciais, projeção do queixo e linha labial do sorriso.' },
      { step: 2, title: 'Planejamento e Termo de Consentimento', description: 'Apresentação detalhada da dosagem necessária e alinhamento de expectativas realistas.' },
      { step: 3, title: 'Aplicação com Microcânulas Atraunáticas', description: 'Procedimento delicado que evita hematomas e preserva vasos e nervos faciais.' },
      { step: 4, title: 'Retorno de Revisão em 15 Dias', description: 'Avaliação dos resultados após a completa acomodação do produto e retoques se necessário.' }
    ],
    faqs: [
      { question: 'O dentista é habilitado legalmente para fazer harmonização?', answer: 'Sim. A Resolução 198/2019 do Conselho Federal de Odontologia reconhece a Harmonização Orofacial como especialidade odontológica oficial em todo o Brasil.' },
      { question: 'O preenchimento labial fica com efeito artificial ou "bico de pato"?', answer: 'De forma alguma. Nossa filosofia é a do embelezamento elegante e sutil, respeitando a anatomia dos lábios e proporções áureas de cada rosto.' },
      { question: 'Quanto tempo dura o efeito do ácido hialurônico?', answer: 'O ácido hialurônico é reabsorvido naturalmente pelo organismo em um período de 10 a 18 meses, dependendo da densidade do gel utilizado.' }
    ]
  }
];
