import {IUser} from '../../models/user';
import {IAuthentication} from '../models';

export const DummyAuth: IAuthentication = {
  userId: 't82-a2d-bkg-96g-fds-tf3',
  token:
    '321knfjdnsfopjnewoufnquewnfjnewjdNWIPUQBDDSANDJABSJDBKSAJNFDKJASBFHJbfbkJOhfojsdjfbdskjfnsdfiuebsifbsdkjbf',
};

export const DummyUser: IUser = {
  userId: 't82-a2d-bkg-96g-fds-tf3',
  username: 'dummy_user',
  firstName: 'dummy',
  lastName: 'user',
  email: 'dummy@gmail.com',
};
