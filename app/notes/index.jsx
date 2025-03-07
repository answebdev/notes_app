import { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const NotesScreen = () => {
  const [notes, setNotes] = useState([
    { id: '1', text: 'Note One' },
    { id: '2', text: 'Note Two' },
    { id: '3', text: 'Note Three' },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={notes}
        // renderItem: This is where we return the JSX that we want to display:
        renderItem={({ item }) => (
          <View style={styles.noteItem}>
            <Text style={styles.noteText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  noteItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  noteText: {
    fontSize: 18,
  },
});

export default NotesScreen;
