import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/styles';

export default function Categories({ navigation, setCategories, categories }) {
  const addCategory = (newCategory) => {
    const updatedCategories = [...categories, { id: Date.now(), name: newCategory }];
    setCategories(updatedCategories);
  };

  const deleteCategory = (id) => {
    Alert.alert('Eliminar', '¿Estás seguro de que quieres eliminar esta categoría?', [
      { text: 'Cancelar', style: 'cancel' },
      { 
        text: 'Eliminar', 
        onPress: () => {
          const updatedCategories = categories.filter(cat => cat.id !== id);
          setCategories(updatedCategories);
        }
      }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorías</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item.name}</Text>
            <TouchableOpacity onPress={() => deleteCategory(item.id)}>
              <Text style={styles.deleteButton}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate('CategoryForm', { addCategory })}
      >
        <Text style={styles.addButtonText}>Agregar Categoría</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.addCategoryButton} 
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.addCategoryButtonText}>Volver a Tareas</Text>
      </TouchableOpacity>
    </View>
  );
}
