import "./App.css";
import "@aws-amplify/ui-react/styles.css";

import outputs from "../amplify_outputs.json";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

Amplify.configure(outputs);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <div className="card">
            <p>
              This is the <code>{import.meta.env.VITE_ENV_BRANCH}</code>{" "}
              environment
            </p>
            <p>Welcome, {user?.username}</p>
            <button onClick={signOut}>Sign Out</button>
          </div>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
