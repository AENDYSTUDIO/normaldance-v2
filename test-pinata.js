// Test Pinata IPFS Connection
// Run with: node test-pinata.js

const testPinataConnection = async () => {
    console.log('🔍 Testing Pinata IPFS Configuration...\n');

    // Check environment variables
    const pinataApiKey = process.env.VITE_PINATA_API_KEY;
    const pinataSecret = process.env.VITE_PINATA_SECRET_API_KEY;
    const pinataGateway = process.env.VITE_PINATA_GATEWAY || 'https://gateway.pinata.cloud/ipfs/';

    console.log('📋 Configuration Check:');
    console.log(`   API Key: ${pinataApiKey ? '✅ Set' : '❌ Missing'}`);
    console.log(`   Secret: ${pinataSecret ? '✅ Set' : '❌ Missing'}`);
    console.log(`   Gateway: ${pinataGateway}\n`);

    if (!pinataApiKey || !pinataSecret) {
        console.log('❌ Pinata credentials not found in environment variables');
        console.log('💡 Make sure you have set VITE_PINATA_API_KEY and VITE_PINATA_SECRET_API_KEY in .env.local\n');
        return;
    }

    try {
        console.log('🌐 Testing Pinata API connection...');

        // Test authentication with Pinata
        const response = await fetch('https://api.pinata.cloud/data/testAuthentication', {
            method: 'GET',
            headers: {
                'pinata_api_key': pinataApiKey,
                'pinata_secret_api_key': pinataSecret,
            }
        });

        const data = await response.json();

        if (response.ok && data.message === 'Congratulations! You are communicating with the Pinata API!') {
            console.log('✅ Pinata authentication successful!\n');
            console.log('📊 Response:', data);
            console.log('\n🎉 Your Pinata configuration is working correctly!');
            console.log('🚀 You can now upload files to IPFS through Pinata');
        } else {
            console.log('⚠️ Unexpected response from Pinata:');
            console.log(data);
        }
    } catch (error) {
        console.log('❌ Error connecting to Pinata:');
        console.log(error.message);
        console.log('\n💡 Troubleshooting:');
        console.log('   1. Check that your API keys are correct');
        console.log('   2. Verify your Pinata account is active');
        console.log('   3. Check your internet connection');
    }
};

// Load environment variables from .env.local
const loadEnv = () => {
    try {
        const fs = require('fs');
        const path = require('path');
        const envPath = path.join(__dirname, '.env.local');

        if (fs.existsSync(envPath)) {
            const envContent = fs.readFileSync(envPath, 'utf-8');
            envContent.split('\n').forEach(line => {
                const match = line.match(/^([^=:#]+)=(.*)$/);
                if (match) {
                    const key = match[1].trim();
                    const value = match[2].trim();
                    process.env[key] = value;
                }
            });
        } else {
            console.log('⚠️ .env.local file not found');
        }
    } catch (error) {
        console.log('⚠️ Error loading .env.local:', error.message);
    }
};

// Run the test
loadEnv();
testPinataConnection();
