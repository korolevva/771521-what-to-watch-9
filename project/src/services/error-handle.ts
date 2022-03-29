import { HttpCode } from './../types/const';
import { ErrorType } from '../types/error';
import request from 'axios';
import { toast } from 'react-toastify';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (error) {
    switch (response?.status) {
      case HttpCode.BadRequest:
        toast.info(response.data.error);
        break;
      case HttpCode.UnAuthorized:
        toast.info(response.data.error);
        break;
      case HttpCode.NotFound:
        toast.info(response.data.error);
        break;
    }
  }
};

export default errorHandle;
