import { usePage } from '@inertiajs/react';
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type AppState = {
  modal: ReactNode;
  setModal: Dispatch<SetStateAction<ReactNode>>;
  translations: [];
};

const AppStateContext = createContext<AppState | undefined>(undefined);

const useAppState = function () {
  const context = useContext(AppStateContext);

  if (!context) {
    throw new Error('useAppState must be used inside a `AppStateProvider`');
  }

  return context;
};

const AppStateProvider = ({ children }: PropsWithChildren) => {
  const translations = usePage().props.language as [];

  const [ modal, setModal ] = useState<ReactNode>();

  return (
    <AppStateContext.Provider
      value={{
        modal,
        setModal,
        translations,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export { useAppState, AppStateProvider };
