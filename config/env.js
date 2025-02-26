// Import the 'config' function from the 'dotenv' package
import { config } from 'dotenv';

// Call the 'config' function to load environment variables from a .env file
// The path to the .env file is determined dynamically based on the NODE_ENV environment variable
// If NODE_ENV is not set, it defaults to 'development'
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

// Export the PORT, NODE_ENV, and DB_URI environment variables
export const { PORT, NODE_ENV, DB_URI,
              JWT_SECRET, JWT_EXPIRES_IN,
              EMAIL_USER, EMAIL_PASS
             } = process.env;


/* 

The dotenv package is imported, and specifically, the config function is used from it.
The config function is called to load environment variables from a .env file. The path to this file is constructed dynamically based on the NODE_ENV environment variable. If NODE_ENV is not set, it defaults to 'development', resulting in a path like .env.development.local.
The PORT and NODE_ENV environment variables are extracted from process.env and exported for use in other parts of the application.


*/