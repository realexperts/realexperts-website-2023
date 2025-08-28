import { useStore } from '@nanostores/react';
import { $isEditMode, setEditMode } from './store';

const EditorMode = () => {
  const editMode = useStore($isEditMode);

  function handleSwitchEditorMode() {
    setEditMode(!editMode);
  }

  return (
    <button
      onClick={() => handleSwitchEditorMode()}
      className='fixed left-4 top-0 z-50 flex h-screen items-center'
    >
      <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-all hover:scale-125 active:scale-110'>
        E
      </div>
    </button>
  );
};

export default EditorMode;
