export const FormInput = ({ formik, label, type, name }) => {
  return (
    <div className="FormInput m-auto flex">
      <label htmlFor={name} className="">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        onChange={formik.handleChange}
        value={formik.values.password}
        className="m-2"
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
