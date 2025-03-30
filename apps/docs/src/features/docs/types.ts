import { z } from "zod"; // Use double quotes for imports

// --- Define the recursive shape ---
// Need to define the type before the schema uses it recursively.

type TreeNode = {
  name: string;
  path: string; // Path is now required for both files and folders
  isSelectable?: boolean; // Optional as it has a default
} & (
  | {
      type: "file";
      children?: undefined; // Files cannot have children
    }
  | {
      type: "folder";
      children: TreeNode[];
    }
);

// --- Zod Schemas ---

// Base schema for common properties
const baseNodeSchema = z.object({
  name: z.string(),
  path: z.string(), // Path added to base
});

// Schema for Files (extends base)
const fileSchema = baseNodeSchema.extend({
  type: z.literal(`file`),
  isSelectable: z.literal(true).default(true),
  children: z.undefined().optional(),
});

// Schema for Folders (recursive, extends base)
const folderSchema: z.ZodType<TreeNode> = z.lazy(() =>
  baseNodeSchema.extend({
    type: z.literal(`folder`),
    isSelectable: z.literal(false).default(false),
    children: z.array(treeNodeSchema), // Recursive reference
  })
);

// Union schema combining file and folder
export const treeNodeSchema: z.ZodType<TreeNode> = z.union([
  fileSchema,
  folderSchema,
]);

// Export individual types if needed elsewhere, inferred from schemas
export type FileNode = z.infer<typeof fileSchema>;
export type FolderNode = z.infer<typeof folderSchema>;
export type { TreeNode }; // Export the manually defined type

// Schema for the content of a file
export const fileContentSchema = z.object({
  path: z.string(),
  content: z.string(),
});

export type FileContent = z.infer<typeof fileContentSchema>;

// --- New Mock Data (based on user input) ---

