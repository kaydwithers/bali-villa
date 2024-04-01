interface IMobileOverflow {
  children: React.ReactNode;
}

export const MobileOverflow = ({ children }: IMobileOverflow) => {
  return (
    <div className="overflow-x-auto lg:overflow-visible scroll-smooth -mx-6 px-6">
      {children}
    </div>
  );
};
