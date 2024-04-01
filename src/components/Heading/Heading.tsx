interface IHeading {
  children: React.ReactNode;
}

export const Heading = ({ children }: IHeading) => {
  return <h3 className="text-xl lg:text-3xl mb-12 font-bold">{children}</h3>;
};
