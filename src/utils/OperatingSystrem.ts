import { useEffect, useState } from 'react';

type OperatingSystem =
  | 'Windows'
  | 'Mac'
  | 'Linux'
  | 'Android'
  | 'iOS'
  | 'Unknown';

const useOperatingSystem = (): OperatingSystem => {
  const [operatingSystem, setOperatingSystem] = useState<OperatingSystem>('Unknown');

  useEffect(() => {
    const detectOperatingSystem = () => {
      const userAgent = navigator.userAgent;

      if (userAgent.indexOf('Win') !== -1) {
        return 'Windows';
      } else if (userAgent.indexOf('Mac') !== -1) {
        return 'Mac';
      } else if (userAgent.indexOf('Linux') !== -1) {
        return 'Linux';
      } else if (userAgent.indexOf('Android') !== -1) {
        return 'Android';
      } else if (userAgent.indexOf('iOS') !== -1 || userAgent.indexOf('iPad') !== -1) {
        return 'iOS';
      }

      return 'Unknown';
    };

    const detectedOS = detectOperatingSystem();
    setOperatingSystem(detectedOS);
  }, []);

  return operatingSystem;
};

export default useOperatingSystem;
