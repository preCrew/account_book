export interface TLoadingState {
  loading: boolean;
  success: boolean;
  error: boolean;
  errorMsg: null | string;
}

export interface TYearMonth {
  year: number;
  month: number;
}

export interface HttpResponse {
  status: number;
  data: unknown;
}
