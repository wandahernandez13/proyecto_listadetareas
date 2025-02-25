import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff9fa', 
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#f06a80', 
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#90A4AE', 
    marginBottom: 15,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#ff849c', 
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#ff849c', 
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  task: {
    backgroundColor: '#ececec', 
    padding: 15,
    borderRadius: 12,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
    color: '#263238', 
  },
  actions: {
    flexDirection: 'row',
  },
  edit: {
    fontSize: 20,
    marginRight: 10,
  },
  delete: {
    fontSize: 20,
  },
  emptyMessage: {
    textAlign: 'center',
    color: '#455A64',
    fontSize: 16,
    fontStyle: 'italic',
  },
  categoryContainer: {
    backgroundColor: '#fbced5', 
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  categoryLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#263238',
    textAlign: 'center',
  },
  categoryListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#78909C', 
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00000',
  },
});

export default styles;
