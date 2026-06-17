import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Activity,
  Award,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  Menu,
  Phone,
  Sparkles,
  Stethoscope,
  Target,
  TrendingUp,
  X,
  Instagram,
  Facebook,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroAsset from "@/assets/maria-luiza-hero.jpg.asset.json";
import aboutAsset from "@/assets/maria-luiza-about.jpg.asset.json";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.121-19.662A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Maria Luiza De La Torre · Fisioterapia Clínica e Esportiva" },
      {
        name: "description",
        content:
          "Atendimento personalizado em fisioterapia ortopédica e esportiva. Avaliação completa, plano sob medida e recuperação acompanhada.",
      },
      { property: "og:title", content: "Dra. Maria Luiza De La Torre · Fisioterapia" },
      {
        property: "og:description",
        content:
          "Avaliação, plano sob medida e recuperação acompanhada. Agende sua consulta via WhatsApp.",
      },
    ],
  }),
  component: Landing,
});

const WHATSAPP_URL =
  "https://wa.me/5521964629111?text=Olá!%20Vi%20a%20sua%20página%20e%20gostaria%20de%20agendar%20uma%20avaliação%20fisioterapêutica.%20Meu%20nome%20é%20[Nome]%20e%20a%20principal%20região%20que%20quero%20tratar%20é%20[Dor/Região].";

