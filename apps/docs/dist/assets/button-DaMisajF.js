import{j as y}from"./index-CPZET3y_.js";import{d as k,S as V,c as j}from"./index-Cb4Ws0A5.js";const g=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,b=k,w=(n,r)=>e=>{var o;if((r==null?void 0:r.variants)==null)return b(n,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:u,defaultVariants:i}=r,m=Object.keys(u).map(t=>{const a=e==null?void 0:e[t],d=i==null?void 0:i[t];if(a===null)return null;const s=g(a)||g(d);return u[t][s]}),v=e&&Object.entries(e).reduce((t,a)=>{let[d,s]=a;return s===void 0||(t[d]=s),t},{}),f=r==null||(o=r.compoundVariants)===null||o===void 0?void 0:o.reduce((t,a)=>{let{class:d,className:s,...h}=a;return Object.entries(h).every(x=>{let[c,l]=x;return Array.isArray(l)?l.includes({...i,...v}[c]):{...i,...v}[c]===l})?[...t,d,s]:t},[]);return b(n,m,f,e==null?void 0:e.class,e==null?void 0:e.className)},N=w("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function z({className:n,variant:r,size:e,asChild:o=!1,...u}){const i=o?V:"button";return y.jsx(i,{"data-slot":"button",className:j(N({variant:r,size:e,className:n})),...u})}export{z as B,w as c};
//# sourceMappingURL=button-DaMisajF.js.map
