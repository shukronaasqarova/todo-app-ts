import React, { useState } from 'react';

interface Todo {
    id: number;
    text: string;
}

const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            const newTodoItem: Todo = {
                id: Date.now(),
                text: newTodo,
            };
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
        }
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center py-12">
            <div className="bg-white p-8 rounded-lg shadow-xl w-[90%] sm:w-[500px]">
                <h1 className="text-4xl font-semibold text-center text-pink-700 mb-8">Todo List</h1>
                <div className="flex gap-4 mb-6">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        placeholder="Add a new task"
                        className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
                    />
                    <button
                        onClick={addTodo}
                        className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-300"
                    >
                        Add
                    </button>
                </div>
                <ul>
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center bg-gray-200 p-5 rounded-lg mb-4 shadow-md hover:scale-105 transition-all duration-300 ease-in-out"
                        >
                            <span className="text-lg font-medium text-gray-800">{todo.text}</span>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="text-red-600 font-semibold hover:text-red-800 transition duration-300"
                            >
                                &times;
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
