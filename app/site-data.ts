const name = "Silvânia Diniz Sociedade de Advogados";
const address = "Rua Misseno de Pádua, 495, Centro, Lavras - MG, CEP 37200-142";

export const office = {
  name, address,
  brandName: "Silvânia Diniz",
  registration: "OAB/MG 7.814",
  city: "Lavras",
  phoneDisplay: "(35) 99115-4815",
  telephone: "tel:+5535991154815",
  whatsapp: "https://wa.me/5535991154815?text=" + encodeURIComponent(
    "Olá! Gostaria de agendar um atendimento com a equipe da Silvânia Diniz sobre uma questão previdenciária.",
  ),
  instagram: "https://www.instagram.com/advocaciasilvaniadiniz/",
  maps: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(name + ", " + address),
  // Retrato do material de avaliações fornecido pelo cliente.
  rating: "4,9",
  reviewCount: 96,
} as const;
