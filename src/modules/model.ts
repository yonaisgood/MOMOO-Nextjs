import { User, ProfileToUpdate } from '@/types/user';

interface InputState {
  vaild: boolean;
  value: string;
}

interface SignupForm {
  profileImgFiles: FileList | null;
  displayName: InputState;
  email: InputState;
  password: InputState;
  passwordConfirm: InputState;

  ageChecked: boolean;
  termsChecked: boolean;
  privacyChecked: boolean;
}

interface SignupState {
  signupForm: null | SignupForm;
}

type SignupAction =
  | {
      type: 'reset';
      payload: SignupState;
    }
  | {
      type: 'prevSignup';
      payload: SignupState;
    };

type Path = 'signup' | 'terms' | 'privacy';

interface PageState {
  prevPath: null | Path;
}

type PageAction =
  | {
      type: 'reset';
      payload: PageState;
    }
  | {
      type: 'savePrevPath';
      payload: PageState;
    };

interface AuthState {
  user: User;
  isAuthReady: boolean;
  loggedIn: boolean;
}

type AuthAction =
  | { type: 'login'; payload: User }
  | { type: 'logout'; payload: null }
  | { type: 'editProfile'; payload: ProfileToUpdate };

interface UploadFeedModalState {
  isUploadFeedModalOpen: boolean;
  albumNameToAdd: string[];
  shouldUpdateFeedsData: boolean;
}

type UploadFeedModalAction =
  | {
      type: 'open';
      payload: {
        albumNameToAdd: string[];
        shouldUpdateFeedsData: false;
      };
    }
  | { type: 'close'; payload: null }
  | { type: 'done'; payload: null }
  | { type: 'reset'; payload: null };

interface ReduxState {
  signup: SignupState;
  page: PageState;
  auth: AuthState;
  uploadFeedModal: UploadFeedModalState;
}

export type {
  ReduxState,
  SignupForm,
  SignupState,
  SignupAction,
  Path,
  PageState,
  PageAction,
  AuthState,
  AuthAction,
  UploadFeedModalState,
  UploadFeedModalAction,
};
