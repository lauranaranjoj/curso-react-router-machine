import React from 'react';
import './TodoForm.css';
import { useNavigate } from 'react-router-dom';

function TodoForm({ submitEvent, label, submitText, initialText, loading }) {
  
  console.log('render form: ' + initialText);
  
  const navigate = useNavigate();   
  const [newTodoValue, setNewTodoValue] = React.useState(initialText);
  const placeholder = loading?'Cargando':'Ingresa el texto';

  React.useEffect(() => {

    setNewTodoValue(initialText);

  },[initialText]);
  

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigate('/');
  };
  const onSubmit = (event) => {
    event.preventDefault();
    submitEvent(newTodoValue);
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{label}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder={placeholder}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
          disabled={loading}
        >
          {submitText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
