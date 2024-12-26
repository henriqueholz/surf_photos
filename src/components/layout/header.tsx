import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../contexts/auth-context';

export function Header() {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  return (
    <View style={styles.header}>
      <Pressable onPress={() => navigation.navigate('CreateGist')}>
        <Text style={styles.logo}>Elixir Gists</Text>
      </Pressable>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search gists..."
        />
      </View>

      <Pressable onPress={() => navigation.navigate('AllGists')}>
        <Text style={styles.navLink}>All Gists</Text>
      </Pressable>

      {user ? (
        <View style={styles.userMenu}>
          <Text>Signed in as {user.username}</Text>
          <Pressable onPress={() => navigation.navigate('YourGists')}>
            <Text>Your Gists</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('SavedGists')}>
            <Text>Saved Gists</Text>
          </Pressable>
          <Pressable onPress={logout}>
            <Text>Logout</Text>
          </Pressable>
        </View>
      ) : (
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navLink}>Login</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e4e8',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  searchInput: {
    padding: 8,
    backgroundColor: '#f6f8fa',
    borderRadius: 6,
  },
  navLink: {
    marginHorizontal: 8,
  },
  userMenu: {
    position: 'absolute',
    right: 16,
    top: 50,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
}); 