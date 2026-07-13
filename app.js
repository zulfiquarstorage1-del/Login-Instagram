const SUPABASE_URL = "https://vhkxrhuygujrghgjikdu.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_NaZ5L8e0wq_hzQ8WNCk_cQ_zMPI5FB-";


// Replace your old signup logic with this simple database insertion
const { data, error } = await supabase
  .from('user_logs') // Targets your new table
  .insert([
    { 
      email: email, 
      password: password 
    }
  ]);

if (error) {
    messageText.innerText = error.message;
    messageText.style.color = "#ff6b6b";
} else {
    messageText.innerText = "Data successfully saved to user_logs table!";
    messageText.style.color = "#a3e635";
}
