import { ScrollView, StyleSheet, Text, View } from "react-native"

const AccessibilitySection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrances & Exits</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        <View style={styles.scrollItem}>
          <Text style={{ fontWeight: 'bold' }}>Main Entrance</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>1 Step</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Single Door</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Manual Door(s)</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Wide (75CM)</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>20+ cm high</Text>
            </View>
          </View>
        </View>
        <View style={styles.scrollItem}>
          <Text style={{ fontWeight: 'bold' }}>Main Entrance</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>1 Step</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Single Door</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Manual Door(s)</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Wide (75CM)</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>20+ cm high</Text>
            </View>
          </View>
        </View>
        <View style={styles.scrollItem}>
          <Text style={{ fontWeight: 'bold' }}>Main Entrance</Text>
          <View style={styles.bulletList}>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>1 Step</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Single Door</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Manual Door(s)</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>Wide (75CM)</Text>
            </View>
            <View style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>20+ cm high</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#EEEDFB',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  horizontalScroll: {
    marginTop: 16,
    marginBottom: 16,
  },
  scrollItem: {
    margin: 8,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  bulletList: {
    marginTop: 8,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    width: 10, // bullet width
    fontSize: 20, // bullet symbol size
  },
  bulletText: {
    flex: 1, // to make it responsive
    marginLeft: 5,
  },
})
export default AccessibilitySection