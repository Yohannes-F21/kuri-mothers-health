import axios from "axios";
import { apiClient } from "@/lib/api-client";

export type GeneralInquiryPayload = {
  firstName: string;
  lastName: string;
  email: string;
  inquiryType: string;
  message: string;
};

export type PartnershipInquiryPayload = {
  organizationName: string;
  contactPerson: string;
  email: string;
  partnershipType: string;
  inquiryType: "Partnership Inquiry";
  message: string;
};

export type InquiryPayload = GeneralInquiryPayload | PartnershipInquiryPayload;

export type InquiryResponse = {
  message?: string;
  [key: string]: unknown;
};

export class ApiError extends Error {
  status?: number;
  data?: unknown;

  constructor(message: string, status?: number, data?: unknown) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

export const submitInquiry = async (
  payload: InquiryPayload,
  signal?: AbortSignal,
): Promise<InquiryResponse> => {
  try {
    const response = await apiClient.post<InquiryResponse>(
      "/contact-us",
      payload,
      {
        signal,
      },
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const message =
        (error.response?.data as { message?: string } | undefined)?.message ||
        "Unable to submit your inquiry. Please try again.";
      throw new ApiError(message, error.response?.status, error.response?.data);
    }

    throw new ApiError("Unable to submit your inquiry. Please try again.");
  }
};
