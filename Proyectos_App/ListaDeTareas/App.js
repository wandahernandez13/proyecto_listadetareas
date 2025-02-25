import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import TaskForm from './screens/TaskForm';
import Categories from './screens/Categories';
import CategoryForm from './screens/CategoryForm';

const Stack = createStackNavigator();

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);

  // Agregar una nueva tarea dentro de una categoría.
  const addTask = (task, categoryId) => {
    setTasks([...tasks, { id: Date.now().toString(), title: task, completed: false, categoryId }]);
  };

  // Editar una tarea.
  const editTask = (id, newTitle, categoryId) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle, categoryId } : task));
  };

  // Eliminar una tarea.
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Marcar tarea como completada o pendiente.
  const toggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  // Agregar una nueva categoría.
  const addCategory = (name) => {
    setCategories([...categories, { id: Date.now().toString(), name }]);
  };

  // Editar una categoría.
  const editCategory = (id, name) => {
    setCategories(categories.map(cat => cat.id === id ? { ...cat, name } : cat));
  };

  // Eliminar una categoría y sus tareas asociadas.
  const deleteCategory = (id) => {
    setCategories(categories.filter(cat => cat.id !== id));
    setTasks(tasks.filter(task => task.categoryId !== id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <Home {...props} tasks={tasks} categories={categories} deleteTask={deleteTask} toggleComplete={toggleComplete} />}
        </Stack.Screen>
        <Stack.Screen name="TaskForm">
          {props => <TaskForm {...props} addTask={addTask} editTask={editTask} categories={categories} />}
        </Stack.Screen>
        <Stack.Screen name="Categories">
          {props => <Categories {...props} categories={categories} setCategories={setCategories} deleteCategory={deleteCategory} />}
        </Stack.Screen>
        <Stack.Screen name="CategoryForm">
          {props => <CategoryForm {...props} addCategory={addCategory} editCategory={editCategory} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
