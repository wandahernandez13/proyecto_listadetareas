import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

export default function TaskForm({ route, addTask, editTask, categories = [] }) {
  const navigation = useNavigation();
  const [task, setTask] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    if (route.params?.task) {
      setTask(route.params.task.title);
      setCategoryId(route.params.task.categoryId);
      setEditingTask(route.params.task);
    }
  }, [route.params]);

  useEffect(() => {
    if (categories.length > 0) {
      setCategoryId(categories[0].id);
    } else {
      setCategoryId('');
    }
  }, [categories]);

  const handleSave = () => {
    if (task.trim() === '') return;

    if (editingTask) {
      editTask(editingTask.id, task, categoryId);
    } else {
      addTask(task, categoryId);
    }

    setTask('');
    setCategoryId(categories.length > 0 ? categories[0].id : '');
    setEditingTask(null);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{editingTask ? 'Editar Tarea' : 'Nueva Tarea'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe una tarea..."
        value={task}
        onChangeText={setTask}
      />
      <Picker
        selectedValue={categoryId}
        style={styles.picker}
        onValueChange={(itemValue) => setCategoryId(itemValue)}
        enabled={categories.length > 0}
      >
        {categories.length === 0 ? (
          <Picker.Item label="No hay categorías disponibles" value="" />
        ) : (
          categories.map((category) => (
            <Picker.Item key={category.id} label={category.name} value={category.id} />
          ))
        )}
      </Picker>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={categories.length === 0}>
        <Text style={styles.saveButtonText}>{editingTask ? 'Actualizar' : 'Guardar'}</Text>
      </TouchableOpacity>
    </View>
  );
}