const INSTAGRAM_URL =
  "https://www.instagram.com/dramarialuiza.fisio?igsh=MW1mMmNmZm5xZjd3Nw==";

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Conditions />
      <Method />
      <About />
      <Highlights />
      <FAQ />
      <CTABanner />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#conditions", label: "Condições" },
    { href: "#method", label: "Método" },
    { href: "#about", label: "Sobre" },
    { href: "#highlights", label: "Diferenciais" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--gradient-primary)] text-primary-foreground">
            <HeartPulse className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Dra. Maria Luiza <span className="text-muted-foreground">De La Torre</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="whatsapp" size="default">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener">
              <WhatsAppIcon className="h-4 w-4" /> Agendar
            </a>
          </Button>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="grid h-10 w-10 place-items-center rounded-md text-foreground md:hidden"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <Button asChild variant="whatsapp" className="mt-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                <WhatsAppIcon className="h-4 w-4" /> Agendar avaliação
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container-px mx-auto grid max-w-7xl gap-12 py-16 md:grid-cols-2 md:items-center md:gap-8 md:py-24 lg:py-32">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            CREFITO 450593-F
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Movimento sem dor,{" "}
            <span className="text-primary">vida em equilíbrio.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Fisioterapia clínica e esportiva com avaliação detalhada
            e plano de tratamento sob medida — para você voltar ao que ama
            fazer, com confiança.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="hero" size="xl">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                <WhatsAppIcon className="h-5 w-5" /> Agendar avaliação
              </a>
            </Button>
            <Button asChild variant="outlineSoft" size="xl">
              <a href="#method">Como funciona</a>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/70 pt-6">
            {[
              { n: "IBMR", l: "Graduada em Fisioterapia" },
              { n: "Terapia Intensiva", l: "Pós-graduação em andamento" },
              { n: "4.9★", l: "avaliação média" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-semibold text-primary">
                  {s.n}
                </div>
                <div className="text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[var(--gradient-primary)] opacity-10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-[var(--shadow-card-hover)]">
            <img
              src={heroAsset.url}
              alt="Dra. Maria Luiza De La Torre, fisioterapeuta"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-card)] sm:flex sm:items-center sm:gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--whatsapp)] text-white">
              <CheckCircle2 className="h-5 w-5" />
            </span>
            <div>
              <div className="text-sm font-semibold">Resposta em 15 min</div>
              <div className="text-xs text-muted-foreground">
                Atendimento humanizado via WhatsApp
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONDITIONS ---------------- */
function Conditions() {
  const items = [
    {
      icon: Activity,
      title: "Dores na coluna",
      desc: "Lombalgia, hérnia de disco e desconfortos cervicais com técnicas manuais e exercícios terapêuticos.",
    },
    {
      icon: TrendingUp,
      title: "Lesões esportivas",
      desc: "Reabilitação para corredores, atletas e amadores, com retorno seguro à modalidade.",
    },
    {
      icon: Stethoscope,
      title: "Pós-operatório",
      desc: "Acompanhamento ortopédico após cirurgias para recuperação completa de mobilidade.",
    },
    {
      icon: HeartPulse,
      title: "Tendinites e dores articulares",
      desc: "Tratamento de ombros, joelhos e cotovelos com terapia manual e fortalecimento.",
    },
    {
      icon: Award,
      title: "Performance & prevenção",
      desc: "Programas para quem quer treinar mais, com menos risco e máxima eficiência.",
    },
  ];
  return (
    <section id="conditions" className="bg-[var(--surface)] py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Para quem é"
          title="Cuidado especializado para o seu caso"
          subtitle="Cada paciente é único. Conheça as principais condições que tratamos com protocolos baseados em evidência."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- METHOD ---------------- */
function Method() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Avaliação completa",
      desc: "Anamnese detalhada, exame físico e testes funcionais para entender a origem da sua dor.",
    },
    {
      icon: Target,
      title: "Plano sob medida",
      desc: "Protocolo personalizado combinando terapia manual, exercícios e educação em dor.",
    },
    {
      icon: TrendingUp,
      title: "Recuperação acompanhada",
      desc: "Evolução monitorada, ajustes contínuos e alta planejada com prevenção de recidivas.",
    },
  ];
  return (
    <section id="method" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="O método"
          title="Sua jornada de recuperação"
          subtitle="Um caminho claro do diagnóstico ao retorno completo das suas atividades."
        />
        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="relative text-center md:text-left">
              <div className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full border border-primary/20 bg-card shadow-[var(--shadow-card)] md:mx-0">
                <s.icon className="h-7 w-7 text-primary" />
                <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-[var(--gradient-cta)] text-xs font-bold text-accent-foreground shadow-sm">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const creds = [
    "Graduada em Fisioterapia (IBMR)",
    "Pós-graduação em Terapia Intensiva (em andamento)",
  ];
  return (
    <section id="about" className="bg-[var(--surface)] py-20 md:py-28">
      <div className="container-px mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <div className="relative order-2 md:order-1">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[var(--gradient-primary)] opacity-10 blur-2xl" />
          <img
            src={aboutAsset.url}
            alt="Retrato profissional"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-card)]"
          />
        </div>
        <div className="order-1 md:order-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            Sobre a profissional
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Dra. Maria Luiza De La Torre
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Maria Luiza acredita em um atendimento que une ciência, escuta atenta
            e protocolos individualizados. Sua abordagem combina terapia manual
            avançada, exercício terapêutico e educação em saúde para que cada
            paciente entenda — e participe ativamente — da própria recuperação.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {creds.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2 text-sm text-foreground"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button asChild variant="hero" size="lg">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                <WhatsAppIcon className="h-5 w-5" /> Conversar com a Dra. Maria Luiza
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HIGHLIGHTS ---------------- */
function Highlights() {
  const items = [
    {
      title: "Atendimento Individualizado",
      desc: "Cada paciente recebe um plano de tratamento único, desenhado a partir da avaliação física completa e dos objetivos pessoais.",
    },
    {
      title: "Protocolos Baseados em Evidência",
      desc: "Técnicas atualizadas com base na literatura científica atual para garantir resultados consistentes e seguros.",
    },
    {
      title: "Acompanhamento Contínuo",
      desc: "A evolução é monitorada sessão a sessão, com ajustes no plano sempre que necessário para otimizar a recuperação.",
    },
    {
      title: "Alta com Prevenção",
      desc: "O tratamento não termina na melhora dos sintomas. O paciente sai orientado para manter os resultados e evitar recidivas.",
    },
  ];
  return (
    <section id="highlights" className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Por que escolher o atendimento"
          subtitle="Compromissos reais que todo paciente encontra desde o primeiro contato."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const faqs = [
    {
      q: "Como é a primeira consulta?",
      a: "Uma avaliação completa de cerca de 60 minutos, com anamnese, exames físicos e testes funcionais. Você sai com um plano de tratamento personalizado já discutido.",
    },
    {
      q: "Atendem convênios?",
      a: "O atendimento é particular, com emissão de recibo para reembolso pelo plano de saúde, conforme cobertura individual.",
    },
    {
      q: "Quantas sessões serão necessárias?",
      a: "Varia conforme o quadro clínico e os objetivos. Após a avaliação, é apresentada uma estimativa realista de frequência e duração do tratamento.",
    },
    {
      q: "Posso fazer fisioterapia mesmo sem encaminhamento médico?",
      a: "Sim. O fisioterapeuta é profissional de primeiro contato e habilitado para avaliação, diagnóstico funcional e tratamento.",
    },
  ];
  return (
    <section id="faq" className="bg-[var(--surface)] py-20 md:py-28">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Tudo o que você precisa saber"
          subtitle="Não encontrou sua dúvida? Fale diretamente pelo WhatsApp."
          center
        />
        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-xl border border-border bg-card px-5 shadow-[var(--shadow-sm)]"
            >
              <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
function CTABanner() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-px mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-card-hover)] md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                Pronto para o primeiro passo?
              </h2>
              <p className="mt-3 max-w-xl text-base text-muted-foreground">
                Agende sua avaliação e receba um plano personalizado para
                voltar a se mover com confiança.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Button asChild variant="hero" size="xl">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener">
                  <WhatsAppIcon className="h-5 w-5" /> Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--surface)]">
      <div className="container-px mx-auto grid max-w-7xl gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--gradient-primary)] text-primary-foreground">
              <HeartPulse className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Dra. Maria Luiza De La Torre
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Fisioterapia clínica e esportiva com olhar humano e base
            científica.
          </p>
          <div className="mt-5 text-xs text-muted-foreground">
            <span className="font-medium text-foreground">CREFITO</span> 450593-F
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              (21) 96462-9111
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              malusl2001@gmail.com
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold">Siga</h4>
          <div className="mt-4 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Facebook, label: "Facebook" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-px mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Dra. Maria Luiza De La Torre. Todos os direitos reservados.</span>
          <span>Feito com cuidado para acolher você.</span>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[var(--whatsapp)] text-white shadow-[var(--shadow-cta)] transition-all hover:-translate-y-0.5 hover:bg-[var(--whatsapp-hover)] hover:shadow-[var(--shadow-cta-hover)]"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </footer>
  );
}

/* ---------------- SHARED ---------------- */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : "max-w-2xl"}>
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
