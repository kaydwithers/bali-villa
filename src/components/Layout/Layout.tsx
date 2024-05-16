interface ILayout {
  children: React.ReactNode;
  classNameOverride?: string;
  id?: string;
}

export const Layout = ({ children, classNameOverride, id }: ILayout) => {
  const baseClasses = "container mx-auto px-6 py-12 lg:px-24 lg:py-24 w-full";
  const combinedClasses = `${classNameOverride} ${baseClasses}`;

  return (
    <div
      className={
        typeof classNameOverride === "undefined" ? baseClasses : combinedClasses
      }
      id={id}
    >
      {children}
    </div>
  );
};
