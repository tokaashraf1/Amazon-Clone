import {
  man1,
  man2,
  man3,
  pay,
  returnable,
  secure,
  woman,
} from "../assets/icons";

const guarantee = [
  { img: pay, p: "Electronic payment Only" },
  { img: returnable, p: "30 days Returnable" },
  { img: secure, p: "Secure transaction" },
];

const rate = [
  { stars: "5 stars", percntage: 0 },
  { stars: "4 stars", percntage: 50 },
  { stars: "3 stars", percntage: 0 },
  { stars: "2 stars", percntage: 50 },
  { stars: "1 stars", percntage: 0 },
];

const testimonials = [
  {
    img: man1,
    name: "Brooke",
    rating: 3,
    title: "Favorite dress",
    deatils: "Reviewed in the United States on 6 August 2024",
    comment:
      "I initially purchased this dress on sale. It turned out to be my favorite dress of this summer. It is extremely versatile and unexpectedly flattering. When I accidentally tore it, I was really upset. My husband told me to buy it again, which I typically wouldn't do. It wasn't on sale and I am so frugal. The dress washes very well and I always get compliments when I wear it.",
  },
  {
    img: man2,
    name: "Elva S. D.",
    rating: 4,
    title: "Lindo!!",
    deatils: "Reviewed in the Mexico on 11 August 2023",
    comment:
      "Bien hecho, bonita tela y bonita caída, fresco y casual.La marca lo dice!!",
  },
  {
    img: man3,
    name: "Patrica",
    rating: 5,
    title: "COMODIDAD",
    deatils: "Reviewed in the United State on 29 June 2023",
    comment: "ES LINDO COMODO Y LIGERO PARA CLIMA CALIDO, ES LA TELA ADECUADA",
  },
  {
    img: woman,
    name: "Iva",
    rating: 2,
    title: "Excellent dress",
    deatils: "Reviewed in the United State on 3 April 2019",
    comment:
      "Lovely dress... I'm 5'1 with pear form body (149 pounds mostly in hips and booty) and it fits perfect.",
  },
];

export { guarantee, rate, testimonials };
