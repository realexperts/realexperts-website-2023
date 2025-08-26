import {
  getMarginBottomClass,
  getMarginTopClass,
  getPaddingBottomClass,
  getPaddingTopClass
} from '@/lib/utilities';
import { useStore } from '@nanostores/react';
import { useMemo, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import Modal from './Modal';
import { $isEditMode } from './store';

type Properties = {
  children: React.ReactNode;
  id?: number;
  marginTop?: Parameters<typeof getMarginTopClass>[0];
  marginBottom?: Parameters<typeof getMarginBottomClass>[0];
  paddingTop?: Parameters<typeof getPaddingTopClass>[0];
  paddingBottom?: Parameters<typeof getPaddingBottomClass>[0];
};

const SectionEdit = ({
  children,
  id,
  marginTop,
  marginBottom,
  paddingTop,
  paddingBottom
}: Properties) => {
  const [open, setOpen] = useState(false);

  // Nano store
  const isEditMode = useStore($isEditMode);

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

  const heightTop = useMemo(() => {
    switch (paddingTop) {
      case 'pt-4': {
        return 'h-4';
      }
      case 'pt-8': {
        return 'h-8';
      }
      case 'pt-16': {
        return 'h-16';
      }
      default: {
        return 'h-0';
      }
    }
  }, [paddingTop]);

  const heightBottom = useMemo(() => {
    switch (paddingBottom) {
      case 'pb-4': {
        return 'h-4';
      }
      case 'pb-8': {
        return 'h-8';
      }
      case 'pb-16': {
        return 'h-16';
      }
      default: {
        return 'h-0';
      }
    }
  }, [paddingBottom]);

  return (
    <>
      {isEditMode ? (
        <>
          <div className={'group/section relative'}>
            {children}
            <div
              className={
                'group-hover/section:pointer absolute inset-0 z-10 overflow-visible group-hover/section:bg-slate-500/20'
              }
            >
              <div
                className={twMerge(
                  'group/sectionMarginTop absolute z-10 flex w-full items-center justify-center bg-yellow-600/10',
                  minusTop
                )}
              >
                <span className='text-sm text-yellow-700 opacity-0 group-hover/sectionMarginTop:opacity-30'>
                  {marginTop}
                </span>
              </div>
              {/* For padding top */}
              <div
                className={twMerge(
                  'group/sectionPaddingTop absolute top-0 z-10 flex w-full items-center justify-center group-hover/section:bg-green-600/20',
                  heightTop
                )}
              >
                <span className='text-sm text-green-700 opacity-0 group-hover/sectionPaddingTop:opacity-30'>
                  {paddingTop}
                </span>
              </div>
              {/* For padding bottom */}
              <div
                className={twMerge(
                  'group/sectionPaddingBottom absolute bottom-0 z-10 flex w-full items-center justify-center group-hover/section:bg-green-600/20',
                  heightBottom
                )}
              >
                <span className='text-sm text-green-700 opacity-0 group-hover/sectionPaddingBottom:opacity-30'>
                  {paddingBottom}
                </span>
              </div>
              <div
                className={twMerge(
                  'absolute bottom-0 w-full group-hover/section:bg-green-600/20',
                  heightBottom
                )}
              />
              <div className='items absolute flex h-full w-full items-center justify-end'>
                <button
                  className='relative z-20 rounded-lg bg-re-blue px-4 py-2 text-white'
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Bearbeiten
                </button>
              </div>
              <div
                className={twMerge(
                  'group/sectionMarginBottom absolute z-10 flex w-full items-center justify-center bg-yellow-600/10',
                  minusBottom
                )}
              >
                <span className='text-sm text-yellow-700 opacity-0 group-hover/sectionMarginBottom:opacity-30'>
                  {marginBottom}
                </span>
              </div>
            </div>
          </div>
          <Modal
            setOpen={setOpen}
            open={open}
            url={'https://x.realexperts.de/admin/content/sections/' + id}
          />
        </>
      ) : (
        children
      )}
    </>
  );
};

export default SectionEdit;
