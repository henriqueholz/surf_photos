import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Header } from '../../components/layout/header';
import { Gist } from '../../types';

// Mock data - replace with actual API call
const mockGists: Gist[] = [
  {
    id: '1',
    title: 'Example Elixir Pattern Matching',
    description: 'A simple example of pattern matching in Elixir',
    filename: 'pattern_matching.ex',
    content: 'def handle_result({:ok, result}) do\n  IO.puts("Success: #{result}")\nend',
    createdAt: new Date(),
    userId: '1',
  },
];

export function AllGistsScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        {mockGists.map((gist) => (
          <View key={gist.id} style={styles.gistCard}>
            <Text style={styles.gistTitle}>{gist.title}</Text>
            <Text style={styles.gistMeta}>
              Created on {gist.createdAt.toLocaleDateString()}
            </Text>
            <Text style={styles.gistDescription}>{gist.description}</Text>
            <View style={styles.codeContainer}>
              <Text style={styles.filename}>{gist.filename}</Text>
              <View style={styles.codeBlock}>
                <Text style={styles.code}>{gist.content}</Text>
              </View>
            </View>
          </View>
        ))}
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
  gistCard: {
    borderWidth: 1,
    borderColor: '#e1e4e8',
    borderRadius: 6,
    marginBottom: 16,
    padding: 16,
  },
  gistTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  gistMeta: {
    fontSize: 12,
    color: '#586069',
    marginBottom: 8,
  },
  gistDescription: {
    marginBottom: 16,
    color: '#24292e',
  },
  codeContainer: {
    backgroundColor: '#f6f8fa',
    borderRadius: 6,
    overflow: 'hidden',
  },
  filename: {
    padding: 8,
    backgroundColor: '#f1f1f1',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e4e8',
    fontFamily: 'monospace',
  },
  codeBlock: {
    padding: 16,
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 14,
  },
}); 