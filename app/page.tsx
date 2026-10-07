"use client";

import Image from "next/image";
import { office } from "./site-data";
import logo from "../public/Logotipo Jurídico Dourado Silvânia Diniz.png";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Sprout,
  Camera,
  HeartHandshake,
  FileText,
  ShieldCheck,
  MessageCircle,
  Phone,
  Star,
  MapPin,
  Menu,
  Scale,
  X,
} from "lucide-react";

const officeName = office.name;
const whatsappUrl = office.whatsapp;
const mapsUrl = office.maps;
const portrait = "/imgi_31_753605420_18327940165256246_2621489893635777785_n.jpg";

const reveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.03 } },
};

const practiceAreas = [
  { number: "01", title: "Aposentadoria urbana", icon: ShieldCheck, lead: "Seu futuro merece uma análise cuidadosa",
    areas: ["Análise do histórico de contribuições", "Organização de documentos", "Orientação e acompanhamento do pedido"],
    summary: "Orientação para compreender seu histórico de contribuições e os caminhos para solicitar sua aposentadoria.",
    details: "Cada trajetória de trabalho é única. Nossa equipe acolhe sua história, analisa os documentos disponíveis e orienta sobre o pedido de aposentadoria urbana, com explicações claras e acompanhamento individualizado." },
  { number: "02", title: "Aposentadoria rural", icon: Sprout, lead: "Atenção à história de quem trabalha no campo",
    areas: ["Compreensão da trajetória de trabalho rural", "Organização dos comprovantes disponíveis", "Orientação sobre o pedido ao INSS"],
    summary: "Escuta e atenção aos documentos que ajudam a contar sua história de trabalho no campo.",
    details: "A aposentadoria rural começa pela compreensão da sua realidade. Conversamos sobre sua trajetória e os documentos disponíveis para orientar os próximos passos, respeitando as particularidades de cada caso." },
  { number: "03", title: "Auxílio-doença", icon: HeartHandshake, lead: "Acolhimento quando a saúde pede cuidado",
    areas: ["Análise da situação apresentada", "Orientação sobre documentos médicos", "Acompanhamento do requerimento"],
    summary: "Atendimento para quem precisa de orientação sobre benefícios por incapacidade e documentos para o INSS.",
    details: "Quando questões de saúde afetam sua rotina de trabalho, uma orientação clara faz diferença. Nossa equipe ouve sua demanda, analisa os documentos e explica as possibilidades de acompanhamento do pedido de auxílio-doença." },
  { number: "04", title: "Pensão por morte", icon: FileText, lead: "Respeito e sensibilidade em um momento delicado",
    areas: ["Escuta da situação familiar", "Análise dos documentos disponíveis", "Orientação e acompanhamento do pedido"],
    summary: "Uma conversa cuidadosa para esclarecer dúvidas sobre pensão e organizar os próximos passos.",
    details: "A perda de um familiar pode trazer dúvidas sobre a pensão por morte. Oferecemos um atendimento acolhedor para compreender sua situação, organizar os documentos e orientar sobre o pedido, sempre com uma análise individual." },
  { number: "05", title: "BPC / LOAS", icon: Scale, lead: "Informação acessível para quem precisa",
    areas: ["Compreensão da situação pessoal e familiar", "Orientação sobre a documentação", "Acompanhamento do pedido assistencial"],
    summary: "Orientação sobre o Benefício de Prestação Continuada, com atenção à realidade de cada pessoa.",
    details: "O atendimento sobre BPC / LOAS oferece espaço para apresentar suas dúvidas e compreender os próximos passos. Nossa equipe analisa as informações e documentos disponíveis antes de orientar o acompanhamento adequado à sua situação." },
  { number: "06", title: "Orientação previdenciária", icon: MessageCircle, lead: "Clareza para tomar decisões conscientes",
    areas: ["Escuta da sua dúvida sobre o INSS", "Análise inicial dos documentos", "Explicações sobre os próximos passos"],
    summary: "Nem toda dúvida sobre o INSS encontra resposta na internet. Converse com uma equipe que conhece sua história.",
    details: "Desde 2005, a Silvânia Diniz Sociedade de Advogados atua em Previdenciário. Na consulta, você apresenta sua dúvida e recebe orientação individualizada sobre documentos, possibilidades de atuação e condições do atendimento." },
];

