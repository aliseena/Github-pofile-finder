import { useContext } from 'react';
import AlertContext from '../../context/alert/AlerContext';
import { RxCrossCircled } from 'react-icons/rx';

export default function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
        {alert.type === 'error' && (
          <RxCrossCircled className="w-6 h-6 stroke-current mr-3" />
        )}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          <strong className="w-6 h-6 flex-none  mt-0.5">{alert.msg}</strong>
        </p>
      </p>
    )
  );
}
