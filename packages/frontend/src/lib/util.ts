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
      return 'max-w-2xl';
    }
  }
};

export const getColorClass = (color: string | null | undefined) => {
  switch (color) {
    case 'turquoise': {
      return 'text-re-turquoise';
    }
    case 'white': {
      return 'text-white';
    }
    default: {
      return 'text-re-blue';
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
      return 'text-left';
    }
  }
};
