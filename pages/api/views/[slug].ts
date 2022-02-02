import db from '@/utils/firebase';

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void | NextApiResponse> {
  const slug: any = req.query.slug;
  if (req.method === 'POST') {
    const ref = db.ref('views').child(slug);
    const { snapshot } = await ref.transaction((currentViews: any) => {
      if (currentViews === null) {
        return 25;
      }

      return currentViews + 1;
    });

    return res.status(200).json({
      total: snapshot.val(),
    });
  }

  if (req.method === 'GET') {
    const snapshot = await db.ref('views').child(slug).once('value');
    const views = snapshot.val();

    return res.status(200).json({ total: views });
  }
}
