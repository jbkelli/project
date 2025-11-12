/**
 * Number System Converter Utility Functions
 * Supports conversions between Binary, Octal, Decimal, and Hexadecimal
 */

// Validate input based on number system
export const validateInput = (value, base) => {
  if (!value || value.trim() === '') return false;
  
  const patterns = {
    2: /^[01]+$/,           // Binary: only 0 and 1
    8: /^[0-7]+$/,          // Octal: 0-7
    10: /^[0-9]+$/,         // Decimal: 0-9
    16: /^[0-9A-Fa-f]+$/,   // Hexadecimal: 0-9, A-F
  };
  
  return patterns[base]?.test(value.trim()) || false;
};

// Convert from any base to decimal
export const toDecimal = (value, fromBase) => {
  if (!validateInput(value, fromBase)) {
    throw new Error(`Invalid input for base ${fromBase}`);
  }
  return parseInt(value, fromBase);
};

// Convert from decimal to any base
export const fromDecimal = (decimalValue, toBase) => {
  if (isNaN(decimalValue) || decimalValue < 0) {
    throw new Error('Invalid decimal value');
  }
  return decimalValue.toString(toBase).toUpperCase();
};

// Main conversion function
export const convertNumber = (value, fromBase, toBase) => {
  try {
    // Validate input
    if (!validateInput(value, fromBase)) {
      return { success: false, error: `Invalid input for base ${fromBase}` };
    }
    
    // Convert to decimal first
    const decimalValue = toDecimal(value, fromBase);
    
    // Convert from decimal to target base
    const result = fromDecimal(decimalValue, toBase);
    
    return { 
      success: true, 
      result: result,
      decimal: decimalValue 
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get all conversions for a given input
export const getAllConversions = (value, fromBase) => {
  try {
    if (!validateInput(value, fromBase)) {
      return { success: false, error: `Invalid input for base ${fromBase}` };
    }
    
    const decimalValue = toDecimal(value, fromBase);
    
    return {
      success: true,
      conversions: {
        binary: fromDecimal(decimalValue, 2),
        octal: fromDecimal(decimalValue, 8),
        decimal: decimalValue.toString(),
        hexadecimal: fromDecimal(decimalValue, 16),
      }
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Get base name
export const getBaseName = (base) => {
  const names = {
    2: 'Binary',
    8: 'Octal',
    10: 'Decimal',
    16: 'Hexadecimal',
  };
  return names[base] || 'Unknown';
};
