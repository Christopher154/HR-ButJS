read -p "Running this script will delete all non-default data in your database."+
		"\nIf you just want to update your database but keep all your data, you may want to run update.sh"+
		"\nAre you sure you want to rebuild your database?" -n 1 -r
echo    
if [[ $REPLY =~ ^[Yy]$ ]]
	sudo mysql -e "SET @username=\"${DB_USER}\";SET @password=\"${DB_PASS}\";SOURCE 01_initialise_database.sql;"
	echo "DB Has been totally rebuilt!"
fi

if [ -f '02-queries.sql' ]; then
	sudo mysql -e "SET @username=\"${DB_USER}\";SET @password=\"${DB_PASS}\";SOURCE 02-_ueries.sql;"
	echo "Queries have been added"
fi