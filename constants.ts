import { Service, Testimonial, NavItem } from './types';

export const BOOKING_URL = "https://dikidi.net/pt-br/1655904?p=0.pi";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#services' },
  { label: 'Sobre', href: '#about' },
  { label: 'Localização', href: '#location' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Corte Clássico',
    description: 'Um corte atemporal, executado com tesoura e máquina para um acabamento natural e elegante.',
    price: 'R$ 60,00',
    image: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Barba Terapia',
    description: 'Ritual completo com toalha quente, óleos essenciais e massagem facial para relaxamento total.',
    price: 'R$ 50,00',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Corte & Barba (Combo)',
    description: 'A experiência completa de cuidado. Alinhamento perfeito do visual com desconto especial.',
    price: 'R$ 100,00',
    image: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Acabamento & Pezinho',
    description: 'Manutenção rápida dos contornos para manter o visual sempre em dia entre os cortes completos.',
    price: 'R$ 30,00',
    image: 'https://images.unsplash.com/photo-1593702295094-aea22597af65?auto=format&fit=crop&q=80&w=800',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ricardo Silva',
    role: 'Empresário',
    content: 'O ambiente é sensacional, mas o atendimento do Neto é o diferencial. Ele entende exatamente o que a gente quer sem precisar falar muito.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '2',
    name: 'André Costa',
    role: 'Advogado',
    content: 'A barboterapia é uma experiência que todo homem deveria ter. Saio daqui renovado. Profissionalismo impecável.',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
  {
    id: '3',
    name: 'Lucas Martins',
    role: 'Designer',
    content: 'Gosto do estilo clássico e aqui encontrei a técnica perfeita. Nada de exageros, apenas um corte muito bem feito.',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
  },
];