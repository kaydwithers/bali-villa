interface IInput {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
}

export const Input = ({ type, label, name, placeholder }: IInput) => {
  return (
    <div className="">
      <label htmlFor={name} className="block font-medium leading-6">
        {label}
      </label>

      <div className="mt-4">
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={name}
          className="block w-full rounded-md border-0 py-4 bg-white/5 text-white shadow-sm ring-1 ring-inset ring-white/5 placeholder:text-white/50 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:leading-6"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
