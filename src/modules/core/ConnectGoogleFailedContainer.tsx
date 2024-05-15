import { modalAlert } from '@/components/common/Modal';
import ErrorModal from '@/components/common/Modal/ModalError';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
export const ConnectGoogleFailedContainer = ({
  render
}: {
  render: () => ReactNode;
}) => {
  const router = useRouter();

  useEffect(() => {
    const modal = modalAlert();
    modal.render({
      closeable: false,
      children: ErrorModal({
        errorMessage: 'Your email already connect to the game.',
        errorStatus: `Can't connect account.`
      })
    });
    router.push('/');
  }, []);

  return render();
};

export default ConnectGoogleFailedContainer;