const reviews = [
  { author: "Lúcia Maria França De Oliveira", quote: "Equipe muito profissional. Atendimento excelente, desde a secretatia ate a Dra Laura. Eficiencia, objetividade e pontualidade em tudo." },
  { author: "Sara Silvaa", quote: "Escritório conta com profissionais excelentes, ambiente super acolhedor e atendimento personalizado. Super Indico." },
  { author: "Reisile Almeida", quote: "A Dra Silvânia Diniz é uma excelente profissional, dedicada e muito competente. Fiquei muito satisfeita com o atendimento." },
  { author: "Lais Regina", quote: "Escritório com um ótimo atendimento humanizado, muito prestativa e dedicada. Super Indico." },
  { author: "Adriana Maria Garcia Bertolucci", quote: "Excelente! Ressalto a competência, educação, cuidado, interesse e profissionalismo. Dra. Ana Luiza é ótima advogada!" },
  { author: "Adriano Anastacio", quote: "Ótimo atendimento explica muito bem todo o processo" },
];

const questions = [
  { title: "Como agendo um atendimento?", answer: "Entre em contato pelo WhatsApp (35) 99115-4815 e conte brevemente sua situação. Você receberá orientação sobre o agendamento, os documentos necessários e as condições do atendimento." },
  { title: "O que devo levar à primeira conversa?", answer: "Informe o benefício ou a dúvida que deseja esclarecer. Mencione documentos de trabalho, contribuições ao INSS e pedidos anteriores, se houver. Nossa equipe orientará quais materiais levar." },
  { title: "Posso apresentar minha dúvida pelo WhatsApp?", answer: "Sim. O WhatsApp é o canal para o primeiro contato com o escritório. Apresente sua dúvida e consulte a disponibilidade e o formato de atendimento adequado ao seu caso." },
  { title: "Onde fica o escritório?", answer: "Na Rua Misseno de Pádua, 495, Centro, em Lavras, Minas Gerais. CEP 37200-142. Oferecemos atendimento presencial ou online, mediante agendamento." },
];

