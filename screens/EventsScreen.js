import { useState } from 'react';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
const filters = ['Today', 'Athletics', 'Fitness', 'Music', 'Social', 'Outdoors', 'Family', 'Popular'];


const events = [
  { id: '1', title: 'Basketball', time: '09:00 - 11:00', location: 'T.D Garden', spots: '20,', category: 'Athletics', date: 'today'},
  { id: '2', title: 'Run Club', time: '19:00 - 21:00', location: 'Rhodes', spots: '50', category: 'Fitness', date: 'tomorrow'},
  { id: '3', title: 'Beginner Guitar Lessons', time: '19:30-21:30', location: 'Arnold Schwarzeneggers House', spots: '25', category: 'Music', date: 'yesterday'},
  { id: '4', title: 'Simon Ramsey Fanclub Meeting', time: '19:30-21:30', location: '72 Wallaby Way, Sydney', spots: '50000', category: 'Social', date: 'today'},
  { id: '5', title: 'Outdoor League of Legends Lan Party', time: '03:30-04:30', location: 'Howling ', spots: '100', category: 'Outdoors', date: 'next week'},
  { id: '6', title: 'Shrek 2 Reenactment', time: '09:30-11:30', location: 'Far Far Away', spots: '300', category: 'Family', date: 'today'}
]

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
    const filteredEvents = events.filter(event =>
    (selectedFilter === 'All' || event.category === selectedFilter) &&
    event.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <View style={{ marginTop: 20 }}>
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
      <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4 }}>
        <Button title="All" onPress={() => setSelectedFilter('All')} />
      </View>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4 }}>
          <Button title="Today" onPress={() => setSelectedFilter('Today')} />
        </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginLeft: 10, marginTop: 15 }}>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4}}>
          <Button title="Athletics" onPress={() => setSelectedFilter('Athletics')} />
        </View>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4 }}>
          <Button title="Fitness" onPress={() => setSelectedFilter('Fitness')} />
        </View>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4 }}>
          <Button title="Music" onPress={() => setSelectedFilter('Music')} />
        </View>
    </View>

    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5, marginLeft: 10, marginTop: 15, marginBottom: 15 }}>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4}}>
          <Button title="Social" onPress={() => setSelectedFilter('Social')} />
        </View>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4 }}>
          <Button title="Outdoors" onPress={() => setSelectedFilter('Outdoors')} />
        </View>
        <View style={{ borderWidth: 2, borderColor: '#333333', borderRadius: 4 }}>
          <Button title="Family" onPress={() => setSelectedFilter('Family')} />
        </View>

    </View>

    <FlatList
  data={filteredEvents}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 12, marginHorizontal: 10, marginBottom: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
      <Text>{item.time}</Text>
      <Text>{item.location}</Text>
      <Text>Spots remaining: {item.spots}</Text>
      <Text>Spots remaining: {item.date}</Text>
    </View>
    )}
  />
    </View>
    
  );
}
    
