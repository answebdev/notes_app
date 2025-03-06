import { Stack } from 'expo-router';

const NoteLayout = () => {
  return (
    <Stack
      screenOptions={{
        // Removes header added by default:
        headerShown: false,
      }}
    />
  );
};

export default NoteLayout;