const navigation = [
  ["Início", "#inicio"],
  ["Atuação", "#atuacao"],
  ["A equipe", "#equipe"],
  ["Escritório", "#escritorio"],
  ["Contato", "#contato"],
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return <Image src={logo} alt="Silvânia Diniz Sociedade de Advogados — OAB/MG 7.814" sizes={compact ? "(max-width: 640px) 140px, 155px" : "(max-width: 640px) 240px, 280px"} className={compact ? "h-auto w-[140px] sm:w-[155px]" : "h-auto w-[240px] sm:w-[280px]"} />;
}

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>
        {eyebrow}
      </p>
      <h2
        className={
          light
            ? "font-serif text-4xl leading-[1.06] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-serif text-4xl leading-[1.06] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-white/65"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const dialogRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] = useState<
    (typeof practiceAreas)[number] | null
  >(null);

  useEffect(() => {
    if (!activeArea) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus(), 0);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
      if (event.key === "Tab") {
        const elements = dialogRef.current?.querySelectorAll<HTMLElement>('button, a[href]');
        if (!elements?.length) return;
        const first = elements[0], last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(focusTimer);
      previouslyFocused?.focus();
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-x-clip bg-ivory text-ink">
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>

        <header className="sticky top-0 z-40 border-b border-white/10 bg-night/95 text-white backdrop-blur-xl">
          <div className="mx-auto flex h-[88px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[96px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label={`${officeName} — início`}
              onClick={closeMenu}
              className="shrink-0"
            >
              <BrandMark compact />
            </a>

            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 xl:flex"
            >
              {navigation.map(([label, href]) => (
                <a className="nav-link" href={href} key={href}>
                  {label}
                </a>
              ))}
            </nav>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full border border-brand-300/60 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-100 transition-colors hover:border-brand-200 hover:bg-brand-300 hover:text-night lg:inline-flex"
            >
              <MessageCircle size={15} /> Fale conosco
              <ArrowUpRight size={13} />
            </a>

            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-white/20 xl:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-white/10 bg-night px-6 xl:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {navigation.map(([label, href]) => (
                    <a
                      key={href}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm text-white/75 transition-colors hover:text-brand-200"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-300 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.13em] text-night"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <MessageCircle size={15} /> Conversar no WhatsApp
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <div id="conteudo">
          <section
            id="inicio"
            className="relative isolate scroll-mt-24 overflow-hidden bg-night text-white"
          >
            <div className="pointer-events-none absolute -right-40 top-10 -z-10 size-[35rem] rounded-full bg-brand-800/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-52 bottom-[-17rem] -z-10 size-[36rem] rounded-full bg-brand-700/10 blur-3xl" />
            <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:min-h-[740px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-12 lg:py-20">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={stagger}
                className="relative z-10 max-w-2xl lg:py-6"
              >
                <motion.p variants={reveal} className="eyebrow-light mb-7">
                  PREVIDENCIÁRIO DESDE 2005 · LAVRAS, MG
                </motion.p>
                <motion.h1
                  variants={reveal}
                  className="max-w-[730px] font-serif text-[2.85rem] leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-[4.6rem]"
                >
                  Sua aposentadoria.<br />Nossa dedicação.<br />
                  <em className="font-normal text-brand-300">Compromisso com você.</em>
                </motion.h1>
                <motion.p
                  variants={reveal}
                  className="mt-7 max-w-xl text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8"
                >
                  Aposentadoria urbana e rural, auxílio-doença, pensão e BPC / LOAS.
                  Uma equipe comprometida com pessoas, com orientação clara
                  e atendimento presencial ou online.
                </motion.p>
                <motion.div
                  variants={reveal}
                  className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
                >
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-300 bg-brand-300 px-7 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-night transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-200"
                  >
                    <MessageCircle size={16} /> Agende uma conversa
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href="#atuacao"
                    className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-white/80 transition-colors hover:text-brand-200"
                  >
                    Conheça a atuação
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </motion.div>
                <motion.div
                  variants={reveal}
                  className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/15 pt-6 text-xs text-white/65"
                >
                  <span className="inline-flex items-center gap-2">
                    <MapPin size={15} className="text-brand-300" />
                    Lavras · MG
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Scale size={15} className="text-brand-300" />
                    {office.registration}
                  </span>
                </motion.div>
              </motion.div>

              <motion.figure
                initial={{ opacity: 0, scale: 0.97, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.14,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative mx-auto w-full max-w-[490px] lg:ml-auto lg:mr-2"
              >
                <div className="absolute -inset-3 border border-brand-300/35 sm:-inset-4" />
                <div className="relative aspect-[4/5] overflow-hidden bg-night">
                  <Image
                    src={portrait}
                    alt="Equipe da Silvânia Diniz Sociedade de Advogados, em Lavras"
                    fill
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 42vw"
                    className="object-cover object-top"
                    preload
                  />

                </div>
                <div className="absolute -left-3 bottom-[8%] border border-white/10 bg-night px-4 py-2.5 text-[10px] font-medium tracking-[0.1em] text-white shadow-card sm:-left-9 sm:px-5">
                  ESCUTA. CLAREZA. COMPROMISSO.
                </div>
              </motion.figure>
            </div>
          </section>

          <section
            aria-label="Informações sobre o escritório"
            className="border-b border-ink/10 bg-white"
          >
            <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
              {[
                ["Desde 2005", "atuação em Previdenciário"],
                ["Lavras · MG", "sede do escritório"],
                [`${office.rating} / 5`, "avaliação no Google"],
              ].map(([value, label], index) => (
                <div
                  key={value}
                  className={
                    index > 0
                      ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                      : "flex items-center gap-4 sm:justify-center"
                  }
                >
                  <span className="font-serif text-2xl text-brand-700 sm:text-[1.7rem]">
                    {value}
                  </span>
                  <span className="max-w-[145px] text-[11px] leading-5 text-ink-soft">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section
            id="atuacao"
            className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                variants={reveal}
                className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
              >
                <Heading
                  eyebrow="ÁREAS DE ATUAÇÃO"
                  description="Orientação previdenciária com atenção à sua trajetória de trabalho, à sua família e ao seu momento de vida."
                >
                  Quando o direito encontra<br /><em className="font-normal text-brand-700">a sua história.</em>
                </Heading>
                <span className="hidden h-px w-28 bg-brand-500/60 md:mb-3 md:block" />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger}
                className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-2"
              >
                {practiceAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <motion.button
                      key={area.number}
                      variants={reveal}
                      type="button"
                      onClick={() => setActiveArea(area)}
                      aria-haspopup="dialog"
                      className="group flex min-h-[300px] flex-col border border-ink/10 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/55 hover:shadow-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 sm:p-8"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif text-lg text-brand-700">
                          {area.number}
                        </span>
                        <span className="grid size-11 place-items-center rounded-full border border-brand-700/20 text-brand-800 transition-colors group-hover:border-brand-700 group-hover:bg-brand-700 group-hover:text-white">
                          <Icon size={19} strokeWidth={1.6} />
                        </span>
                      </div>
                      <h3 className="mt-8 font-serif text-[1.65rem] leading-tight text-ink">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-800">
                        {area.lead}
                      </p>
                      <p className="mt-3 flex-1 text-[13px] leading-6 text-ink-soft">
                        {area.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-brand-800">
                        Conheça o atendimento
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </span>
                    </motion.button>
                  );
                })}
              </motion.div>
            </div>
          </section>

          <section id="equipe" className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-12">
              <motion.figure initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal} className="relative mx-auto w-full max-w-[480px]">
                <div className="relative aspect-[4/5] overflow-hidden bg-night">
                  <Image src="/imgi_30_755351983_18328181851256246_900542901525737837_n.jpg" alt="Equipe da Silvânia Diniz: por trás de cada atendimento, pessoas comprometidas com pessoas" fill sizes="(max-width: 640px) 90vw, (max-width: 1024px) 65vw, 40vw" className="object-cover object-top" />
                </div>
                <figcaption className="border-b border-brand-300 py-5">
                  <p className="font-serif text-2xl sm:text-3xl">Silvânia Diniz Sociedade de Advogados</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-brand-700">Sociedade de Advogados · {office.registration}</p>
                </figcaption>
                <span aria-hidden="true" className="absolute -left-3 -top-3 size-20 border-l border-t border-brand-300 sm:-left-5 sm:-top-5" />
              </motion.figure>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal}>
                <Heading eyebrow="NOSSA EQUIPE" description="Por trás de cada caso, existe uma pessoa que precisa ser ouvida.">Experiência para orientar.<br /><em className="font-normal text-brand-700">Humanidade no atendimento.</em></Heading>
                <p className="mt-6 text-[15px] leading-8 text-ink-soft">Desde 2005, a Silvânia Diniz Sociedade de Advogados atua em Previdenciário, em Lavras, Minas Gerais. Nosso compromisso é acolher suas dúvidas e oferecer uma orientação próxima, com atenção aos detalhes da sua história.</p>
                <p className="mt-4 text-[15px] leading-8 text-ink-soft">Por trás de cada atendimento, existe uma equipe comprometida com pessoas. Ouvimos com cuidado, explicamos com clareza e acompanhamos cada etapa com responsabilidade, no atendimento presencial ou online.</p>
                <div className="mt-9 space-y-5 border-t border-ink/10 pt-7">
                  {["Escuta atenta e respeito à sua realidade", "Explicações claras para decisões conscientes", "Dedicação e discrição em cada etapa"].map((item) => <p key={item} className="flex items-start gap-3 text-sm leading-6"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />{item}</p>)}
                </div>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 border-b border-brand-600 pb-2 text-xs font-semibold uppercase tracking-widest text-brand-800">Converse com o escritório <ArrowUpRight size={16} /></a>
              </motion.div>
            </div>
          </section>

          <section
            id="escritorio"
            className="scroll-mt-24 bg-brand-100/40 py-20 sm:py-28 lg:py-32"
          >
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={reveal} className="relative border border-brand-300/30 bg-night px-7 py-10 text-white sm:p-12">
                <p className="eyebrow-light">NOSSA SEDE</p>
                <div className="my-10 flex items-center justify-between border-y border-white/15 py-8">
                  <div><p className="font-serif text-5xl text-brand-200">Lavras.</p><p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-white/60">Minas Gerais</p></div>
                  <Scale size={62} strokeWidth={0.8} className="text-brand-300" aria-hidden="true" />
                </div>
                <address className="not-italic text-sm leading-8 text-white/75">Rua Misseno de Pádua, 495<br />Centro<br />Lavras · MG · CEP 37200-142</address>
                <a href={mapsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 border-b border-brand-300/60 pb-2 text-xs text-brand-200">Como chegar <ArrowUpRight size={15} /></a>
                <span aria-hidden="true" className="absolute right-0 top-0 h-px w-28 bg-brand-300" />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
              >
                <motion.p variants={reveal} className="eyebrow">
                  O ESCRITÓRIO
                </motion.p>
                <motion.h2
                  variants={reveal}
                  className="mt-4 max-w-2xl font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
                >
                  Um ponto de apoio.<br /><em className="font-normal text-brand-700">Perto de você.</em>
                </motion.h2>
                <motion.p
                  variants={reveal}
                  className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
                >
                  Localizado na Rua Misseno de Pádua, no Centro de Lavras,
                  o escritório é um ponto de encontro para conversar
                  sobre suas dúvidas e compreender sua situação com tranquilidade.
                </motion.p>
                <motion.p
                  variants={reveal}
                  className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
                >
                  O primeiro contato pode ser feito pelo WhatsApp.
                  Consulte a disponibilidade, as condições do atendimento
                  e os documentos necessários para seu atendimento presencial ou online.
                </motion.p>
                <motion.a
                  variants={reveal}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-brand-700/40 pb-2 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800 transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  Vamos conversar
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </motion.a>
              </motion.div>
            </div>
          </section>

          <section
            id="avaliacoes"
            className="scroll-mt-24 bg-white py-20 sm:py-24"
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <div className="flex flex-col gap-7 border-b border-ink/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <Heading
                  eyebrow="AVALIAÇÕES PÚBLICAS"
                  description="Acolhimento, atenção e profissionalismo nas palavras de quem compartilhou sua experiência com nossa equipe no Google."
                >
                  A experiência no atendimento.
                </Heading>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex shrink-0 items-center gap-2 self-start border-b border-brand-600/60 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700 sm:self-auto"
                >
                  Ver perfil e avaliações no Google
                  <ArrowUpRight
                    size={14}
                    className="text-brand-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4"><span className="font-serif text-4xl text-ink">{office.rating}</span><span className="flex gap-1 text-brand-700" aria-label={`Nota ${office.rating} de 5`}>{[1,2,3,4,5].map((star) => <Star key={star} size={16} fill="currentColor" />)}</span><p className="text-xs text-ink-soft">{office.reviewCount} avaliações no Google</p></div>
              <p className="mt-3 text-[11px] leading-5 text-ink-soft">Nota e quantidade de avaliações do perfil compartilhado pelo escritório. Consulte o Google para os dados atuais.</p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.12 }}
                variants={stagger}
                className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
              >
                {reviews.map(({ author, quote }) => (
                  <motion.figure
                    key={author}
                    variants={reveal}
                    className="group flex min-h-[220px] flex-col border border-ink/10 bg-brand-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/55 hover:bg-white hover:shadow-card sm:p-7"
                  >
                    <span
                      aria-hidden="true"
                      className="font-serif text-5xl leading-none text-brand-600"
                    >
                      “
                    </span>
                    <blockquote className="mt-3 flex-1 font-serif text-[20px] leading-[1.45] text-ink">
                      {quote}
                    </blockquote>
                    <figcaption className="mt-6 border-t border-ink/10 pt-4">
                      <span className="flex items-center gap-3 text-[11px] font-semibold text-ink">
                        <span className="h-px w-5 bg-brand-500" />
                        {author}
                      </span>
                      <span className="mt-1 block pl-8 text-[9px] font-semibold uppercase tracking-[0.15em] text-ink-soft">
                        Trecho de avaliação pública
                      </span>
                    </figcaption>
                  </motion.figure>
                ))}
              </motion.div>
            </div>
          </section>

          <section id="atendimento" className="scroll-mt-24 border-t border-ink/10 bg-ivory py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={reveal}>
                <Heading eyebrow="COMO FUNCIONA" description="Da primeira mensagem ao acompanhamento, uma conversa clara sobre cada etapa.">Uma conversa.<br /><em className="font-normal text-brand-700">Um caminho bem orientado.</em></Heading>
              </motion.div>
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={stagger} className="mt-12 grid gap-8 sm:grid-cols-3">
                {[
                  ["01", "Conte sua história", "Entre em contato pelo WhatsApp e apresente sua dúvida ou a situação que precisa de atenção."],
                  ["02", "Entenda as possibilidades", "O escritório analisa sua demanda e explica as possibilidades e as condições do atendimento."],
                  ["03", "Acompanhe cada etapa", "Com a atuação definida, você recebe orientação sobre os próximos passos do seu caso."],
                ].map(([number, title, description]) => (
                  <motion.div key={number} variants={reveal} className="border-t border-brand-300 pt-6">
                    <p className="font-serif text-3xl text-brand-700">{number}</p>
                    <h3 className="mt-4 font-serif text-2xl">{title}</h3>
                    <p className="mt-3 text-[13px] leading-7 text-ink-soft">{description}</p>
                  </motion.div>
                ))}
              </motion.div>
              <div className="mt-20 grid gap-9 border-t border-ink/10 pt-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                <Heading eyebrow="DÚVIDAS FREQUENTES">Antes da<br /><em className="font-normal text-brand-700">primeira conversa.</em></Heading>
                <div>
                  {questions.map(({ title, answer }) => (
                    <details key={title} className="faq-item group border-b border-ink/15">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm font-medium">
                        {title}<span aria-hidden="true" className="text-xl text-brand-700 group-open:hidden">+</span><span aria-hidden="true" className="hidden text-xl text-brand-700 group-open:block">−</span>
                      </summary>
                      <p className="max-w-xl pb-6 text-[13px] leading-7 text-ink-soft">{answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="contato"
            className="scroll-mt-24 bg-night py-20 text-white sm:py-28 lg:py-32"
          >
            <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
              <div>
                <Heading
                  eyebrow="CONTATO E LOCALIZAÇÃO"
                  light
                  description="Apresente sua dúvida ao escritório e consulte as condições para uma orientação individual. Atendimento presencial em Lavras ou online, mediante agendamento."
                >
                  Seu próximo passo começa com uma conversa.
                </Heading>
                <div className="mt-9 flex flex-col items-start gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-3 border-b border-brand-300/45 pb-3 text-sm text-brand-100 transition-colors hover:border-brand-200 hover:text-white"
                  >
                    <MessageCircle size={17} /> Conversar pelo WhatsApp
                    <ArrowUpRight size={14} />
                  </a>
                  <a href={office.telephone} className="inline-flex items-center gap-3 py-2 text-sm text-white/80 hover:text-brand-200"><Phone size={17} /> {office.phoneDisplay}</a>
                </div>
              </div>

              <div className="relative overflow-hidden border border-white/15 bg-white/[0.04] p-7 sm:p-10">
                <div className="absolute right-0 top-0 h-px w-32 bg-brand-300" />
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-full border border-brand-300/35 text-brand-200">
                    <MapPin size={21} strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                      Endereço
                    </p>
                    <p className="mt-1 font-serif text-2xl text-white">
                      Lavras · MG
                    </p>
                  </div>
                </div>
                <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-white/70">
                  Rua Misseno de Pádua, 495
                  <br />
                  Centro
                  <br />
                  Lavras · MG · CEP 37200-142
                </address>
                <div className="my-7 h-px bg-white/15" />
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-white/60">
                    Silvânia Diniz Sociedade de Advogados
                  </p>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:border-brand-300 hover:text-brand-200"
                  >
                    Ver localização <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="bg-brand-950 px-5 py-12 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <a
                href="#inicio"
                aria-label={`${officeName} — voltar ao início`}
                className="inline-flex"
              >
                <BrandMark />
              </a>
              <p className="mt-5 text-[10px] uppercase tracking-[0.15em] text-brand-200">{office.registration}</p>
              <p className="mt-4 max-w-xs text-xs leading-6 text-white/55">
                Advocacia com clareza, responsabilidade e atenção à sua história.
                Lavras, Minas Gerais.
              </p>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/65">
                <a className="footer-link" href="#atuacao">
                  Áreas de atuação
                </a>
                <a className="footer-link" href="#equipe">
                  A equipe
                </a>
                <a className="footer-link" href="#escritorio">
                  O escritório
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Avaliações
                </a>
                <a className="footer-link" href="#contato">
                  Contato
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Canais oficiais
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/65">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <MessageCircle size={14} /> WhatsApp
                </a>
                <a href={office.telephone} className="footer-link inline-flex items-center gap-2"><Phone size={14} /> {office.phoneDisplay}</a>
                <a href={office.instagram} target="_blank" rel="noreferrer" className="footer-link inline-flex items-center gap-2"><Camera size={14} /> @advocaciasilvaniadiniz</a>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" /> Lavras · MG
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {officeName}.</p>
            <p>
              Conteúdo informativo. Cada situação deve ser analisada
              individualmente.
            </p>
          </div>
        </footer>

        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-night/75 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-ivory p-7 shadow-card sm:max-w-xl sm:rounded-sm sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:text-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
                >
                  <X size={18} />
                </button>
                <p className="eyebrow">ÁREAS DE ATUAÇÃO</p>
                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-4xl leading-tight text-ink"
                >
                  {activeArea.title}
                </h2>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-800">
                  {activeArea.lead}
                </p>
                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>
                <ul className="mt-6 space-y-3">
                  {activeArea.areas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-3 text-sm text-ink"
                    >
                      <span className="size-1.5 rounded-full bg-brand-700" />
                      {area}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-300 bg-brand-300 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-night transition-colors hover:bg-brand-200"
                >
                  <MessageCircle size={15} /> Conversar sobre meu caso
                  <ArrowUpRight size={14} />
                </a>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
