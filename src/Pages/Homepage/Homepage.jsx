import { useState } from 'react';
import "./homepage.css"

const Homepage = () => {
  const [plaintext, setPlaintext] = useState('');
  const [ciphertext, setCiphertext] = useState('');
  const [key, setKey] = useState('');

  // Function to encrypt plaintext using Caesar Cipher
  const encrypt = (text, shift) => {
    let result = '';
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
      if (char.match(/[a-z]/i)) {
        let code = text.charCodeAt(i);
        // Uppercase letters
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
        }
      }
      result += char;
    }
    return result;
  };

const decrypt = (text, shift) => {
    return encrypt(text, 26 - (shift % 26));
  };

  const handleEncrypt = () => {
    
    const shift = parseInt(key, 10);
    setCiphertext(encrypt(plaintext, shift));
  };

  const handleDecrypt = () => {
    const shift = parseInt(key, 10);
    setPlaintext(decrypt(ciphertext, shift));
  };

  return (
    <div className="container">
      <h1>Caesar Cipher</h1>
      <div className="input-section">
        <label htmlFor="plaintext">Plaintext:</label>
        <input
          type="text"
          id="plaintext"
          value={plaintext}
          onChange={(e) => setPlaintext(e.target.value)}
        />
      </div>
      <div className="input-section">
        <label htmlFor="key">Key:</label>
        <input
          type="number"
          id="key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      </div>
      <button onClick={handleEncrypt}>Encrypt</button>
      <div className="input-section">
        <label htmlFor="ciphertext">Ciphertext:</label>
        <input
          type="text"
          id="ciphertext"
          value={ciphertext}
          onChange={(e) => setCiphertext(e.target.value)}
        />
      </div>
      <button onClick={handleDecrypt}>Decrypt</button>
    </div>
  );
};

export default Homepage;
