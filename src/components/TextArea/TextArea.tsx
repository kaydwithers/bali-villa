interface ITextArea {
  type: string;
  label: string;
  placeholder: string;
}

export const TextArea = ({ type, label, placeholder }: ITextArea) => {
  return (
    <div className="col-span-full">
      <label htmlFor={type} className="block font-medium leading-6">
        {label}
      </label>

      <div className="mt-4">
        <textarea
          id={type}
          name={type}
          rows={3}
          className="block w-full rounded-md border-0 py-4 bg-white/5 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-white/50 focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
};
