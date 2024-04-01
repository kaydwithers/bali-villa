interface ILayout {
  children: React.ReactNode;
  id?: string;
}

export const Layout = ({ children, id }: ILayout) => {
  return (
    <div className="px-6 py-12 lg:px-24 lg:py-24 w-full" id={id}>
      {children}
    </div>
  );
};
