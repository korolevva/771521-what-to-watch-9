import { HTTP_CODE } from '../types/const';
import { ErrorType } from '../types/error';
import request from 'axios';
import { toast } from 'react-toastify';

export const ErrorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const { response } = error;

  if (error) {
    switch (response?.status) {
      case HTTP_CODE.BAD_REQUEST:
        toast.info(response.data.error);
        break;
      case HTTP_CODE.UNAUTHORIZED:
        toast.info(response.data.error);
        break;
      case HTTP_CODE.NOT_FOUND:
        toast.info(response.data.error);
        break;
    }
  }
};

export default ErrorHandle;
