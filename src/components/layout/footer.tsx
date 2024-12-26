import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.footer}>
      <Text style={styles.copyright}>
        © 2024 Elixir Mentor LLC. All rights reserved.
      </Text>
      <View style={styles.links}>
        <Pressable onPress={() => navigation.navigate('Terms')}>
          <Text style={styles.link}>Terms</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Privacy')}>
          <Text style={styles.link}>Privacy</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('About')}>
          <Text style={styles.link}>About</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    backgroundColor: '#f6f8fa',
    borderTopWidth: 1,
    borderTopColor: '#e1e4e8',
  },
  copyright: {
    textAlign: 'center',
    color: '#586069',
    marginBottom: 8,
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    color: '#0366d6',
    marginHorizontal: 8,
  },
}); 