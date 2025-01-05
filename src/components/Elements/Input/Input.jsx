const InputForm = ({ label, type, placeholder, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block font-medium text-slate-600 mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md"
      />
    </div>
  );
};

export default InputForm;
