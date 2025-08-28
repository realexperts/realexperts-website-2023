export const getMaxWidthClass = (width: string | null | undefined) => {
  switch (width) {
    case 'max-w-xs': {
      return 'max-w-xs';
    }
    case 'max-w-sm': {
      return 'max-w-sm';
    }
    case 'max-w-md': {
      return 'max-w-md';
    }
    case 'max-w-lg': {
      return 'max-w-lg';
    }
    case 'max-w-xl': {
      return 'max-w-xl';
    }
    case 'max-w-2xl': {
      return 'max-w-2xl';
    }
    case 'max-w-3xl': {
      return 'max-w-3xl';
    }

    default: {
      return 'max-w-4xl';
    }
  }
};

export const getBackgroundColorClass = (color: string | null | undefined) => {
  switch (color) {
    case 'turquoise': {
      return 'bg-secondary';
    }
    case 'turquoise-light': {
      return 'bg-secondary-light';
    }
    case 'white': {
      return 'bg-white';
    }
    case 'blue': {
      return 'bg-primary';
    }
    default: {
      return 'bg-white';
    }
  }
};

export const getTextColorClass = (color: string | null | undefined) => {
  switch (color) {
    case 'turquoise': {
      return 'text-secondary';
    }
    case 'white': {
      return 'text-white';
    }
    default: {
      return 'text-primary';
    }
  }
};

export const getAlignmentClass = (alignment: string | null | undefined) => {
  switch (alignment) {
    case 'left': {
      return 'text-left';
    }
    case 'center': {
      return 'text-center';
    }
    case 'right': {
      return 'text-right';
    }
    default: {
      return 'text-center';
    }
  }
};

export const getRoundedCornerClasses = (
  roundedCorners: Array<
    'rounded_tl' | 'rounded_tr' | 'rounded_bl' | 'rounded_br' | null | undefined
  >,
  size: '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | null | undefined
) => {
  if (!roundedCorners || roundedCorners.length === 0) {
    return '';
  }

  const sizeSuffix = size ? `-${size}` : '';

  return roundedCorners
    .map((corner) => {
      switch (corner) {
        case 'rounded_tl': {
          return `rounded-tl${sizeSuffix}`;
        }
        case 'rounded_tr': {
          return `rounded-tr${sizeSuffix}`;
        }
        case 'rounded_bl': {
          return `rounded-bl${sizeSuffix}`;
        }
        case 'rounded_br': {
          return `rounded-br${sizeSuffix}`;
        }
        default: {
          return '';
        }
      }
    })
    .join(' ');
};

export const getMarginTopClass = (
  marginTop: 'mt-0' | 'mt-4' | 'mt-8' | 'mt-16' | null | undefined
) => {
  switch (marginTop) {
    case 'mt-0': {
      return 'mt-0';
    }
    case 'mt-4': {
      return 'mt-4';
    }
    case 'mt-8': {
      return 'mt-8';
    }
    case 'mt-16': {
      return 'mt-16';
    }
    default: {
      return 'mt-0';
    }
  }
};

export const getMarginBottomClass = (
  marginBottom: 'mb-0' | 'mb-4' | 'mb-8' | 'mb-16' | null | undefined
) => {
  switch (marginBottom) {
    case 'mb-0': {
      return 'mb-0';
    }
    case 'mb-4': {
      return 'mb-4';
    }
    case 'mb-8': {
      return 'mb-8';
    }
    case 'mb-16': {
      return 'mb-16';
    }
    default: {
      return 'mb-0';
    }
  }
};

export const getPaddingTopClass = (
  paddingTop: 'pt-0' | 'pt-4' | 'pt-8' | 'pt-16' | 'pt-24' | null | undefined
) => {
  switch (paddingTop) {
    case 'pt-0': {
      return 'pt-0';
    }
    case 'pt-4': {
      return 'pt-4';
    }
    case 'pt-8': {
      return 'pt-8';
    }
    case 'pt-16': {
      return 'pt-16';
    }
    case 'pt-24': {
      return 'pt-24';
    }
    default: {
      return 'pt-0';
    }
  }
};

export const getPaddingBottomClass = (
  paddingBottom: 'pb-0' | 'pb-4' | 'pb-8' | 'pb-16' | 'pb-24' | null | undefined
) => {
  switch (paddingBottom) {
    case 'pb-0': {
      return 'pb-0';
    }
    case 'pb-4': {
      return 'pb-4';
    }
    case 'pb-8': {
      return 'pb-8';
    }
    case 'pb-16': {
      return 'pb-16';
    }
    case 'pb-24': {
      return 'pb-24';
    }
    default: {
      return 'pb-0';
    }
  }
};
