import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios';
import { v4 as uuid } from 'uuid';
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
        if (Number(response.status) === 204) {
          // const modal = modalAlert();
          // modal.render({
          //   title: `Something went wrong`,
          //   content: `Please contact admin.`,
          //   closable: true
          // });
          // throw new Error('error message');
        }
        return response;
      },
      (error) => {
        // const modal = modalAlert();
        // if (Number(error.response?.status) >= 500) {
        //   modal.render({
        //     title: `Service Error (${error.response?.status})`,
        //     content: `Please contact admin.`,
        //     closable: true
        //   });
        // } else if (Number(error.response?.status) >= 400) {
        //   modal.render({
        //     title: `Service(s) Error (${error.response?.status})`,
        //     content: `Tract id: ${error.config.headers.rqUid}. Please contact admin.`,
        //     closable: true
        //   });
        // }
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
