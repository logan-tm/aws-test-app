import {
  getCurrentUser,
  fetchAuthSession,
  type GetCurrentUserOutput,
} from "aws-amplify/auth";
import { useEffect, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState<GetCurrentUserOutput | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getUser() {
      const session = await fetchAuthSession();
      if (!session.tokens) {
        setUser(null);
        return;
      }
      console.log("Session", session);
      const res = await getCurrentUser();
      setUser(res);
      console.log("User", res);
    }
    setIsLoading(true);
    getUser();
    setIsLoading(false);
  }, []);

  return { user, isLoading };
}
