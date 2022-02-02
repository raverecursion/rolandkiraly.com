import type { NextApiRequest, NextApiResponse } from 'next';
import vCardsJS from 'vcards-js';

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  const vCard = vCardsJS();
  vCard.firstName = 'Roland';
  vCard.lastName = 'Kiraly';
  vCard.email = 'contact@rolandkiraly.com';
  vCard.birthday = new Date(2000, 5, 12);
  vCard.photo.attachFromUrl(
    'https://rolandkiraly.com/static/images/profile.jpg',
    'JPEG'
  );
  vCard.socialUrls['github'] = 'https://github.com/innellea';

  res.setHeader('Content-Type', 'text/vcard; name=vcard.vcf');
  res.setHeader('Content-Disposition', 'inline; filename=vcard.vcf');

  res.send(vCard.getFormattedString());
};

export default handler;
