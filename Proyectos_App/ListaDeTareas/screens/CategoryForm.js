import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/styles';

export default function CategoryForm({ addCategory, categories }) {
  const [categoryName, setCategoryName] = useState('');

  const handleSave = () => {
    if (categoryName.trim() === '') return;
    addCategory(categoryName);
    setCategoryName('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administrar Categorías</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de la categoría"
        value={categoryName}
        onChangeText={setCategoryName}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Agregar</Text>
      </TouchableOpacity>
      
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}
