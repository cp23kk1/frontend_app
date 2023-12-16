import axios, {
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
        // if (Number(response.status) === 404) {
        //   dispatch(modalActions.onOpen('Error: 404 Notfound.'));
        // }
        return response;
      },
      (error) => {
        // const dispatch = useAppDispatch();
        // dispatchf(modalActions.onOpen('Error: Please contract admin'));
        alert(error);
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
