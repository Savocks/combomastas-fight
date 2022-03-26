import { IoLogoTwitch } from '@react-icons/all-files/io/IoLogoTwitch';
import { IoLogoFacebook } from '@react-icons/all-files/io/IoLogoFacebook';
import { IoLogoYoutube } from '@react-icons/all-files/io/IoLogoYoutube';
import { IoLogoTwitter } from '@react-icons/all-files/io/IoLogoTwitter';
import { IoLogoInstagram } from '@react-icons/all-files/io/IoLogoInstagram';
import { FaTelegram } from '@react-icons/all-files/fa/FaTelegram';
import { MdGroup } from '@react-icons/all-files/md/MdGroup';
import { IoDocument } from '@react-icons/all-files/io5/IoDocument';

const socialButtonList = {
  facebook: {
    label: 'Facebook',
    href: 'http://www.facebook.com',
    IconComponent: IoLogoFacebook,
  },
  twitch: {
    label: 'Twitch',
    href: 'http://twitch.tv',
    IconComponent: IoLogoTwitch,
  },
  youtube: {
    label: 'YouTube',
    href: 'http://youtube.com',
    IconComponent: IoLogoYoutube,
  },
  twitter: {
    label: 'Twitter',
    href: 'http://twitter.com',
    IconComponent: IoLogoTwitter,
  },
  telegram: {
    label: 'Telegram',
    href: 'http://telegram.com',
    IconComponent: FaTelegram,
  },
  instagram: {
    label: 'Instagram',
    href: 'http://instagram.com',
    IconComponent: IoLogoInstagram,
  },
  aboutUs: {
    label: 'about',
    href: '/about',
    IconComponent: MdGroup,
  },
  manifest: {
    label: 'manifest',
    href: '/manifest',
    IconComponent: IoDocument,
  },
};

export function getAllSocialButtons() {
  return socialButtonList;
}
