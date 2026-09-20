export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'Estética' | 'Ortodontia' | 'Reabilitação' | 'Prevenção & Geral';
  image: string;
  iconName: string;
  benefits: string[];
  steps: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  duration: string;
  anesthesia: string;
  recovery: string;
}

export interface DentistItem {
  id: string;
  name: string;
  cro: string;
  specialty: string;
  bio: string;
  education: string[];
  image: string;
  daysAvailable: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  roleOrAge: string;
  treatment: string;
  quote: string;
  rating: number;
  image: string;
  verified: boolean;
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  image: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  tags: string[];
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  dentist?: string;
  preferredDate: string;
  period: 'manha' | 'tarde' | 'noite';
  message?: string;
  lgpdConsent: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  lgpdConsent: boolean;
}