const newFileTreeData: TreeNode = {
  name: `src`,
  path: `src`,
  type: `folder`,
  children: [
    {
      name: `routes`,
      path: `src/routes`,
      type: `folder`,
      children: [
        { name: `__root.tsx`, path: `src/routes/__root.tsx`, type: `file` },
        { name: `index.tsx`, path: `src/routes/index.tsx`, type: `file` },
        {
          name: `users`,
          path: `src/routes/users`,
          type: `folder`,
          children: [
            {
              name: `index.tsx`,
              path: `src/routes/users/index.tsx`,
              type: `file`,
            },
            {
              name: `$user-id.tsx`,
              path: `src/routes/users/$user-id.tsx`,
              type: `file`,
            },
          ],
        },
        {
          name: `settings`,
          path: `src/routes/settings`,
          type: `folder`,
          children: [
            {
              name: `profile.tsx`,
              path: `src/routes/settings/profile.tsx`,
              type: `file`,
            },
            {
              name: `notifications.tsx`,
              path: `src/routes/settings/notifications.tsx`,
              type: `file`,
            },
          ],
        },
      ],
    },
    {
      name: `components`,
      path: `src/components`,
      type: `folder`,
      children: [
        {
          name: `shared`,
          path: `src/components/shared`,
          type: `folder`,
          children: [
            {
              name: `shadcn`,
              path: `src/components/shared/shadcn`,
              type: `folder`,
              children: [],
            }, // Assuming empty folders have empty children array
            {
              name: `magic-ui`,
              path: `src/components/shared/magic-ui`,
              type: `folder`,
              children: [],
            },
            {
              name: `motion-primitives`,
              path: `src/components/shared/motion-primitives`,
              type: `folder`,
              children: [],
            },
          ],
        },
        {
          name: `design-system`,
          path: `src/components/design-system`,
          type: `folder`,
          children: [
            {
              name: `button.tsx`,
              path: `src/components/design-system/button.tsx`,
              type: `file`,
            },
          ],
        },
        {
          name: `atoms`,
          path: `src/components/atoms`,
          type: `folder`,
          children: [],
        },
        {
          name: `molecules`,
          path: `src/components/molecules`,
          type: `folder`,
          children: [],
        },
        {
          name: `organisms`,
          path: `src/components/organisms`,
          type: `folder`,
          children: [],
        },
        {
          name: `templates`,
          path: `src/components/templates`,
          type: `folder`,
          children: [],
        },
      ],
    },
    {
      name: `features`,
      path: `src/features`,
      type: `folder`,
      children: [
        {
          name: `users`,
          path: `src/features/users`,
          type: `folder`,
          children: [
            {
              name: `api`,
              path: `src/features/users/api`,
              type: `folder`,
              children: [
                {
                  name: `use-users.ts`,
                  path: `src/features/users/api/use-users.ts`,
                  type: `file`,
                },
                {
                  name: `use-users-table-filters.ts`,
                  path: `src/features/users/api/use-users-table-filters.ts`,
                  type: `file`,
                },
              ],
            },
            {
              name: `components`,
              path: `src/features/users/components`,
              type: `folder`,
              children: [
                {
                  name: `user-card.tsx`,
                  path: `src/features/users/components/user-card.tsx`,
                  type: `file`,
                },
                {
                  name: `user-dialog.tsx`,
                  path: `src/features/users/components/user-dialog.tsx`,
                  type: `file`,
                },
                {
                  name: `user-list.tsx`,
                  path: `src/features/users/components/user-list.tsx`,
                  type: `file`,
                },
              ],
            },
            {
              name: `pages`,
              path: `src/features/users/pages`,
              type: `folder`,
              children: [
                {
                  name: `user-list-page.tsx`,
                  path: `src/features/users/pages/user-list-page.tsx`,
                  type: `file`,
                },
              ],
            },
            {
              name: `index.ts`,
              path: `src/features/users/index.ts`,
              type: `file`,
            },
          ],
        },
      ],
    },
    {
      name: `lib`,
      path: `src/lib`,
      type: `folder`,
      children: [
        { name: `api.ts`, path: `src/lib/api.ts`, type: `file` },
        { name: `cn.ts`, path: `src/lib/cn.ts`, type: `file` },
        { name: `utils.ts`, path: `src/lib/utils.ts`, type: `file` },
      ],
    },
    {
      name: `queries`,
      path: `src/queries`,
      type: `folder`,
      children: [
        {
          name: `use-session.ts`,
          path: `src/queries/use-session.ts`,
          type: `file`,
        },
        {
          name: `use-app-config.ts`,
          path: `src/queries/use-app-config.ts`,
          type: `file`,
        },
      ],
    },
    {
      name: `stores`,
      path: `src/stores`,
      type: `folder`,
      children: [
        {
          name: `use-sidebar-store.ts`,
          path: `src/stores/use-sidebar-store.ts`,
          type: `file`,
        },
        {
          name: `use-theme-store.ts`,
          path: `src/stores/use-theme-store.ts`,
          type: `file`,
        },
        { name: `index.ts`, path: `src/stores/index.ts`, type: `file` },
      ],
    },
    {
      name: `themes`,
      path: `src/themes`,
      type: `folder`,
      children: [
        { name: `hubla.ts`, path: `src/themes/hubla.ts`, type: `file` },
        { name: `acme.ts`, path: `src/themes/acme.ts`, type: `file` },
        { name: `index.ts`, path: `src/themes/index.ts`, type: `file` },
      ],
    },
  ],
};

// --- Define real content for specific files (using template literals) ---
const userListPageContent = `import UserList from \"@/components/user-list\"

export default function Page() {
  return (
    <div className=\"container flex flex-col gap-4 p-8\">
      <h1 className=\"text-2xl font-bold\">Usuários</h1>
      <UserList />
    </div>
  )
}`;

