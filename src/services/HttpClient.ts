import { modalAlert } from '@/components/common/Modal';
import ErrorModal from '@/components/common/Modal/ModalError';
import { useAppDispatch } from '@/hooks';
import { VocaverseResponseData } from '@/types/vocaverse/api/response';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';
//

//
class Http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance ?? this.initHttp();
  }

  initHttp() {
    const http = axios.create({ baseURL: process.env.API_URL });
    http.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    http.interceptors.response.use(
      (response) => {
        if (Number(response.status) === 401) {
        }

        return response;
      },
      (error: AxiosError<VocaverseResponseData>) => {
        const modal = modalAlert();
        if (Number(error.response?.status) >= 500) {
          modal.render({
            children: ErrorModal({
              errorMessage: 'Please contact admin:',
              errorStatus: error.response?.status
            })
          });
        } else if (Number(error.response?.status) >= 400) {
          modal.render({
            children: ErrorModal({
              errorMessage: error.response?.data.status?.message,
              errorStatus: error.response?.status
            })
          });
        }

        return Promise.reject(error);
      }
    );

    this.instance = http;
    return http;
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig) {
    try {
      return this.http.get<T, R>(url, config);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    try {
      return this.http.post<T, R>(url, data, config);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R> {
    try {
      return this.http.put<T, R>(url, data, config);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }
}

export const httpClient = new Http();
