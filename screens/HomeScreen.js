import { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

export default function HomeScreen() {
  const [search, setSearch] = useState('');

  return (
    <View>
      <Text style={{ fontSize: 27, marginLeft: 10, marginBottom: 50, marginTop: 20 }}>Elevate Horizon Connect</Text>

      <Text style={{ fontSize: 35, marginLeft: 10, marginBottom: 15 }}>Welcome</Text>

      <Text style={{ fontSize: 15, marginLeft: 10, marginBottom: 15 }}>Find and register for community events</Text>

      <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4, alignSelf: 'flex-start', marginLeft: 10, marginBottom: 20 }}>
        <Button title="View Today's Events" onPress={() => alert('Simon Abdullah Ramsey')} />
      </View>

      <Text style={{ fontSize: 20, marginLeft: 10, marginBottom: 5 }}>Search for events:</Text>

      <TextInput
        placeholder="Search Events..."
        value={search}
        onChangeText={setSearch}
        style={{backgroundColor: 'white',
          borderWidth: 2,
          borderColor: 'black',
          borderRadius: 8,
          padding: 10,
          marginHorizontal: 10,
          marginBottom: 15,
          fontSize: 16,
        }}
      />

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginLeft: 10, marginTop: 15 }}>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4}}>
          <Button title="Athletics" onPress={() => alert('Athletics')} />
        </View>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4 }}>
          <Button title="Today" onPress={() => alert('Today')} />
        </View>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4 }}>
          <Button title="Fitness" onPress={() => alert('Fitness')} />
        </View>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4 }}>
          <Button title="Music" onPress={() => alert('Fitness')} />
        </View>
    </View>

    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginLeft: 10, marginTop: 15 }}>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4}}>
          <Button title="Social" onPress={() => alert('Athletics')} />
        </View>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4 }}>
          <Button title="Outdoors" onPress={() => alert('Today')} />
        </View>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4 }}>
          <Button title="Family" onPress={() => alert('Fitness')} />
        </View>
    </View>

  </View>
  );
}