// Note: Need to escape backticks within this template literal
const userListComponentContent = `\"use client\"

import { useState } from \"react\"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from \"@/components/ui/table\"
import { Button } from \"@/components/ui/button\"
import { Input } from \"@/components/ui/input\"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from \"@/components/ui/dialog\"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from \"@/components/ui/select\"
import { Edit, Trash2 } from \"lucide-react\"

// Mock data
const mockUsers = [
  { id: 1, name: \"João Silva\", email: \"joao.silva@example.com\", role: \"Admin\", status: \"Ativo\" },
  { id: 2, name: \"Maria Santos\", email: \"maria.santos@example.com\", role: \"Editor\", status: \"Ativo\" },
  { id: 3, name: \"Pedro Oliveira\", email: \"pedro.oliveira@example.com\", role: \"Usuário\", status: \"Inativo\" },
  { id: 4, name: \"Ana Costa\", email: \"ana.costa@example.com\", role: \"Editor\", status: \"Ativo\" },
  { id: 5, name: \"Carlos Souza\", email: \"carlos.souza@example.com\", role: \"Usuário\", status: \"Ativo\" },
  { id: 6, name: \"Lúcia Pereira\", email: \"lucia.pereira@example.com\", role: \"Admin\", status: \"Inativo\" },
  { id: 7, name: \"Roberto Almeida\", email: \"roberto.almeida@example.com\", role: \"Usuário\", status: \"Ativo\" },
  { id: 8, name: \"Fernanda Lima\", email: \"fernanda.lima@example.com\", role: \"Editor\", status: \"Ativo\" },
  { id: 9, name: \"Marcelo Santos\", email: \"marcelo.santos@example.com\", role: \"Usuário\", status: \"Inativo\" },
  { id: 10, name: \"Juliana Ferreira\", email: \"juliana.ferreira@example.com\", role: \"Admin\", status: \"Ativo\" },
  { id: 11, name: \"Ricardo Martins\", email: \"ricardo.martins@example.com\", role: \"Editor\", status: \"Ativo\" },
  { id: 12, name: \"Camila Rodrigues\", email: \"camila.rodrigues@example.com\", role: \"Usuário\", status: \"Inativo\" },
  { id: 13, name: \"Bruno Carvalho\", email: \"bruno.carvalho@example.com\", role: \"Usuário\", status: \"Ativo\" },
  { id: 14, name: \"Amanda Gomes\", email: \"amanda.gomes@example.com\", role: \"Editor\", status: \"Ativo\" },
  { id: 15, name: \"Felipe Dias\", email: \"felipe.dias@example.com\", role: \"Admin\", status: \"Inativo\" },
]\n\nexport default function UserList() {
  const [filters, setFilters] = useState({
    name: \"\",
    email: \"\",
    role: \"all\",
    status: \"all\",
  })

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  // Filter users based on current filters
  const filteredUsers = mockUsers.filter((user) => {
    return (
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      (filters.role === \"all\" || user.role === filters.role) &&
      (filters.status === \"all\" || user.status === filters.status)
    )
  })

  // Calculate pagination
  const totalPages = Math.ceil(filteredUsers.length / pageSize)
  const startIndex = (currentPage - 1) * pageSize
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + pageSize)

  // Handle filter changes
  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }))
    setCurrentPage(1) // Reset to first page when filters change
  }

  // Handle edit action
  const handleEdit = (user) => {
    setSelectedUser(user)
    setEditDialogOpen(true)
  }

  // Handle delete action
  const handleDelete = (user) => {
    setSelectedUser(user)
    setDeleteDialogOpen(true)
  }

  // Confirm delete (mock)
  const confirmDelete = () => {
    // In a real app, you would call an API here
    console.log(\\\`Deleting user: \${selectedUser.id}\\\`)
    setDeleteDialogOpen(false)
    // Refresh data would happen here
  }

  // Confirm edit (mock)
  const confirmEdit = () => {
    // In a real app, you would call an API here
    console.log(\\\`Updating user: \${selectedUser.id}\\\`)
    setEditDialogOpen(false)
    // Refresh data would happen here
  }

  return (
    <div className=\"space-y-4\">
      {/* Filters */}
      <div className=\"flex flex-wrap gap-2 mb-4\">
        <Input
          placeholder=\"Filtrar por nome\"
          value={filters.name}
          onChange={(e) => handleFilterChange(\"name\", e.target.value)}
          className=\"max-w-[200px]\"
        />
        <Input
          placeholder=\"Filtrar por email\"
          value={filters.email}
          onChange={(e) => handleFilterChange(\"email\", e.target.value)}
          className=\"max-w-[200px]\"
        />
        <Select value={filters.role} onValueChange={(value) => handleFilterChange(\"role\", value)}>
          <SelectTrigger className=\"w-[150px]\">
            <SelectValue placeholder=\"Função\" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=\"all\">Todas as funções</SelectItem>
            <SelectItem value=\"Admin\">Admin</SelectItem>
            <SelectItem value=\"Editor\">Editor</SelectItem>
            <SelectItem value=\"Usuário\">Usuário</SelectItem>
          </SelectContent>
        </Select>
        <Select value={filters.status} onValueChange={(value) => handleFilterChange(\"status\", value)}>
          <SelectTrigger className=\"w-[150px]\">
            <SelectValue placeholder=\"Status\" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=\"all\">Todos os status</SelectItem>
            <SelectItem value=\"Ativo\">Ativo</SelectItem>
            <SelectItem value=\"Inativo\">Inativo</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Users Table */}
      <div className=\"border rounded-md\">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Função</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className=\"text-right\">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedUsers.length > 0 ? (
              paginatedUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <span
                      className={\\\`px-2 py-1 rounded-full text-xs \${user.status === \"Ativo\" ? \"bg-green-100 text-green-800\" : \"bg-gray-100 text-gray-800\"}\\\`}
                    >
                      {user.status}
                    </span>
                  </TableCell>
                  <TableCell className=\"text-right\">
                    <div className=\"flex justify-end gap-2\">
                      <Button variant=\"ghost\" size=\"icon\" onClick={() => handleEdit(user)}>
                        <Edit className=\"h-4 w-4\" />
                      </Button>
                      <Button variant=\"ghost\" size=\"icon\" onClick={() => handleDelete(user)}>
                        <Trash2 className=\"h-4 w-4\" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className=\"text-center py-4\">
                  Nenhum usuário encontrado
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className=\"flex items-center justify-between\">
        <div className=\"flex items-center gap-2\">
          <p className=\"text-sm text-muted-foreground\">
            Mostrando {paginatedUsers.length > 0 ? startIndex + 1 : 0} a{\" \"}
            {Math.min(startIndex + pageSize, filteredUsers.length)} de {filteredUsers.length} registros
          </p>
          <Select
            value={pageSize.toString()}
            onValueChange={(value) => {
              setPageSize(Number(value))
              setCurrentPage(1)
            }}
          >
            <SelectTrigger className=\"w-[70px]\">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value=\"5\">5</SelectItem>
              <SelectItem value=\"10\">10</SelectItem>
              <SelectItem value=\"15\">15</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className=\"flex gap-1\">
          <Button
            variant=\"outline\"
            size=\"sm\"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? \"default\" : \"outline\"}
              size=\"sm\"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant=\"outline\"
            size=\"sm\"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
          >
            Próxima
          </Button>
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirmar exclusão</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir o usuário {selectedUser?.name}? Esta ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant=\"outline\" onClick={() => setDeleteDialogOpen(false)}>
              Cancelar
            </Button>
            <Button variant=\"destructive\" onClick={confirmDelete}>
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar usuário</DialogTitle>
            <DialogDescription>Edite as informações do usuário abaixo.</DialogDescription>
          </DialogHeader>
          <div className=\"grid gap-4 py-4\">
            <div className=\"grid gap-2\">
              <label htmlFor=\"name\">Nome</label>
              <Input id=\"name\" defaultValue={selectedUser?.name} />
            </div>
            <div className=\"grid gap-2\">
              <label htmlFor=\"email\">Email</label>
              <Input id=\"email\" defaultValue={selectedUser?.email} />
            </div>
            <div className=\"grid gap-2\">
              <label htmlFor=\"role\">Função</label>
              <Select defaultValue={selectedUser?.role}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=\"Admin\">Admin</SelectItem>
                  <SelectItem value=\"Editor\">Editor</SelectItem>
                  <SelectItem value=\"Usuário\">Usuário</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className=\"grid gap-2\">
              <label htmlFor=\"status\">Status</label>
              <Select defaultValue={selectedUser?.status}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value=\"Ativo\">Ativo</SelectItem>
                  <SelectItem value=\"Inativo\">Inativo</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <Button variant=\"outline\" onClick={() => setEditDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={confirmEdit}>Salvar alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}`; // Escaped backticks inside console.log and className

