import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/layout/header';

export function CreateGistScreen() {
  const [description, setDescription] = useState('');
  const [filename, setFilename] = useState('');
  const [content, setContent] = useState('');
  const navigation = useNavigation();

  const handleCreateGist = async () => {
    try {
      // Implement gist creation logic here
      console.log('Creating gist:', { description, filename, content });
      navigation.navigate('AllGists');
    } catch (error) {
      console.error('Failed to create gist:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>
          Instantly share Elixir code, notes, and snippets
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Gist description..."
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <TextInput
          style={styles.input}
          placeholder="Filename including extension..."
          value={filename}
          onChangeText={setFilename}
        />

        <TextInput
          style={[styles.input, styles.codeInput]}
          placeholder="Enter your code here..."
          value={content}
          onChangeText={setContent}
          multiline
          numberOfLines={10}
          autoCapitalize="none"
        />

        <Pressable 
          style={styles.button}
          onPress={handleCreateGist}
        >
          <Text style={styles.buttonText}>Create Gist</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    marginBottom: 16,
    borderRadius: 6,
  },
  codeInput: {
    fontFamily: 'monospace',
    minHeight: 200,
  },
  button: {
    backgroundColor: '#2ea44f',
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
}); 