'use client';

import { useRouter, usePathname } from 'next/navigation';

function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale; // Replace the locale segment
    const newPath = segments.join('/');
    router.replace(newPath);
  };

  return (
    <div className="flex gap-1 items-center">
      <div
        onClick={() => changeLanguage('en')}
        className="flex items-center p-1 py-0 border rounded hover:bg-gray-600 cursor-pointer"
      >
        EN
      </div>

      <div
        onClick={() => changeLanguage('th')}
        className="flex items-center p-1 py-0 border rounded hover:bg-gray-600 cursor-pointer"
      >
        ไทย
      </div>
    </div>
  );
}

export default LanguageSwitcher;
