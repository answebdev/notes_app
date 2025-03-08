import { View, FlatList } from 'react-native';
import NoteItem from './NoteItem';

const NoteList = ({ notes }) => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={notes}
        // renderItem: This is where we return the JSX that we want to display:
        renderItem={({ item }) => <NoteItem note={item} />}
      />
    </View>
  );
};

export default NoteList;
