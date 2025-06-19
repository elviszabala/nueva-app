import { useState, useEffect } from 'react';
import { auth } from '../db/firebase'; // Import auth from the centralized firebase.ts file
import { User, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';

const useFirebaseLogin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Use Expo's Google auth session provider
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: 'YOUR_WEB_CLIENT_ID', // Replace with your Web client ID from Firebase
    androidClientId: 'YOUR_ANDROID_CLIENT_ID', // Replace with your Android client ID
    iosClientId: 'YOUR_IOS_CLIENT_ID', // Replace with your iOS client ID
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      await promptAsync();
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const signOutUser = async () => {
    try {
      setLoading(true);
      await signOut(auth);
    } catch (error) {
      console.error("Sign Out Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    signInWithGoogle,
    signOutUser,
  };
};

export default useFirebaseLogin;