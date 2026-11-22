const SUPABASE_URL = "https://sbfcarcmoloahhtlemvs.supabase.co";

const SUPABASE_KEY = "sb_publishable__PsI9q3yNFJnmOqSbpljHg_fNaO1MyJ";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
supabaseClient
    .from('farmers')
    .select('id')
    .limit(1)
    .then(({ data, error }) => {
        if (error) {
            console.log("Connection error:", error.message);
        } else {
            console.log("Supabase connected successfully!");
        }
    });
