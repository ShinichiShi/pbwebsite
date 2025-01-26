'use client';

import { useRouter } from 'next/navigation';

export const ContributorsBtn = () => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      const response = await fetch('/api/credits/newCollaborator', {
        method: 'POST',
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data from GitHub API');
      }
      router.push('/Credits');
    } catch (err:any) {
      console.error('Error posting contributor:', err.message);
    }
  };

  return (
    <div>
      <button type='button' onClick={handleClick} className="btn-sm px-4 py-2 text-l font-bold bg-gradient-to-tr from-gray-900 to-indigo-800 mx-3 rounded-xl inline-block">
        View Credits
      </button>
    </div>
  );
};