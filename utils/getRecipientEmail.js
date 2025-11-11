// utils/getRecipientEmail.js
const getRecipientEmail = (users, userLoggedIn) => {
  // Return null if either users or userLoggedIn is missing
  if (!users || !Array.isArray(users) || !userLoggedIn?.email) {
    console.log("getRecipientEmail: Missing data", { users, hasUser: !!userLoggedIn });
    return null;
  }

  // Normalize emails to lowercase for comparison
  const normalizedUserEmail = userLoggedIn.email.toLowerCase();
  const normalizedUsers = users.map(email => email?.toLowerCase()).filter(Boolean);

  console.log("getRecipientEmail: Processing", { normalizedUsers, normalizedUserEmail });

  // Check if this is a self-chat (both users are the same)
  const isSelfChat = normalizedUsers.length === 2 && 
                     normalizedUsers.every(email => email === normalizedUserEmail);

  if (isSelfChat) {
    console.log("getRecipientEmail: Self-chat detected");
    return userLoggedIn.email; // Return original email (not normalized)
  }

  // Filter out the current user's email to find the other participant
  const recipientEmails = users.filter(email => 
    email && email.toLowerCase() !== normalizedUserEmail
  );

  console.log("getRecipientEmail: Found recipients", recipientEmails);

  // Return the first recipient email, or user's email if none found
  return recipientEmails.length > 0 ? recipientEmails[0] : userLoggedIn.email;
};

export default getRecipientEmail;