// Helper function to extract all file paths from the tree
const getAllFilePaths = (node: TreeNode): string[] => {
  let paths: string[] = [];
  if (node.type === `file`) {
    paths.push(node.path);
  } else if (node.children) {
    node.children.forEach((child) => {
      paths = paths.concat(getAllFilePaths(child));
    });
  }
  return paths;
};

// Define the full mock contents array directly
export const mockFileContents: FileContent[] = getAllFilePaths(
  newFileTreeData
).map((path) => {
  // Use switch or if/else to assign specific content
  switch (path) {
    case `src/features/users/pages/user-list-page.tsx`:
      return { path, content: userListPageContent };
    case `src/features/users/components/user-list.tsx`:
      return { path, content: userListComponentContent };
    // Add cases for other specific files if needed in the future
    // ...
    default:
      // Placeholder for all other files (using backticks)
      return {
        path,
        content: `# ${path.split("/").pop()}\n\nContent for ${path}...`,
      };
  }
});

// Export the tree structure wrapped in an array
export const mockFileTree: TreeNode[] = [newFileTreeData];

// Validate mock data
try {
  z.array(treeNodeSchema).parse(mockFileTree);
  z.array(fileContentSchema).parse(mockFileContents);
  console.log(`Mock data validation successful!`);
} catch (error) {
  console.error(`Mock data validation failed:`, error);
}
