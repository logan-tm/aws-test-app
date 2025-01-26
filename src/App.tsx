import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import outputs from "../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import useAuth from "./hooks/useAuth";

Amplify.configure(outputs);

function App() {
  // const { username, userId, signInDetails } = await getCurrentUser();
  const { user: hookUser, isLoading } = useAuth();
  console.log("USER", hookUser);
  return (
    <Authenticator signUpAttributes={[]}>
      {({ signOut, user }) => (
        <main>
          <div className="card">
            <p>
              This is the <code>{import.meta.env.VITE_ENV_BRANCH}</code>{" "}
              environment
            </p>
            {isLoading && <p>Loading...</p>}
            {user && <p>Welcome, {user.signInDetails?.loginId}</p>}
            <button onClick={signOut}>Sign Out</button>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
