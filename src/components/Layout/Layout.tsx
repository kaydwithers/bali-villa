interface ILayout {
  children: React.ReactNode;
  classNameOverride?: string;
  id?: string;
}

export const Layout = ({ children, classNameOverride, id }: ILayout) => {
  return (
    <div
      className={`${classNameOverride} container mx-auto px-6 py-12 lg:px-24 lg:py-24 w-full`}
      id={id}
    >
      {children}
    </div>
  );
};
