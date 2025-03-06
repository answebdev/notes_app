import { Stack } from 'expo-router';

// A <Stack /> is a literal stack of screens or pages.
// When you add a new screen, or a page, you place it on top of a stack.
// When you remove a screen, or a page, you take it from the top first.
// And you can only see the top screen, or page, at one time.
// And there are different methods to add and remove pages.
// If you plan on having multiple pages, then a Stack is what you would use.
// If you have a small app with just one screen, then you might want to use a <Slot /> instead
// (note that using a Slot removes the header at the top of a page).

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#ff8c00',
        },
        // Change header text color:
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
        // These style will apply to any page that's within the layout:
        contentStyle: {
          paddingHorizontal: 10,
          paddingTop: 10,
          backgroundColor: '#ffffff',
        },
      }}
    >
      <Stack.Screen name='index' options={{ title: 'Home' }} />
      <Stack.Screen name='notes' options={{ headerTitle: 'Notes' }} />
    </Stack>
  );
};

export default RootLayout;
