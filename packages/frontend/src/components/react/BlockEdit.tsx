import { getMarginBottomClass, getMarginTopClass } from '@/lib/utilities';
import { useStore } from '@nanostores/react';
import { useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { $isEditMode } from './store';

type Properties = {
  children: React.ReactNode;
  id?: number;
  marginTop?: Parameters<typeof getMarginTopClass>[0];
  marginBottom?: Parameters<typeof getMarginBottomClass>[0];
};

const Edit = ({ children, marginTop, marginBottom }: Properties) => {
  const editMode = useStore($isEditMode);

  // Get minus top by margin top
  const minusTop = useMemo(() => {
    switch (marginTop) {
      case 'mt-4': {
        return '-top-4 h-4';
      }
      case 'mt-8': {
        return '-top-8 h-8';
      }
      case 'mt-16': {
        return '-top-16 h-16';
      }
      default: {
        return '-top-0 h-0';
      }
    }
  }, [marginTop]);

  // Get minus bottom by margin bottom
  const minusBottom = useMemo(() => {
    switch (marginBottom) {
      case 'mb-4': {
        return '-bottom-4 h-4';
      }
      case 'mb-8': {
        return '-bottom-8 h-8';
      }
      case 'mb-16': {
        return '-bottom-16 h-16';
      }
      default: {
        return '-bottom-0 h-0';
      }
    }
  }, [marginBottom]);

  return (
    <>
      {editMode ? (
        <div className={'group relative'}>
          {children}
          <div
            className={
              'group-hover:pointer absolute inset-0 z-20 overflow-visible group-hover:bg-slate-500/30'
            }
          >
            <div
              className={twMerge(
                'absolute z-20 w-full group-hover:bg-yellow-600/30',
                minusTop
              )}
            />
            <div
              className={twMerge(
                'absolute z-20 w-full group-hover:bg-yellow-600/30',
                minusBottom
              )}
            />
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Edit;
