SELECT * FROM homies h
JOIN homies_hash hh ON h.user_id = hh.user_id
WHERE email = $1;