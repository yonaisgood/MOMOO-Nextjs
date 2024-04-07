import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { getFeedsAndHandleException } from '@/utils/apis';

import type { GetFeedsProps } from '@/services/model';

export default function useGetFeeds() {
  const router = useRouter();
  const [error, setError] = useState<null | string>(null);

  const getFeeds = async (opts: GetFeedsProps) => {
    const feeds = await getFeedsAndHandleException(opts);
    setError(null);

    if (feeds === 'not-found') {
      router.replace('/404');
      return;
    }

    if (!feeds) {
      setError('데이터를 불러오는 중 에러가 발생했습니다');
    }

    return feeds;
  };

  return { getFeeds, error };
}
