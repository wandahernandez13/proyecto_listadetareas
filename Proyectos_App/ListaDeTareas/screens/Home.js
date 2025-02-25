import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

export default function Home({ tasks, categories, deleteTask, toggleComplete }) {
  const navigation = useNavigation();

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Sin categoría';
  };

  const groupedTasks = tasks.reduce((acc, task) => {
    acc[task.categoryId] = acc[task.categoryId] || [];
    acc[task.categoryId].push(task);
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tareas</Text>

      {Object.keys(groupedTasks).length === 0 && <Text style={styles.emptyMessage}>No hay tareas</Text>}
      
      {Object.keys(groupedTasks).map(categoryId => (
        <View key={categoryId} style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>{getCategoryName(categoryId)}</Text>
          <FlatList
            data={groupedTasks[categoryId]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.task}>
                <TouchableOpacity onPress={() => toggleComplete(item.id)} style={styles.completeButton}>
                  <Text style={styles.completeButtonText}>{item.completed ? '✔️' : '🔴'}</Text>
                </TouchableOpacity>
                <Text style={item.completed ? styles.completed : styles.taskText}>{item.title}</Text>
                <View style={styles.actions}>
                  <TouchableOpacity onPress={() => navigation.navigate('TaskForm', { task: item })}>
                    <Text style={styles.edit}>✏️</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => deleteTask(item.id)}>
                    <Text style={styles.delete}>🗑️</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      ))}

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('TaskForm')}>
        <Text style={styles.addButtonText}>+ Agregar Tarea</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addCategoryButton} onPress={() => navigation.navigate('Categories')}>
        <Text style={styles.addCategoryButtonText}>⚙️ Administrar Categorías</Text>
      </TouchableOpacity>
    </View>
  );
}
