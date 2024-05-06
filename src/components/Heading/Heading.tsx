interface IHeading {
  children: React.ReactNode;
}

export const Heading = ({ children }: IHeading) => {
  return (
    <h3 className="text-xl lg:text-2xl mb-12 font-semibold uppercase tracking-[0.2em]">
      {children}
    </h3>
  );
};
