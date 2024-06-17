import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../context/UserContext';

const IndexPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user === null) {
      // Redirect to the sign-in page if no user is found
      router.push('/signin');
    } else {
      // User data is available, stop loading
      router.push('/dashboard');
      setLoading(false);
    }
  }, [user, router]);

  if (loading) {
    return <p>Loading...</p>; // You can replace this with a better loading indicator
  }

  return null; // Return null or the actual component once loading is false
};

export default IndexPage;
