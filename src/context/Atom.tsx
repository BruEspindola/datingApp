import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import {atom} from 'jotai';

export const atomName = atom('');

export const atomPhone = atom('');

export const atomConfirm = atom<FirebaseAuthTypes.ConfirmationResult | null>(null);
