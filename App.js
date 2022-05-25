import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Navigation } from "./navigation/Navigation";
import { ContactsProvider } from "./contexts/ContactsContext";

export default function App() {
  return (
    <ContactsProvider>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    </ContactsProvider>
  );
}
