const validateReferralData = (data) => {
    const { name, email, referredBy } = data;
  
    if (!name || !email || !referredBy) {
      throw new Error('Name, Email, and Referred By are required fields');
    }
  
    // Additional custom validations if needed
  
    return true;
  };
  
  module.exports = {
    validateReferralData,
  };
  