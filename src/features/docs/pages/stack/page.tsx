import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  Brain,
  Check,
  Database,
  FileCode,
  Layers,
  Palette,
  Rocket,
  Terminal,
} from "lucide-react";

export function StackPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-background p-8">
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-10"
        onClick={() => navigate({ to: "/" })}
      >
        <ArrowLeft className="size-5" />
      </Button>

      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">
            🧱 Stack Frontend — Acme Inc
          </h1>
          <p className="text-muted-foreground text-lg">
            Esta é a stack oficial usada em nossos projetos frontend. Ela foi
            pensada para ser moderna, escalável e de fácil manutenção.
          </p>
        </div>

        {/* Alert */}
        <Alert>
          <Terminal className="size-4" />
          <AlertTitle>🛠️ Padrão oficial</AlertTitle>
          <AlertDescription>
            Toda nova feature ou projeto deve seguir este setup salvo exceções
            justificadas.
          </AlertDescription>
        </Alert>

        {/* Philosophy Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="size-5" />
              Filosofia
            </CardTitle>
            <CardDescription className="text-lg italic">
              "Organização por feature, flexibilidade por componente."
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>
                Estrutura baseada em <strong>Atomic Design</strong>
              </li>
              <li>
                Pastas separadas por <strong>domínio da aplicação</strong>
              </li>
              <li>
                Componentes genéricos e reutilizáveis vivem no{" "}
                <code>shared/</code> e <code>design-system/</code>
              </li>
              <li>
                Feature-first: cada nova funcionalidade ganha seu próprio
                namespace
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Main Technologies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="size-5" />
              Tecnologias Principais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Framework */}
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <FileCode className="size-4" />
                Framework e build
              </h3>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Vite</Badge>
                <Badge variant="secondary">TypeScript</Badge>
              </div>
            </div>

            {/* Router */}
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Layers className="size-4" />
                Router
              </h3>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">TanStack Router</Badge>
                <Badge variant="outline">TanStack Start (em breve)</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Rotas em src/routes/ usando convenção kebab-case
              </p>
            </div>

            {/* Styling */}
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Palette className="size-4" />
                Estilo e temas
              </h3>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">Tailwind CSS</Badge>
                <Badge variant="secondary">ShadCN UI</Badge>
              </div>
            </div>

            {/* State */}
            <div className="space-y-2">
              <h3 className="font-semibold flex items-center gap-2">
                <Database className="size-4" />
                Estado
              </h3>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary">Zustand</Badge>
                <Badge variant="secondary">Jotai</Badge>
              </div>
              <ul className="text-sm text-muted-foreground list-disc list-inside">
                <li>Zustand para stores mais complexos</li>
                <li>Jotai para controle local de UI (modais, sidebar etc)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Folder Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="size-5" />
              Organização de pastas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="p-4 rounded-lg bg-muted font-mono text-sm">
              {`src/
├─ routes/         # Rotas com TanStack
├─ features/       # Domínios da aplicação
│  ├─ components/  # Componentes específicos
│  ├─ api/         # Hooks e endpoints
├─ components/
│  ├─ shared/      # Libs visuais
│  ├─ design-system/ # UI components
├─ atoms/          # Zustand/Jotai states
├─ pages/          # Entrypoints`}
            </pre>
          </CardContent>
        </Card>

        {/* Best Practices */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Check className="size-5" />
              Boas práticas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc list-inside text-muted-foreground">
              <li>
                Use hooks como <code>use-users.ts</code> para centralizar
                chamadas e schemas
              </li>
              <li>
                Prefira componentes do <code>design-system</code> quando
                aplicável
              </li>
              <li>
                Toda nova feature deve conter:
                <ul className="pl-6 mt-2 space-y-1 list-[circle] list-inside">
                  <li>
                    <code>api/</code> com schemas + chamadas
                  </li>
                  <li>
                    <code>components/</code> da feature
                  </li>
                  <li>Testes ou plano de teste</li>
                  <li>Documentação MDX/Markdoc</li>
                </ul>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="pt-8 pb-16 text-center">
          <Badge variant="outline">Última atualização: Março/2025</Badge>
        </div>
      </div>
    </div>
  );
}
