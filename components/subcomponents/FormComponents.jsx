export const FormInput = ({ formik, label, type, name }) => {
  const handleChange = (e) => {
    let v = e.target.value;
    formik[name] = v;
  };
  return (
    <div className="FormInput m-auto flex">
      <label htmlFor={name} className="">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={handleChange}
        value={formik[name]}
        className="border-2 rounded mx-4 "
      />
    </div>
  );
};

export function FormSection({ children }) {
  return (
    <section className="w-full flex-center flex-col  ">
      <main className="App">{children}</main>
    </section>
  );
}
