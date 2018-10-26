read -p "Updating the database will reset all departments to their default values. Are you sure you want to do this? " -n 1 -r
echo    
if [[ $REPLY =~ ^[Yy]$ ]]; then
    sudo mysql -e "SET @username=\"${DB_USER}\";SET @password=\"${DB_PASS}\";SOURCE 03_update_database.sql;"
    echo "DB Updated!"
fi
