declare module "*.mdx" {
  const component: () => JSX.Element;
  export default component;
}
