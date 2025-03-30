import { jsx } from 'react/jsx-runtime';

function i({ children: o, className: t, ...p }) {
  return jsx("div", { className: t, ...p, children: o });
}
i.displayName = "Box";
const f = function() {
  return jsx(i, { className: "bg-red-200 p-4", children: jsx("h1", { children: "Hello" }) });
};

export { f as component };
//# sourceMappingURL=index-BlGmuewr.mjs.map
