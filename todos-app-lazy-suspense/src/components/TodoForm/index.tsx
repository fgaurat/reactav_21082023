import React, { FormEvent, useState } from "react";
import { Todo } from "../../core/Todo";


interface TodoFormProps{
  handleOnSubmit:(todo:Todo)=>void
}
function TodoForm({handleOnSubmit}:TodoFormProps) {
    const initialState = {
        title:"Le titre de la todo",
        completed:true
    }
    const [formState,setFormState] =useState(initialState)

    const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        // event.preventDefault()
        const target = event.target
        const name = target.name
        const value = target.type=="checkbox"?target.checked:target.value

        const newState = {...formState,[name]:value}
        setFormState(newState)

    }

    const saveTodo = (e:FormEvent)=>{
        e.preventDefault()
        console.log(formState)
        handleOnSubmit(formState)
    }

  return (
    <>
      <h2>TodoForm</h2>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={saveTodo}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Titre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            name="title"
            type="text"
            placeholder="Titre"
            value={formState.title}
            onChange={handleOnChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="completed"
          >
            Completed
          </label>
          <input
            className="mr-2 leading-tight"
            id="completed"
            name="completed"
            type="checkbox"
            checked={formState.completed}
            onChange={handleOnChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Soumettre
          </button>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
