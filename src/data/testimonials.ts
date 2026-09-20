import { TestimonialItem } from '../types';

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Camila Ferreira',
    roleOrAge: '31 anos · Arquiteta',
    treatment: 'Lentes de Contato Dental',
    quote: 'Eu escondia o sorriso em fotos por causa de dentes manchados e desiguais. A equipe da Sorriso Perfeito fez um mock-up que me permitiu testar o resultado antes de mexer em qualquer dente. O resultado ficou incrivelmente sutil e natural. Transformou minha autoconfiança no trabalho!',
    rating: 5,
    image: '/images/patient-01.jpg',
    verified: true
  },
  {
    id: 'test-2',
    name: 'Rodrigo Santoro',
    roleOrAge: '46 anos · Diretor Comercial',
    treatment: 'Implante Dentário com Cirurgia Guiada',
    quote: 'Tinha um pavor histórico de cirurgias de dentista. Com a cirurgia guiada e a sedação consciente do Dr. Rafael, não senti absolutamente nada! No dia seguinte já estava trabalhando sem dor nem inchaço. A coroa de zircônia parece feita pela própria natureza.',
    rating: 5,
    image: '/images/patient-02.jpg',
    verified: true
  },
  {
    id: 'test-3',
    name: 'Beatriz Lima',
    roleOrAge: '17 anos · Estudante',
    treatment: 'Alinhadores Invisíveis (Invisalign)',
    quote: 'Não queria colocar aparelho de metal tradicional no ensino médio. Com os alinhadores transparentes da Dra. Ana Carolina, ninguém na escola percebia que eu estava em tratamento. Em apenas 9 meses meus dentes ficaram retinhos e sem dor.',
    rating: 5,
    image: '/images/patient-03.jpg',
    verified: true
  },
  {
    id: 'test-4',
    name: 'Sebastião Nogueira',
    roleOrAge: '67 anos · Engenheiro Aposentado',
    treatment: 'Prótese Protocolo Fixa sobre Implantes',
    quote: 'Passei mais de uma década usando dentadura móvel que machucava a gengiva e limitava minha alimentação. Fazer o protocolo fixo na Sorriso Perfeito foi a melhor decisão da minha vida. Voltei a comer churrasco e maçã como na minha juventude!',
    rating: 5,
    image: '/images/patient-04.jpg',
    verified: true
  },
  {
    id: 'test-5',
    name: 'Juliana e Miguel (Mãe e Filho)',
    roleOrAge: '33 anos e 5 anos',
    treatment: 'Odontopediatria e Prevenção Familiar',
    quote: 'O Miguel chorava só de passar em frente a clínicas antigas. Na Sorriso Perfeito, a Dra. Juliana colocou desenhos com óculos 3D e fez brincadeiras que o deixaram fascinado. Agora ele mesmo me pede para ir ao dentista! A clínica inteira é acolhedora.',
    rating: 5,
    image: '/images/patient-05.jpg',
    verified: true
  },
  {
    id: 'test-6',
    name: 'Mariana Chen',
    roleOrAge: '29 anos · Especialista de Marketing',
    treatment: 'Clareamento Dental a Laser',
    quote: 'Fiz o clareamento combinado no consultório e em casa antes do meu casamento. Meus dentes clarearam 7 tons e o melhor: zero daquela pontada de sensibilidade com água gelada que tive em experiências anteriores em outros lugares. Nota 10!',
    rating: 5,
    image: '/images/patient-06.jpg',
    verified: true
  }
];

export interface BeforeAfterCase {
  id: string;
  title: string;
  treatment: string;
  description: string;
  image: string;
  duration: string;
  dentist: string;
}

export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: 'case-1',
    title: 'Transformação do Esmalte com Clareamento Fotônico',
    treatment: 'Clareamento Dental a Laser + Caseiro',
    description: 'Paciente jovem apresentando pigmentação profunda por consumo diário de café e chás escuros. Conquista de 8 tons na escala vita sem sensibilidade.',
    image: '/images/before-after-01.jpg',
    duration: '2 semanas',
    dentist: 'Dr. Lucas Almeida'
  },
  {
    id: 'case-2',
    title: 'Harmonização do Sorriso com Lentes e Facetas',
    treatment: 'Facetas de Porcelana Ultrafinas',
    description: 'Correção de microdontia lateral, fechamento de diastema central e reconstrução de bordas incisais fraturadas com cerâmica de alta resistência.',
    image: '/images/before-after-02.jpg',
    duration: '3 consultas',
    dentist: 'Dr. Lucas Almeida'
  },
  {
    id: 'case-3',
    title: 'Alinhamento Biomecânico de Alta Complexidade',
    treatment: 'Alinhadores Invisíveis Transparentes',
    description: 'Resolução completa de apinhamento anterior severo e mordida cruzada unilateral sem necessidade de extrações dentárias permanentes.',
    image: '/images/before-after-03.jpg',
    duration: '11 meses',
    dentist: 'Dra. Ana Carolina Silva'
  }
];
