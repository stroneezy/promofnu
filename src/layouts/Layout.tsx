type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div id="LAYOUT">{children}</div>;
};

export default Layout;
