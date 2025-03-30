import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Code2,
  FileType,
  Layers,
  LayoutGrid,
  Paintbrush,
  Server,
} from "lucide-react";

export function StackPage() {
  const technologies = [
    {
      name: "React",
      description:
        "Nossa biblioteca de UI principal para construir interfaces reativas e componentizadas.",
      icon: <Layers className="h-8 w-8 text-blue-500" />,
      docUrl: "https://react.dev",
    },
    {
      name: "TypeScript",
      description:
        "Adiciona tipagem estática ao JavaScript, melhorando a manutenibilidade e a segurança do código.",
      icon: <FileType className="h-8 w-8 text-blue-600" />,
      docUrl: "https://www.typescriptlang.org/docs/",
    },
    {
      name: "TanStack Router",
      description:
        "Router moderno para React com suporte a TypeScript e gerenciamento de estado integrado.",
      icon: <Server className="h-8 w-8 text-black" />,
      docUrl: "https://tanstack.com/router/latest",
    },
    {
      name: "Tailwind CSS",
      description:
        "Framework CSS utilitário para estilização rápida e consistente.",
      icon: <Paintbrush className="h-8 w-8 text-cyan-500" />,
      docUrl: "https://tailwindcss.com/docs",
    },
    {
      name: "Zod",
      description:
        "Biblioteca de validação de esquemas para garantir a integridade dos dados.",
      icon: <Code2 className="h-8 w-8 text-indigo-600" />,
      docUrl: "https://zod.dev",
    },
    {
      name: "TanStack Query",
      description:
        "Biblioteca para gerenciamento de estado de servidor, facilitando o fetching, caching e atualização de dados.",
      icon: <LayoutGrid className="h-8 w-8 text-red-500" />,
      docUrl: "https://tanstack.com/query/latest",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Nossa Stack Frontend
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Esta página apresenta a stack de tecnologias que utilizamos em
            nossos projetos frontend. Cada tecnologia foi selecionada com base
            em suas vantagens e adequação às nossas necessidades.
          </p>
        </header>

        {/* Technology Cards */}
        <section className="mb-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="flex h-full flex-col transition-all hover:shadow-md"
              >
                <CardHeader>
                  <div className="mb-3 flex items-center gap-3">
                    {tech.icon}
                    <CardTitle className="text-xl">{tech.name}</CardTitle>
                  </div>
                  <CardDescription className="text-base text-slate-600">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto">
                  <Button asChild variant="outline" className="w-full">
                    <a
                      href={tech.docUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Documentação Oficial
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Why We Chose This Stack */}
        <section className="mb-16 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Por que Escolhemos Esta Stack?
          </h2>
          <p className="text-lg text-slate-600">
            Priorizamos tecnologias com boa documentação, grande comunidade e
            que nos permitam construir aplicações escaláveis e performáticas.
            Nossa stack foi cuidadosamente selecionada para garantir
            produtividade, manutenibilidade e uma excelente experiência de
            desenvolvimento.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Cada tecnologia em nossa stack resolve problemas específicos e se
            integra perfeitamente com as demais, criando um ecossistema coeso e
            eficiente para o desenvolvimento frontend.
          </p>
        </section>

        {/* How to Contribute */}
        <section className="mb-16 rounded-lg bg-white p-8 shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Como Contribuir?
          </h2>
          <p className="text-lg text-slate-600">
            Se você tiver sugestões de melhorias ou novas tecnologias para
            adicionar à stack, compartilhe suas ideias conosco! Estamos sempre
            abertos a explorar novas ferramentas que possam melhorar nosso fluxo
            de trabalho e a qualidade de nossos projetos.
          </p>
          <div className="mt-6">
            <Button asChild>
              <a href="#feedback">Enviar Sugestão</a>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-16 border-t border-slate-200 pt-8 text-center text-slate-500">
          <p>© 2024 Time de Frontend</p>
          <p className="mt-2">Construído com ❤️ usando React e TanStack</p>
        </footer>
      </div>
    </main>
  );
}
