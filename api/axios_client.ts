import axios from 'axios';
import { saveAs } from 'file-saver';
import fileDownload from 'js-file-download';

import { jwtStorage } from '@/utils/local_storage_utils';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/v1`,
});

axiosInstance.interceptors.request.use((config: any) => {
  const token = jwtStorage.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token.accessToken}`;
  }
  return config;
});

export async function axiosTyped<_, TResponse>(config: any): Promise<TResponse> {
  return axiosInstance
    .request(config as any)
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
}

const axiosLandlordInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL || ''}/api/v1`,
});

export async function axiosLandlordTyped<_, TResponse>(config: any): Promise<TResponse> {
  return axiosLandlordInstance
    .request(config as any)
    .then((res) => res.data)
    .catch((e) => {
      throw e;
    });
}

const getAxiosFileClient = () => {
  return async <_, _U = Blob>(params: any, fileName?: string) => {
    if (params.method === 'POST') {
      const response: any = await axiosInstance.request({
        ...params,
        headers: { ...(params.headers || {}), Accept: 'application/pdf' },
        responseType: 'blob' as const,
      });

      const blob = new Blob([response.data], { type: 'application/pdf' });
      saveAs(blob, fileName || 'download.pdf');
    } else if (params.method === 'GET') {
      const response: any = await axiosInstance.request({
        ...params,
        headers: { ...(params.headers || {}), Accept: 'application/pdf' },
        responseType: 'blob' as const,
      });

      if (fileName === 'render') {
        return response.data as _U;
      }

      fileDownload(response.data, fileName || 'download');
    } else {
      throw new Error(`Unsupported HTTP method: ${params.method}`);
    }
  };
};

export const axiosFileClient = getAxiosFileClient();

export default axiosInstance;
