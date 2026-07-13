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
        // Sends data straight to your new Vercel serverless function endpoint
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("Success! Check your Supabase Table now!");
            authForm.reset(); // Clears the inputs
        } else {
            const err = await response.json();
            alert("Database Error: " + err.error);
        }
    } catch (e) {
        alert("Connection failed. Make sure you pushed the 'api' folder to GitHub!");
    }
});
