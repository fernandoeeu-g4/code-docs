export default `
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Edit, Trash2 } from "lucide-react";

    // Mock data
    const mockUsers = [
    { id: 1, name: "João Silva", email: "joao.silva@example.com", role: "Admin", status: "Ativo" },
    { id: 2, name: "Maria Santos", email: "maria.santos@example.com", role: "Editor", status: "Ativo" },
    { id: 3, name: "Pedro Oliveira", email: "pedro.oliveira@example.com", role: "Usuário", status: "Inativo" },
    { id: 4, name: "Ana Costa", email: "ana.costa@example.com", role: "Editor", status: "Ativo" },
    { id: 5, name: "Carlos Souza", email: "carlos.souza@example.com", role: "Usuário", status: "Ativo" },
    { id: 6, name: "Lúcia Pereira", email: "lucia.pereira@example.com", role: "Admin", status: "Inativo" },
    { id: 7, name: "Roberto Almeida", email: "roberto.almeida@example.com", role: "Usuário", status: "Ativo" },
    { id: 8, name: "Fernanda Lima", email: "fernanda.lima@example.com", role: "Editor", status: "Ativo" },
    { id: 9, name: "Marcelo Santos", email: "marcelo.santos@example.com", role: "Usuário", status: "Inativo" },
    { id: 10, name: "Juliana Ferreira", email: "juliana.ferreira@example.com", role: "Admin", status: "Ativo" },
    { id: 11, name: "Ricardo Martins", email: "ricardo.martins@example.com", role: "Editor", status: "Ativo" },
    { id: 12, name: "Camila Rodrigues", email: "camila.rodrigues@example.com", role: "Usuário", status: "Inativo" },
    { id: 13, name: "Bruno Carvalho", email: "bruno.carvalho@example.com", role: "Usuário", status: "Ativo" },
    { id: 14, name: "Amanda Gomes", email: "amanda.gomes@example.com", role: "Editor", status: "Ativo" },
    { id: 15, name: "Felipe Dias", email: "felipe.dias@example.com", role: "Admin", status: "Inativo" },
    ]

    export default function UserList() {
    const [filters, setFilters] = useState({
        name: "",
        email: "",
        role: "all",
        status: "all",
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
    (filters.role === "all" || user.role === filters.role) &&
    (filters.status === "all" || user.status === filters.status)
    )
    })

    // Calculate pagination
    const totalPages = Math.ceil(filteredUsers.length / pageSize)
    const startIndex = (currentPage - 1) \* pageSize
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
    console.log(\`Deleting user: ${selectedUser.id}\`)
    setDeleteDialogOpen(false)
    // Refresh data would happen here
    }

    // Confirm edit (mock)
    const confirmEdit = () => {
    // In a real app, you would call an API here
    console.log(\`Updating user: ${selectedUser.id}\`)
    setEditDialogOpen(false)
    // Refresh data would happen here
    }

    return (
    <div className="space-y-4">
    {/* Filters */}
    <div className="flex flex-wrap gap-2 mb-4">
    <Input
    placeholder="Filtrar por nome"
    value={filters.name}
    onChange={(e) => handleFilterChange("name", e.target.value)}
    className="max-w-[200px]"
    />
    <Input
    placeholder="Filtrar por email"
    value={filters.email}
    onChange={(e) => handleFilterChange("email", e.target.value)}
    className="max-w-[200px]"
    />
    <Select value={filters.role} onValueChange={(value) => handleFilterChange("role", value)}>
    <SelectTrigger className="w-[150px]">
    <SelectValue placeholder="Função" />
    </SelectTrigger>
    <SelectContent>
    <SelectItem value="all">Todas as funções</SelectItem>
    <SelectItem value="Admin">Admin</SelectItem>
    <SelectItem value="Editor">Editor</SelectItem>
    <SelectItem value="Usuário">Usuário</SelectItem>
    </SelectContent>
    </Select>
    <Select value={filters.status} onValueChange={(value) => handleFilterChange("status", value)}>
    <SelectTrigger className="w-[150px]">
    <SelectValue placeholder="Status" />
    </SelectTrigger>
    <SelectContent>
    <SelectItem value="all">Todos os status</SelectItem>
    <SelectItem value="Ativo">Ativo</SelectItem>
    <SelectItem value="Inativo">Inativo</SelectItem>
    </SelectContent>
    </Select>
    </div>

        {/* Users Table */}
        <div className="border rounded-md">
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Função</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
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
                        className={\`px-2 py-1 rounded-full text-xs ${
                          user.status === "Ativo"
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }\`}
                        >
                        {user.status}
                        </span>
                    </TableCell>
                    <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" onClick={() => handleEdit(user)}>
                            <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(user)}>
                            <Trash2 className="h-4 w-4" />
                        </Button>
                        </div>
                    </TableCell>
                    </TableRow>
                ))
                ) : (
                <TableRow>
                    <TableCell colSpan={5} className="text-center py-4">
                    Nenhum usuário encontrado
                    </TableCell>
                </TableRow>
                )}
            </TableBody>
            </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">
                Mostrando {paginatedUsers.length > 0 ? startIndex + 1 : 0} a{" "}
                {Math.min(startIndex + pageSize, filteredUsers.length)} de {filteredUsers.length} registros
            </p>
            <Select
                value={pageSize.toString()}
                onValueChange={(value) => {
                setPageSize(Number(value))
                setCurrentPage(1)
                }}
            >
                <SelectTrigger className="w-[70px]">
                <SelectValue />
                </SelectTrigger>
                <SelectContent>
                <SelectItem value="5">5</SelectItem>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="15">15</SelectItem>
                </SelectContent>
            </Select>
            </div>

            <div className="flex gap-1">
            <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
            >
                Anterior
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                >
                {page}
                </Button>
            ))}
            <Button
                variant="outline"
                size="sm"
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
                <Button variant="outline" onClick={() => setDeleteDialogOpen(false)}>
                Cancelar
                </Button>
                <Button variant="destructive" onClick={confirmDelete}>
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
            <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                <label htmlFor="name">Nome</label>
                <Input id="name" defaultValue={selectedUser?.name} />
                </div>
                <div className="grid gap-2">
                <label htmlFor="email">Email</label>
                <Input id="email" defaultValue={selectedUser?.email} />
                </div>
                <div className="grid gap-2">
                <label htmlFor="role">Função</label>
                <Select defaultValue={selectedUser?.role}>
                    <SelectTrigger>
                    <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Editor">Editor</SelectItem>
                    <SelectItem value="Usuário">Usuário</SelectItem>
                    </SelectContent>
                </Select>
                </div>
                <div className="grid gap-2">
                <label htmlFor="status">Status</label>
                <Select defaultValue={selectedUser?.status}>
                    <SelectTrigger>
                    <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="Ativo">Ativo</SelectItem>
                    <SelectItem value="Inativo">Inativo</SelectItem>
                    </SelectContent>
                </Select>
                </div>
            </div>
            <DialogFooter>
                <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
                Cancelar
                </Button>
                <Button onClick={confirmEdit}>Salvar alterações</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
        </div>

    )

}
`;
