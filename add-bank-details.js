// Temporary script to add sample bank details to Firebase
// Run this with: node add-bank-details.js

const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set, get } = require('firebase/database');

const firebaseConfig = {
  apiKey: "AIzaSyDGTODaP5xdQu_nWmY3z5Nl8FhO1dBOZ7s",
  authDomain: "admin-panel-3f1a9.firebaseapp.com",
  databaseURL: "panel-3f1a9-default-rtdb.firebaseio.com",
  projectId: "admin-panel-3f1a9",
  storageBucket: "admin-panel-3f1a9.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function addSampleBankDetails() {
  try {
    // Get list of shops first
    const shopsRef = ref(db, 'shops');
    const snapshot = await get(shopsRef);
    
    if (snapshot.exists()) {
      const shops = snapshot.val();
      const shopIds = Object.keys(shops);
      
      console.log(`Found ${shopIds.length} shops. Adding bank details...`);
      
      for (let i = 0; i < Math.min(shopIds.length, 5); i++) { // Add to first 5 shops
        const shopId = shopIds[i];
        const shopName = shops[shopId].name || `Shop ${i + 1}`;
        
        const bankDetails = {
          accountHolderName: `${shopName} Account`,
          accountNumber: `12345678${String(i).padStart(2, '0')}`,
          ifscCode: `HDFC000${i + 1}`,
          bankName: 'HDFC Bank',
          branch: `${shopName} Branch`,
          accountType: 'Current',
          updatedAt: new Date().toISOString()
        };
        
        const bankDetailsRef = ref(db, `shops/${shopId}/bankDetails`);
        await set(bankDetailsRef, bankDetails);
        
        console.log(`✅ Added bank details for ${shopName} (${shopId})`);
      }
      
      console.log('🎉 Sample bank details added successfully!');
    } else {
      console.log('❌ No shops found in database');
    }
  } catch (error) {
    console.error('❌ Error adding bank details:', error);
  }
}

addSampleBankDetails();
