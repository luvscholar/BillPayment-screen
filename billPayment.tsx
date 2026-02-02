import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function BillScreen () {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Electricity Companies</Text>
      
          <View style={styles.card}>
            <View>
              <Text style={styles.billName}>PHED</Text>
              <Text style={styles.billDate}>Port Harcourt Electric</Text>
            </View>
            <TouchableOpacity style={styles.payButton}>
              <Text style={styles.payText}>Pay</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View>
              <Text style={styles.billName}>IBEDC</Text>
              <Text style={styles.billDate}>Ibadan Electricity</Text>
            </View>
            <TouchableOpacity style={styles.payButton}>
              <Text style={styles.payText}>Pay</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View>
              <Text style={styles.billName}>AEDC</Text>
              <Text style={styles.billDate}>Abuja Electricity</Text>
            </View>
            <TouchableOpacity style={styles.payButton}>
              <Text style={styles.payText}>Pay</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View>
              <Text style={styles.billName}>EKDC</Text>
              <Text style={styles.billDate}>Eko Electricity</Text>
            </View>
            <TouchableOpacity style={styles.payButton}>
              <Text style={styles.payText}>Pay</Text>
            </TouchableOpacity>
          </View>
      
        
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: { 
    flexDirection: 'row', justifyContent: 'space-between', 
    backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 15 
  },
  billName: { fontSize: 18, fontWeight: '600' },
  billDate: { color: 'gray' },
  payButton: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5 },
  payText: { color: '#fff', fontWeight: 'bold' }
});

