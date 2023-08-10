const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {name}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-controll form-input'
      />
    </div>
  );
};
export default FormRow;
