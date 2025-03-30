export default `
import UserList from "@/components/user-list";

export default function Page() {
  return (
    <div className="container flex flex-col gap-4 p-8">
      <h1 className="text-2xl font-bold">Usuários</h1>
      <UserList />
    </div>
  );
}
`;
