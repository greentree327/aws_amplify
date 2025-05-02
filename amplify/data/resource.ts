import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  // Demo Model: Stores information from demo request form submissions
  Demo: a 
    .model({
      // User information fields
      firstName: a.string(),
      lastName: a.string(),
      email: a.string(),
      // Business information fields
      businessType: a.string(),
      website: a.string(),
      createdAt: a.string(),
    })
    .authorization((allow) => [
      // Allow public access through API key for all CRUD operations
      // This enables the demo form to be submitted without user authentication
      allow.publicApiKey()
    ]),
});

// Export the schema type for use in frontend TypeScript code
export type Schema = ClientSchema<typeof schema>;

// Configure and export the data infrastructure
export const data = defineData({
  // Attach our schema to the data configuration
  schema,
  // Configure authentication modes
  authorizationModes: {
    // Set API key as the default auth mode
    defaultAuthorizationMode: "apiKey",
    // Configure API key settings
    apiKeyAuthorizationMode: {
      expiresInDays: 30, // API keys will expire after 30 days
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>