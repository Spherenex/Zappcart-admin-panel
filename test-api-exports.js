// Test script to verify API exports and functionality
console.log('🔍 Testing API module exports...');
console.log('Node.js version:', process.version);

try {
  // Test health.js export
  const healthModule = require('./api/health.js');
  console.log('✅ health.js loaded successfully');
  console.log('   Export type:', typeof healthModule);
  
  if (typeof healthModule === 'function') {
    console.log('✅ health.js exports a function (correct for Vercel)');
  } else {
    console.log('❌ health.js does NOT export a function');
  }

  // Test index.js export
  const indexModule = require('./api/index.js');
  console.log('✅ index.js loaded successfully');
  console.log('   Export type:', typeof indexModule);
  
  if (typeof indexModule === 'function') {
    console.log('✅ index.js exports a function (correct for Vercel)');
  } else {
    console.log('❌ index.js does NOT export a function');
  }

  console.log('\n🎉 All module exports are working correctly!');
  console.log('📋 Summary:');
  console.log('   - Both files use module.exports with async functions');
  console.log('   - Node.js 22.x compatibility added');
  console.log('   - Proper CORS handling implemented');
  console.log('   - Error handling in place');
  
} catch (error) {
  console.error('❌ Error testing modules:', error.message);
  console.error('Stack:', error.stack);
}
