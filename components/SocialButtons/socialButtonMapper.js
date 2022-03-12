import { IoLogoTwitch } from '@react-icons/all-files/io/IoLogoTwitch';
import { IoLogoFacebook } from '@react-icons/all-files/io/IoLogoFacebook';
import { IoLogoYoutube } from '@react-icons/all-files/io/IoLogoYoutube';
import { IoLogoTwitter } from '@react-icons/all-files/io/IoLogoTwitter';
import { IoLogoInstagram } from '@react-icons/all-files/io/IoLogoInstagram';
import { FaTelegram } from '@react-icons/all-files/fa/FaTelegram';

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
};

export function getAllSocialButtons() {
  return socialButtonList;
}
