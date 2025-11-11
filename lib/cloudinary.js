// lib/cloudinary.js

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_UPLOAD_PRESET = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

// Validate environment variables
if (!CLOUDINARY_CLOUD_NAME) {
  console.error('❌ NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set in .env.local');
}

if (!CLOUDINARY_UPLOAD_PRESET) {
  console.error('❌ NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET is not set in .env.local');
}

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/auto/upload`;

/**
 * Upload file to Cloudinary
 * @param {Blob|File} file - The file to upload
 * @param {Function} onProgress - Progress callback (0-100)
 * @returns {Promise<string>} - Download URL
 */
export const uploadToCloudinary = async (file, onProgress = null) => {
  return new Promise((resolve, reject) => {
    // Validation
    if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
      reject(new Error('Cloudinary configuration is missing. Check your .env.local file.'));
      return;
    }

    if (!file) {
      reject(new Error('No file provided'));
      return;
    }

    console.log('🔄 Starting Cloudinary upload...');
    console.log('📦 File size:', file.size, 'bytes');
    console.log('📦 File type:', file.type);
    console.log('☁️ Cloud name:', CLOUDINARY_CLOUD_NAME);
    console.log('🔑 Upload preset:', CLOUDINARY_UPLOAD_PRESET);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    formData.append('folder', 'chat-app');

    const xhr = new XMLHttpRequest();

    // Track upload progress
    if (onProgress) {
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100;
          console.log(`📤 Upload progress: ${Math.round(percentComplete)}%`);
          onProgress(percentComplete);
        }
      });
    }

    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        try {
          const response = JSON.parse(xhr.responseText);
          console.log('✅ Upload successful!');
          console.log('🔗 URL:', response.secure_url);
          resolve(response.secure_url);
        } catch (parseError) {
          console.error('❌ Failed to parse response:', parseError);
          reject(new Error('Failed to parse Cloudinary response'));
        }
      } else {
        console.error('❌ Upload failed with status:', xhr.status);
        console.error('📄 Response:', xhr.responseText);
        
        let errorMessage = `Upload failed (${xhr.status})`;
        try {
          const errorResponse = JSON.parse(xhr.responseText);
          errorMessage = errorResponse.error?.message || errorMessage;
        } catch (e) {
          // Ignore parsing error
        }
        
        reject(new Error(errorMessage));
      }
    });

    xhr.addEventListener('error', () => {
      console.error('❌ Network error during upload');
      reject(new Error('Network error during upload'));
    });

    xhr.addEventListener('abort', () => {
      console.log('⚠️ Upload cancelled');
      reject(new Error('Upload cancelled'));
    });

    console.log('🚀 Sending request to:', CLOUDINARY_URL);
    xhr.open('POST', CLOUDINARY_URL);
    xhr.send(formData);
  });
};

/**
 * Test Cloudinary configuration
 */
export const testCloudinaryConfig = () => {
  console.log('🧪 Testing Cloudinary Configuration:');
  console.log('Cloud Name:', CLOUDINARY_CLOUD_NAME || '❌ NOT SET');
  console.log('Upload Preset:', CLOUDINARY_UPLOAD_PRESET || '❌ NOT SET');
  console.log('URL:', CLOUDINARY_URL);
  
  if (!CLOUDINARY_CLOUD_NAME || !CLOUDINARY_UPLOAD_PRESET) {
    console.error('❌ Cloudinary is not configured properly!');
    console.error('💡 Make sure you have created .env.local file in your project root');
    console.error('💡 The file should contain:');
    console.error('   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name');
    console.error('   NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=your_preset_name');
    return false;
  }
  
  console.log('✅ Cloudinary configuration looks good!');
  return true;
};